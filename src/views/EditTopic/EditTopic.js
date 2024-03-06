const {Topic} = await import(`../../Components/Topic/Topic.js${app_version}`)
const { CreateTopic} = await import(`../CreateTopic/CreateTopic.js${app_version}`)
const {events} = await import(`../CreateTopic/Components/events.js${app_version}`)
const { importTopic,buildCategories, buildAdmins, buildHeaders} = await import(`../CreateTopic/Components/handlers.js${app_version}`)
//const { buildCategories, buildAdmins, buildHeaders} = await import(`../CreateTopic/Components/handlers.js${app_version}&topic=${Topic}`)


export const EditTopic = (props) =>{
    if(Topic.creator != props.userID){
        return "<div>Hozzáférés megtagadva</div>"
    }

    props.Topic = Topic
    const imported = CreateTopic(props)

let context = {}
context.DOM = imported.DOM
context.events = ()=>{
    
    const topicName = document.getElementById("topicName")
    topicName.value = Topic.title
    //topicName.setAttribute("disabled",true)//Törölhető valszeg    

    const topicDescription = document.getElementById("topicDescription")
    topicDescription.value = Topic.description
   // topicDescription.setAttribute("disabled",true)//Törölhető valszeg

    const createTopicCtn = document.querySelector(".createTopicCtn")
    //createTopicCtn.innerHTML = "<button>Módosítás</button>"
    imported.events(Topic)
    importTopic(Topic)

console.log(Topic.erTypes)

    buildCategories(Topic.erTypes)
    buildAdmins(Topic.contributorNames)
    buildHeaders(Topic.privateHeaders)
}


    return context
}