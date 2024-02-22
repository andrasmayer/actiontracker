const {events} = await import(`./src/events.js${app_version}`)
const {App} = await import(`./src/App.js${app_version}`)
App(events)
