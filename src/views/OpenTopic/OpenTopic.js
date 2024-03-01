const {Topic} = await import(`./Topic.js${app_version}`)
const {events} = await import(`./events.js${app_version}`)
const {createHeader, buildFeed, createTable} = await import(`./functions.js${app_version}`)

export const OpenTopic = (props) =>{
    const userID = props.userID == null ? 0:props.userID
    //console.log(userID)
    const pageContent = document.getElementById("page-content")
    let context = {}

    if(Topic != false && typeof Topic != "undefined"){
        context.DOM = createTable(userID)
        context.events = props.userID == null ? () => {} : events
        context.Topic = Topic
    }
    else{
        context.DOM = `<div>A keresett topic nem található</div>` 
        context.events = () => {}
    }
    return context
}