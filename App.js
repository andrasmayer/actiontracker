const userID = 266248
const {createHeader, buildFeed, createTable} = await import(`./src/functions.js${app_version}`)
const root = document.getElementById("root")
root.innerHTML = createTable(userID)



