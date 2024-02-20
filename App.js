//const {Nav} = await import(`./Components/Nav/Nav.js${app_version}`)

const Topic = {
    id: 1,
    title: "Minta Topic",
    creator: 266248,
    creationDate:"2024-02-20 11:24:30",
    contributors:[266248, 270287],
    erTypes:{
        0:{title:"Valami rossz helyen van"},
        1:{title:"Vevői reklamáció"},
        2:{title:"Egyéb"},
       
    },
    privateHeaders: 
        {
            0 : "Col 1",
            1 : "Col 2",
            2 : "Col 3",
            3 : "Col 4",
        }
    ,
    task:[
        {id:1, erTypes:0, responsible: 266233, status_1:0, status_2:0, comment:"Minta comment", creationDate:"2024-02-20", expireDate:"2024-03-20", 
            addin:{
                0:"Random 1",
                1:"",
                2:"",
                3:"",
            }
        },

        {id:2, erTypes:1, responsible: 266233, status_1:1, status_2:0, comment:"Minta comment 2", creationDate:"2024-02-20", expireDate:"2024-03-20",
            addin:{
                0:"",
                1:"",
                2:"Random 2",
                3:"",
            }
        },
    ]

}


const createHeader = (header)=>{
    let context = ``
    Object.keys(header).forEach((key)=>{
        context += `<th>${header[key]}</th>`

    })
   return context
}


const buildFeed = (tasks) =>{
    let addin = `` 

    let context = ``
    tasks.forEach((itm)=>{
        addin = ``
        Object.keys(Topic.privateHeaders).forEach((key)=>{
            console.log( itm.addin[key] )
            addin += `<td>${itm.addin[key]}</td>`
        })

        context += `
        <tr>
            <td>${itm.id}</td>
            <td>${itm.erTypes}</td>
            <td>${itm.responsible}</td>
            <td>${itm.creationDate}</td>
            <td>${itm.expireDate}</td>
            <td>${itm.status_1}</td>
            <td>${itm.status_2}</td>
            <td>${itm.comment}</td>
            ${addin}
        </tr>
        `
    })
    return context
}



const createTable = ()=>{
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

const root = document.getElementById("root")

root.innerHTML = createTable()


