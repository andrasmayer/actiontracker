const {Topic} = await import(`./src/Topic.js${app_version}`)
const {events} = await import(`./src/events.js${app_version}`)
const userID = 266233
const {createHeader, buildFeed, createTable} = await import(`./src/functions.js${app_version}`)
const root = document.getElementById("root")
root.innerHTML = createTable(userID)
events(Topic)


