const {ajax} = await import(`../../Hooks/ajax/ajax.js${app_version}`)
export const TopicList = () =>{
    let context = ""
    
    
    const list = ajax("get", "server/getTopic/TopicList.php", "json")
    list.forEach((itm) => {
        console.log(itm)
        context += `<a class="list-item" href="?view=OpenTopic&topicid=${itm.id}">
            ${itm.id} 
            <strong>${itm.title}</strong>
            ${itm.creationDate} 
        
        </a>`
    })

    console.log(list)
    return`
    <div>
        <div>TopicList</div>
        <div>${context}</div>
    </div>
    `

}