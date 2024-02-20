export const Topic = {
    id: 1,
    title: "Minta Topic",
    creator: 266248,
    creationDate:"2024-02-20 11:24:30",
    contributors:[266248, 270287],
    status_1:["open", "overdue", "closed"],
    status_2:["open", "closed"],
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

        {id:2, erTypes:1, responsible: 266233, status_1:1, status_2:1, comment:"Minta comment 2", creationDate:"2024-02-20", expireDate:"2024-03-20",
            addin:{
                0:"",
                1:"",
                2:"Random 2",
                3:"",
            }
        },
    ]
}






