let {Topic, buildCategories, buildAdmins, buildHeaders} = await import(`./Components/handlers.js${app_version}`)
const {events} = await import(`./Components/events.js${app_version}`)
const { $_GET } = await import(`../../Hooks/findGET/findGET.js${app_version}`)
const { ajax } = await import(`../../Hooks/ajax/ajax.js${app_version}`)
const { json_decode } = await import(`../../Hooks/json_decode/json_decode.js${app_version}`)

const editHeaders = () =>{

    let lastKey = 0
    if(Object.keys(Topic.headerEditor).length == 0){
        Topic.headerEditor = [
            {data:"Kategória",visible:"true",className:"erTypes",private:"false"},
            {data:"Felelős",visible:"true",className:"responsible",private:"false"},
            {data:"Delegált",visible:"true",className:"delegated",private:"false"},
            {data:"Felvéve",visible:"true",className:"creationDate",private:"false"},
            {data:"Határidő",visible:"true",className:"expireDate",private:"false"},
            {data:"Ellenőrizve",visible:"true",className:"status_1",private:"false"},
            {data:"Állapot",visible:"true",className:"status_2",private:"false"},
            {data:"Komment",visible:"true",className:"comment",private:"false"},
            {data:"Akció",visible:"true",className:"action",private:"false"},
    ]

        lastKey = Topic.headerEditor.length

        Object.keys(Topic.privateHeaders).forEach(itm=>{
           Topic.headerEditor.push({data:itm.split("$$").join(""),visible:"true",className:itm.split(' ').join('$$'),private:"true" })
           lastKey++
        })
        const updateHeaders = ajax("post", `./server/EditTopicBase/editHeaders.php`, "html", {data: JSON.stringify(Topic.headerEditor),id:Topic.id})

    }

    let context = ``
    Topic.headerEditor.forEach((itm,key)=>{
        context += 
            `<div class="editHeader" data="${itm.data}" visible="${itm.visible}"  headerid="${key}">
                ${itm.data}
                <input class="headerStatus" type="checkbox" ${itm.visible == "true" ? "checked" : ""} style="float:right">
            </div>`
            
    })

    return context

     
}

export const CreateTopic = (props) =>{
    Topic = props.Topic == null ? Topic : props.Topic

    


    const context = {}
    Topic.contributors.push(props.userID)

    context.DOM = `
        <div class="newTopicCtn">
            <div class="row center">
                <div><h3>Topic neve</h3></div>
                <div>
                    <input class="w-100" id="topicName">
                </div>
            </div>
            <div class="row center">
                <div><h3>Részletek</h3></div>
                <div>
                    <textarea class="w-100"  id="topicDescription"></textarea>
                </div>
            </div>
${
            $_GET.view == "editTopic"  ?
            `<div class="row">
                <div class="center"><h3>Rendezés</h3></div>
                <div class="headerEditor">${editHeaders()}</div>
            </div>`
            :
            ""
}
            <div class="row center">
                <div><h3>Probléma kategóriák</h3></div>
                <div><ul id="categories"></ul></div>
                <div>
                    <input id="newCatName"> <button id="addCat">+</button>
                </div>
                <div class="row">
                    <h3>Adminisztátorok</h3>
                </div>
                <div><ul id="admins"></ul></div>
                <div>
                    <input id="newAdmin"> <button id="addAdmin">+</button>
                    <div id="userList"></div>
                </div>

                <div><ul id="admins"></ul></div>
                <div class="row"  style="padding:0">
                    <h3>Extra fejlécek</h3>
                    <div id="headerList"></div>
                    <input id="newHeader"> <button id="addHeader">+</button>

                </div>                
            </div>
            <div class="center row createTopicCtn">
                <button id="createTopic">Létrehozás</button>
            </div>
        </div>
    `

    context.events = events
       
    return context

}