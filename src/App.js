const {Topic} = await import(`./Topic.js${app_version}`)
const userID = 270287
const {createHeader, buildFeed, createTable} = await import(`./functions.js${app_version}`)

export const App = (events)=>{
    const root = document.getElementById("root")
    if(Topic != false){
        root.innerHTML = createTable(userID)
        events(Topic)
    }
    else{
        root.innerHTML = `<div>A keresett topic nem található</div>`
    }
}

