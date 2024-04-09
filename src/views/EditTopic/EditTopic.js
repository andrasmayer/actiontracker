const {Topic} = await import(`../../Components/Topic/Topic.js${app_version}`)
const { CreateTopic} = await import(`../CreateTopic/CreateTopic.js${app_version}`)

const { importTopic,buildCategories, buildAdmins, buildHeaders} = await import(`../CreateTopic/Components/handlers.js${app_version}`)


export const EditTopic = (props) =>{

    if(Topic.contributors.includes(props.userID) == false ){
        return "<div>Hozzáférés megtagadva</div>"
    }

    props.Topic = Topic
    const imported = CreateTopic(props)

    let context = {}
    context.DOM = imported.DOM
    context.events = ()=>{
        
        const topicName = document.getElementById("topicName")
        topicName.value = Topic.title

        const topicDescription = document.getElementById("topicDescription")
        topicDescription.value = Topic.description

        const createTopicCtn = document.querySelector(".createTopicCtn")
        imported.events(Topic)
        importTopic(Topic)
        createTopic.textContent = "Adatlap módosítása"

        buildCategories(Topic.erTypes)
        buildAdmins(Topic.contributorNames)
        buildHeaders(Topic.privateHeaders)
    }


    return context
}