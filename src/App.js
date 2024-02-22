const {Topic} = await import(`./Topic.js${app_version}`)
const {events} = await import(`./events.js${app_version}`)
const userID = 266248
const {createHeader, buildFeed, createTable} = await import(`./functions.js${app_version}`)

export const App = ()=>{
    const root = document.getElementById("root")
    root.innerHTML = createTable(userID)
    events(Topic)
}

