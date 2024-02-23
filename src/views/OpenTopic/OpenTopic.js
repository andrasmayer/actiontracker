const {Topic} = await import(`./Topic.js${app_version}`)
const {events} = await import(`./events.js${app_version}`)
const userID = 270287
const {createHeader, buildFeed, createTable} = await import(`./functions.js${app_version}`)

export const OpenTopic = () =>{

    const pageContent = document.getElementById("page-content")
    let context = {}

    if(Topic != false && typeof Topic != "undefined"){
        context.DOM = createTable(userID) 
        context.events = events
        context.Topic = Topic
    }
    else{
        context.DOM = `<div>A keresett topic nem található</div>` 
        context.events = null
    }
    return context
}