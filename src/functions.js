const {Topic} = await import(`./Topic.js${app_version}`)
const {DropDowns} = await import(`./DropDowns.js${app_version}`)





export const createHeader = (header)=>{
    let context = ``
    Object.keys(header).forEach((key)=>{
        context += `<th>${header[key]}</th>`

    })
   return context
}


export const buildFeed = (tasks) =>{
    let addin = `` 

    let context = ``
    tasks.forEach((itm)=>{
        addin = ``
        Object.keys(Topic.privateHeaders).forEach((key)=>{
            addin += `<td>${itm.addin[key]}</td>`
        })

        context += `
        <tr>
            <td>${itm.id}</td>
            <td>${Topic.erTypes[itm.erTypes].title}</td>
            <td>${itm.responsible}</td>
            <td>${itm.creationDate}</td>
            <td>${itm.expireDate}</td>
            <td>${DropDowns({element:Topic.status_1, className:"status_1", selected:itm.status_1})}</td>
            <td>${DropDowns({element:Topic.status_2, className:"status_2", selected:itm.status_2})}</td>
            <td>${itm.comment}</td>
            ${addin}
        </tr>
        `
    })
    return context
}



export const createTable = ()=>{
    return `
        <table id="topicTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Kategória</th>
                    <th>Felelős</th>
                    <th>Felvéve</th>
                    <th>Határidő</th>
                    <th>Ellenőrizve</th>
                    <th>Állapot</th>
                    <th>Komment </th>
                    ${createHeader(Topic.privateHeaders)}
                </tr>
            </thead>
            <tbody>${buildFeed(Topic.task)}</tbody>
        </table>
    `
}


