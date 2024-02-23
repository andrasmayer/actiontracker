const {App} = await import(`../../App.js${app_version}`)
const {ajax} = await import(`../../Hooks/ajax/ajax.js${app_version}`)

const fire = (event, keyCode, Topic) =>{
    if(keyCode == null || keyCode == 13){
        const target = event.target
        const rowIndex= event.target.parentNode.parentNode.getAttribute("rowindex")
        const rowID = event.target.parentNode.parentNode.getAttribute("rowid")
        const OBJ = {topicid:Topic.id, rowid:rowID, column:target.classList[0], value:target.value}
        const prefix = OBJ.column.split("addin_")
        if( prefix.length == 1){
            Topic.task[rowIndex][OBJ.column] = OBJ.value
        }
        else{
            Topic.task[rowIndex].addin[prefix[1]] = OBJ.value
        }


        if(  OBJ.column.includes("addin_") === true ){
            OBJ.column  = "addin";
            OBJ.value   = JSON.stringify(Topic.task[rowIndex].addin);
        }
        
        ajax("post", "./server/editTopic/editTask.php", "json", OBJ)
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
        let task = { erTypes:0, responsible: "", status_1:0, status_2:0, comment:"", creationDate:today() , expireDate:"0000-00-00", addin:{} }

        Object.keys(Topic.privateHeaders).forEach((key)=>{
            task.addin[key] = ""
        })
        const newTaskId = ajax("post", "./server/editTopic/newTask.php", "json", {task:task,topicid:Topic.id})
        task.id = newTaskId
        Topic.task.push(task)
        App(events)
    })


    inputSelects.forEach((itm)=>{
        itm.addEventListener("change", (event)=>{
            fire(event, null, Topic)
        })
    })


    inputTextAreas.forEach((itm)=>{
        itm.addEventListener("keydown", (event)=>{
            fire(event, event.keyCode, Topic)
        })
    })


    inputFields.forEach((itm)=>{
        itm.addEventListener("keydown", (event)=>{
            fire(event, event.keyCode, Topic)
        })
    })

    inputFields.forEach((itm)=>{
        itm.addEventListener("change", (event)=>{
            fire(event, null, Topic)
        })
    })

}
