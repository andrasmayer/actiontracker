const {Topic} = await import(`./Topic.js${app_version}`)
const {events} = await import(`./events.js${app_version}`)
const userID = 270287
const {createHeader, buildFeed, createTable} = await import(`./functions.js${app_version}`)


export const OpenTopic = () =>{
    if(Topic != false && typeof Topic != "undefined"){
        root.innerHTML = createTable(userID)
        events(Topic)
    }
    else{
        root.innerHTML = `<div>A keresett topic nem található</div>`
    }

//return`<di>OpenTopic</div>`

}