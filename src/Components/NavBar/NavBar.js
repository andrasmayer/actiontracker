const {views} = await import(`../Router/views.js${app_version}`)
const {$_GET} = await import(`../../Hooks/findGET/findGET.js${app_version}`)
export const NavBar = () => {
    const root = document.getElementById("root")

    const activeView = $_GET.view == null ? "Home" : $_GET.view

    let context = ""
    Object.keys(views).forEach((key)=>{
        context += `<a href="?view=${key}">${key}</a>`
    })

    const viewContext =  views[activeView]()
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