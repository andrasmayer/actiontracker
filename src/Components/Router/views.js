//Nézetek
const {Home} = await import(`../../views/Home/Home.js${app_version}`)
const {OpenTopic} = await import(`../../views/OpenTopic/OpenTopic.js${app_version}`)
const {MyTasks} = await import(`../../views/MyTasks/MyTasks.js${app_version}`)
const {CreateTopic} = await import(`../../views/CreateTopic/CreateTopic.js${app_version}`)
const {TopicList} = await import(`../../views/TopicList/TopicList.js${app_version}`)
const {EditTopic} = await import(`../../views/EditTopic/EditTopic.js${app_version}`)
//const {MyTopics} = await import(`../../views/MyTopics/MyTopics.js${app_version}`)

export const views = {
    home:{title:"Főoldal", fnc:Home, login:false},
    OpenTopic:{title:"Topic", fnc:OpenTopic, login:false,hidden:true},
    CreateTopic:{title:"Topic létrehozása", fnc:CreateTopic, login:true},

    MyTasks:{title:"Feladataim", fnc:MyTasks, login:true},
    TopicList:{title:"Topic Lista", fnc:TopicList, login:false},
   // MyTopics:{title:"Saját Lista", fnc:MyTopics, login:true},
    editTopic:{title:"Topic szerkesztése", fnc:EditTopic, login:false,hidden:true},

}