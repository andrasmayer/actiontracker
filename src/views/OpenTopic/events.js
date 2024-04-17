const {ajax} = await import(`../../Hooks/ajax/ajax.js${app_version}`)
const {FindUser} = await import(`../../Components/Users/FindUser/FindUser.js${app_version}`)
const { datatables2} = await import(`../../Hooks/datatables2/datatables2.js${app_version}`)


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
        const editor = ajax("post", "./server/editTopic/editTask.php", "html", OBJ)
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
    const responsible = document.querySelectorAll(".responsible")

    newTask != null &&
    newTask.addEventListener("click", (event)=>{
        let task = { erTypes:0, responsible: "", status_1:0, status_2:0, comment:"", action : "", creationDate:today() ,
         expireDate:"0000-00-00", addin:{} }

        Object.keys(Topic.privateHeaders).forEach((key)=>{
            task.addin[key] = ""
        })
        const newTaskId = ajax("post", "./server/editTopic/newTask.php", "json", {task:task,topicid:Topic.id})
        location.reload()
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
            if(
                itm.classList.contains("responsible") == false && 
                itm.classList.contains("delegated") == false 
            
            ){ fire(event, event.keyCode, Topic)    }
            else{
                const hasSelect = itm.parentNode.querySelector("select")
                hasSelect != null && hasSelect.remove()
                itm.parentNode.insertAdjacentHTML('beforeend', FindUser(event.target.value, itm.classList[0]) )
                itm.parentNode.querySelector("select").addEventListener("change",(event_2)=>{
                
                    let selectedOption = null
                    event_2.target.querySelectorAll("option").forEach(opt=>{
                        if(opt.value == event_2.target.value){ selectedOption = opt.textContent.split("(")[0] }
                    })
                    itm.value = event_2.target.value
                    fire(event, 13, Topic)
                    itm.value = selectedOption
                })
            }
        })
    })

    inputFields.forEach((itm)=>{
        itm.addEventListener("change", (event)=>{
            fire(event, null, Topic)
        })
    })








    //For datatable2
    const tempTasks = [];
    Topic.task.forEach(itm=>{
        const tempItm = {};
        Object.keys(itm).forEach((key)=>{
            if(key == 'addin'){
                Object.keys(itm[key]).forEach((key2)=>{
                    tempItm[key2] = String(itm[key][key2])
                })
            }
            else if(key == "responsible"){ 
// tempItm["responsibleName"] = String(itm[key])


             }
            else{   tempItm[key] = String(itm[key])  }
        })
        tempTasks.push(tempItm)
    })
//console.log(JSON.stringify( tempTasks) )
    
    const tempHeader =  ["id"]
    Topic.headerEditor.forEach(itm=>{ 
        if(itm.className == "responsible"){itm.className = "responsibleName" }
        tempHeader.push(itm.className) })
    datatables2({table:"taskList",feed:tempTasks,header:tempHeader})






}