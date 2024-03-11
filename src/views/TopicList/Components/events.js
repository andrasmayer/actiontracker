const {ajax} = await import(`../../../Hooks/ajax/ajax.js${app_version}`)

export const events = () =>{
    const context = document.getElementById("context")
    const search = document.getElementById("search")

    search.addEventListener("keyup",(e)=>{
        context.innerHTML = ""
        const list = ajax("get", "server/getTopic/TopicList.php", "json",{search:e.target.value})

        list.forEach((itm) => {
            context.innerHTML += `
            <div class="card">   
                <div class="container">
                    <a class="list-item" href="?view=OpenTopic&topicid=${itm.id}">
                        ${itm.id} 
                        <strong>${itm.title}</strong>
                        ${itm.creationDate}
                    </a>
                </div>
            </div>
            `
        })

    })
}