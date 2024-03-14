const {ajax} = await import(`../../Hooks/ajax/ajax.js${app_version}`)
const {list} = await import(`./Components/list.js${app_version}`)
const {events} = await import(`./Components/events.js${app_version}`)
export const TopicList = (props) =>{
    const context = {DOM:list(props), events: events}
    return context
}