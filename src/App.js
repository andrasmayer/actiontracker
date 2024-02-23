const {Topic} = await import(`./Topic.js${app_version}`)
<<<<<<< HEAD
const userID = 266248
=======
const userID = 270287
>>>>>>> master
const {createHeader, buildFeed, createTable} = await import(`./functions.js${app_version}`)

export const App = (events)=>{
    const root = document.getElementById("root")
<<<<<<< HEAD
    root.innerHTML = createTable(userID)
    events(Topic)
=======
    if(Topic != false){
        root.innerHTML = createTable(userID)
        events(Topic)
    }
    else{
        root.innerHTML = `<div>A keresett topic nem található</div>`
    }
>>>>>>> master
}

