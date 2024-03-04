const {ajax} = await import(`../../Hooks/ajax/ajax.js${app_version}`)
const {$_GET} = await import(`../../Hooks/findGET/findGET.js${app_version}`)

const Topic = ajax("get", "./server/getTopic/getTopic.php", "json", {topicid:$_GET.topicid})
if(Topic != false && typeof Topic != "undefined"){
    Topic.privateHeaders = JSON.parse(Topic.privateHeaders)
    Topic.erTypes = JSON.parse(Topic.erTypes)
    Topic.status_1 = ["open", "overdue", "closed"]
    Topic.status_2 = ["open", "closed"]
    Topic.task.forEach( (itm,key)=>{
        Topic.task[key].addin = JSON.parse(itm.addin)
        if( itm.responsibleName == null){ Topic.task[key].responsibleName = "" } 
    })    

}
export {Topic}



