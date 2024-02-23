//Nézetek
const {Home} = await import(`../../views/Home/Home.js${app_version}`)
const {OpenTopic} = await import(`../../views/OpenTopic/OpenTopic.js${app_version}`)
const {MyTasks} = await import(`../../views/MyTasks/MyTasks.js${app_version}`)
const {CreateTopic} = await import(`../../views/CreateTopic/CreateTopic.js${app_version}`)
const {TopicList} = await import(`../../views/TopicList/TopicList.js${app_version}`)

export const views = {
    OpenTopic:OpenTopic,
    MyTasks:MyTasks,
    CreateTopic:CreateTopic,
    Home:Home,
    TopicList:TopicList
}