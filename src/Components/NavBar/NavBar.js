const {views} = await import(`../Router/views.js${app_version}`)
const {$_GET} = await import(`../../Hooks/findGET/findGET.js${app_version}`)
const {ajax} = await import(`../../Hooks/ajax/ajax.js${app_version}`)
export const NavBar = () => {
    const root = document.getElementById("root")
    const userID = ajax("get", "./server/activeUser/activeUser.php", "json");
    const activeView = $_GET.view == null ? "Home" : $_GET.view
    document.title = views[activeView].title

    let context = ""
    Object.keys(views).forEach((key)=>{
        const activeWindow = key == $_GET.view ? "active" : ""
        if( (views[key].login == false || (views[key].login == true && userID != null) ) &&  views[key].title != null) {
            context += `<a class="${activeWindow}" href="?view=${key}">${views[key].title}</a>`
        }
    })

    const viewContext =  views[activeView].fnc({userID:userID})
    const output = viewContext.DOM != null ?   viewContext.DOM : viewContext

    root.innerHTML = `
        <nav>
            <div class="navbar">
                <ul class="menu">
                    <li>${context}</li>
                </ul>
            </div>
        </nav>
        <div>
            <div class="page-content">${output}</div>
        </div>`

    if( viewContext.DOM != null ){  viewContext.events(viewContext.Topic)    }
}