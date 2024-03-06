//Nézetek
const {Home} = await import(`../../views/Home/Home.js${app_version}`)
const {OpenTopic} = await import(`../../views/OpenTopic/OpenTopic.js${app_version}`)
const {MyTasks} = await import(`../../views/MyTasks/MyTasks.js${app_version}`)
const {CreateTopic} = await import(`../../views/CreateTopic/CreateTopic.js${app_version}`)
const {TopicList} = await import(`../../views/TopicList/TopicList.js${app_version}`)
const {EditTopic} = await import(`../../views/EditTopic/EditTopic.js${app_version}`)

export const views = {
    home:{title:"Főoldal", fnc:Home, login:false},
    OpenTopic:{title:"Topic", fnc:OpenTopic, login:false,hidden:true},
    MyTasks:{title:"Feladataim", fnc:MyTasks, login:true},
    CreateTopic:{title:"Topic létrehozása", fnc:CreateTopic, login:true},
    TopicList:{title:"Lista", fnc:TopicList, login:false},
    editTopic:{title:"Topic szerkesztése", fnc:EditTopic, login:false,hidden:true},

}