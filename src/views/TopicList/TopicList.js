const {ajax} = await import(`../../Hooks/ajax/ajax.js${app_version}`)
export const TopicList = (props) =>{

    const OBJ = props.myTopics === true ? {userID:props.userID} : {}

    let context = ""
       
    const list = ajax("get", "server/getTopic/TopicList.php", "json",OBJ)
    console.log(list)
    list.forEach((itm) => {
        const owner = props.userID == itm.creator ? `<i class="fa fa-user" style="color:blue"></i>` : ""
        context += `
        
        <div class="card">   
            <div class="container">
                <a class="list-item" href="?view=OpenTopic&topicid=${itm.id}">
                    ${itm.id} 
                    <strong>${itm.title}</strong>
                    ${itm.creationDate} ${owner}
                </a>
            </div>
        </div>
        `
    })

    return `<div>
                <div>TopicList</div>
                <div>${context}</div>
            </div>`
}