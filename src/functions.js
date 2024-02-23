const {Topic} = await import(`./Topic.js${app_version}`)
const {adminView, responsibleView, guestView} = await import(`./roleview.js${app_version}`)
<<<<<<< HEAD
=======

const docHeader = (data, userID)=>{
    let context = ""
    const isAdmin = Topic.contributors.includes(userID)
    if(isAdmin === true){ context += 
        `<div class="controls">
            <button id="newTask"> Új feladat </button>
        </div>`
    }


    return `
        <div class="docHeader">
            <div>ID: ${data.id} </div>
            <div>Név: ${data.title} </div>
            <div>Tulajdonos: ${data.creator} </div>
            <div>Létrehozva: ${data.creationDate} </div>
            <div>Résztvevők: ${data.contributors} </div>
            ${context}
        </div>
    `

}
>>>>>>> ef925af4142940aa12462eeb6ca80012b3ce2d4f


export const createHeader = (header)=>{
    let context = ``
    Object.keys(header).forEach((key)=>{
        context += `<th>${header[key]}</th>`

    })
   return context
}

export const buildFeed = (tasks, userID) =>{
    const isAdmin = Topic.contributors.includes(userID)
    let isResponsible = false
    let context = ``
<<<<<<< HEAD
=======



>>>>>>> ef925af4142940aa12462eeb6ca80012b3ce2d4f
    tasks.forEach((itm)=>{
        isResponsible = itm.responsible == userID
        if(isAdmin === true){ context += adminView(itm, Topic) }
        else if(isResponsible === true){ context += responsibleView(itm, Topic) }
        else{ context += guestView(itm, Topic) }
<<<<<<< HEAD
=======
        
    
>>>>>>> ef925af4142940aa12462eeb6ca80012b3ce2d4f
    })
    return context
}


export const createTable = (userID)=>{
    return `
<<<<<<< HEAD
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
=======
        <div>
            ${docHeader(Topic, userID)}
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
        </div>
>>>>>>> ef925af4142940aa12462eeb6ca80012b3ce2d4f
    `
}


