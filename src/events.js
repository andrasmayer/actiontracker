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
        //console.log(Topic.task[rowID])

    }
}


export const events = (Topic) =>{
    
    const inputFields = document.querySelectorAll("input")
    const inputTextAreas = document.querySelectorAll("textarea")
    const inputSelects = document.querySelectorAll("select")

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
        console.log("/src/event.js 56. sor. Backend Integráció következik")
