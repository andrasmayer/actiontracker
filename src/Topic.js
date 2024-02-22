const {ajax} = await import(`./Hooks/ajax/ajax.js${app_version}`)
const {$_GET} = await import(`./Hooks/findGET/findGET.js${app_version}`)
/*
export const Topic = {
    id: 1,
    title: "Minta Topic",
    creator: 266248,
    creationDate:"2024-02-20 11:24:30",
    contributors:[266248, 270287],
    status_1:["open", "overdue", "closed"],
    status_2:["open", "closed"],
    erTypes:{
        0:{title:"Kérlek válassz"},
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

        {id:2, erTypes:1, responsible: 266233, status_1:1, status_2:1, comment:"Minta comment 2", creationDate:"2024-02-20", expireDate:"2024-03-20",
            addin:{
                0:"",
                1:"",
                2:"Random 2",
                3:"",
            }
        },
        
        {id:3, erTypes:1, responsible: 266248, status_1:1, status_2:1, comment:"Minta comment 2", creationDate:"2024-02-20", expireDate:"2024-03-20",
            addin:{
                0:"",
                1:"",
                2:"Random 2",
                3:"",
            }
        },
    ]
}

*/

const Topic = ajax("get", "./server/getTopic/getTopic.php", "json", {topicid:$_GET.topicid})
if(Topic != false){
    Topic.privateHeaders = JSON.parse(Topic.privateHeaders)
    Topic.erTypes = JSON.parse(Topic.erTypes)
    Topic.status_1 = ["open", "overdue", "closed"]
    Topic.status_2 = ["open", "closed"]
}
export {Topic}



console.log($_GET)


