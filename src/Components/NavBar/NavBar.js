const {views} = await import(`../Router/views.js${app_version}`)
const {$_GET} = await import(`../../Hooks/findGET/findGET.js${app_version}`)
export const NavBar = () => {

    const activeView = $_GET.view == null ? "Home" : $_GET.view

    let context = ""
    Object.keys(views).forEach((key)=>{
        context += `<a href="?view=${key}">${key}</a>`
    })
    return`
        <div>
            <div class="NavBar">${context}</div>
            <div class="page-content">${views[activeView]({views:views})}</div>
        </div>
    `


}