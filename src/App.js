const {Topic} = await import(`./Topic.js${app_version}`)
const userID = 266248
const {createHeader, buildFeed, createTable} = await import(`./functions.js${app_version}`)

export const App = (events)=>{
    const root = document.getElementById("root")
    root.innerHTML = createTable(userID)
    events(Topic)
}

