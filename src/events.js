const {App} = await import(`./App.js${app_version}`)
const fire = (event, keyCode, Topic) =>{
    if(keyCode == null || keyCode == 13){
        const target = event.target
        const rowID = event.target.parentNode.parentNode.getAttribute("rowid")
        const OBJ = {topicid:Topic.id, rowid:rowID, column:target.classList[0], value:target.value}
        const prefix = OBJ.column.split("addin_")
        if( prefix.length == 1){

            Topic.task[rowID][OBJ.column] = OBJ.value

        }
        else{

            Topic.task[rowID].addin[prefix[1]] = OBJ.value


        }

    }
}


const today = ()=>{
    let date = new Date().toLocaleDateString('en-CA')
    return date
}


export const events = (Topic) =>{
    
    const inputFields = document.querySelectorAll("input")
    const inputTextAreas = document.querySelectorAll("textarea")
    const inputSelects = document.querySelectorAll("select")
    const newTask = document.getElementById("newTask")

    newTask.addEventListener("click", (event)=>{
        const tasks = Object.keys(Topic.task)
        const newID = Topic.task[tasks[tasks.length - 1]].id + 1
        console.log(newID)
        let task = {id:newID, erTypes:0, responsible: null, status_1:0, status_2:0, comment:"", creationDate:today() , expireDate:"0000-00-00", addin:{} }
        Topic.task.push(task)

        Object.keys(Topic.privateHeaders).forEach((key)=>{
            task.addin[key] = ""
            
        })

        App(events)
    })


    inputSelects.forEach((itm)=>{
        itm.addEventListener("change", (event)=>{
            
            fire(event, null, Topic)
        })
    })


    inputTextAreas.forEach((itm)=>{
        itm.addEventListener("keyup", (event)=>{
            fire(event, event.keyCode, Topic)
        })
    })


    inputFields.forEach((itm)=>{
        itm.addEventListener("keyup", (event)=>{
            fire(event, event.keyCode, Topic)
        })
    })


}
        console.log("/src/event.js 50. sor. Backend Integráció következik\n newID backendből kell megoldani")
