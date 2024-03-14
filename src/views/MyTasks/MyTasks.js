const { ajax } = await import(`../../Hooks/ajax/ajax.js${app_version}`)

export const MyTasks = (props) =>{
    const tasks = ajax("get","./server/Tasks/myTasks.php","json",{userID : props.userID})
    let context = ``
    tasks.forEach(itm=>{
        console.log(itm)
        context += `
            <tr onclick="location.href='?view=OpenTopic&topicid=${itm.topicId}'">
                <td>${itm.id}</td>
                <td>${itm.title}</td>
                <td>${itm.erTypes}</td>
                <td>${itm.action}</td>
                <td>${itm.expireDate}</td>
            </tr>
        `
    })
    return`<div>
        ${
        tasks.length >0 ?
        `<table class="styled-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Topic</th>
                    <th>Eltérés</th>
                    <th>Akció</th>
                    <th>Határidő</th>
                </tr>
            <thead>
            <tbody>${context}</tbody>
        </table>`
        :
        "<h3>Nincs folyamatban lévő feladatod</h3>"
    }
    </div>`
}