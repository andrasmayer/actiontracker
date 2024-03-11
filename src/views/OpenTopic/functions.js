const {Topic} = await import(`../../Components/Topic/Topic.js${app_version}`)
const {adminView, responsibleView,delegatedView, guestView} = await import(`./roleview.js${app_version}`)

const docHeader = (data, userID)=>{
    let context = ""
    const isAdmin = Topic.contributors.includes(userID)
    if(isAdmin === true){ context += 
        `<div class="controls">
            <button id="newTask"> Új feladat </button>
        </div>`
    }


    return `
        <div class="card">
            <div class="containert">
                <div class="docHeader">
                    <div>ID: ${data.id} </div>
                    <div>Név: ${data.title} </div>
                    <div>Tulajdonos: ${data.creator} </div>
                    <div>Létrehozva: ${data.creationDate} </div>
                    <div>Résztvevők: ${data.contributors} </div>
                    ${context}
                </div>
            </div>
        </div>
    `

}


export const createHeader = (header)=>{
    let context = ``
    Object.keys(header).forEach((key)=>{
        context += `<th>${header[key]}</th>`

    })
   return context
}

export const buildFeed = (tasks, userID) =>{
    const isAdmin = Topic.contributors.includes(userID)
    let isResponsible = false
    let isDelegated = false
    let context = ``

    tasks.forEach((itm,key)=>{
        //isResponsible = itm.responsible == userID || userID == itm.delegated
        isResponsible = itm.responsible == userID 
        isDelegated = itm.responsible == userID || userID == itm.delegated



        //delegatedView
        if(isAdmin === true){ context += adminView(itm, Topic, key) }
        else if(isResponsible === true){ context += responsibleView(itm, Topic, key) }
        else if(isDelegated === true){ context += delegatedView(itm, Topic, key) }
        else{ context += guestView(itm, Topic) }
    })
    return context
}


export const createTable = (userID)=>{

    return `
        <div>
            ${docHeader(Topic, userID)}
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Kategória</th>
                        <th>Felelős</th>
                        <th>Delegált</th>
                        <th>Felvéve</th>
                        <th>Határidő</th>
                        <th>Ellenőrizve</th>
                        <th>Állapot</th>
                        <th>Komment</th>
                        <th>Akció</th>
                        ${createHeader(Topic.privateHeaders)}
                    </tr>
                </thead>
                <tbody>${buildFeed(Topic.task, userID)}</tbody>
            </table>
        </div>
    `
}


