const {Topic} = await import(`./Topic.js${app_version}`)
const {adminView, responsibleView, guestView} = await import(`./roleview.js${app_version}`)





export const createHeader = (header)=>{
    let context = ``
    Object.keys(header).forEach((key)=>{
        context += `<th>${header[key]}</th>`

    })
   return context
}


export const buildFeed = (tasks, userID) =>{
    console.log(userID)
    const isAdmin = Topic.contributors.includes(userID)
    let isResponsible = false



   

    let context = ``
    tasks.forEach((itm)=>{
        console.log(userID == itm.responsible)



        context += adminView(itm, Topic)
        //context += guestView(itm, Topic)
        //context += responsibleView(itm, Topic)
    })
    return context
}



export const createTable = (userID)=>{
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
            <tbody>${buildFeed(Topic.task, userID)}</tbody>
        </table>
    `
}


