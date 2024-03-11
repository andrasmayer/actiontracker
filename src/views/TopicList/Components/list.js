const { ajax } = await import(`../../../Hooks/ajax/ajax.js${app_version}`)
const { $_GET } = await import(`../../../Hooks/findGET/findGET.js${app_version}`)

export const list = (props) => {
  const OBJ = props.myTopics === true ? { userID: props.userID } : {}

  let content = ""

  const list = ajax("get", "server/getTopic/TopicList.php", "json", OBJ)
  list.forEach((itm) => {
    const owner =
      props.userID == itm.creator
        ? `<i class="fa fa-user" style="color:blue"></i>`
        : ""
    content += `
        
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

  content = `<div>
                ${
                  $_GET.view == "TopicList"
                    ? `<div>
                        <input placeholder="Mit keresel?" id="search">
                    </div>`
                    : ``
                }
                <div id="context">${content}</div>
            </div>`

  return content
}
