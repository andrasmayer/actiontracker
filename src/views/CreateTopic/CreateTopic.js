let {Topic, buildCategories, buildAdmins, buildHeaders} = await import(`./Components/handlers.js${app_version}`)
const {events} = await import(`./Components/events.js${app_version}`)


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
                <div class="row">
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