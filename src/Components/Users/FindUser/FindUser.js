const {ajax} = await import(`../../../Hooks/ajax/ajax.js${app_version}`)


export const FindUser = (data) =>{
    let context = `
    <select id="selectUser">
        <option value="0">Kérlek válassz</option>
    `
    if( data.length >=3 ){
        const list = ajax("get","./server/users/findUser.php","json",{username:data})
        list.forEach(itm=>{
            context += `<option value="${itm.userID}">${itm.username} (${itm.position})</option>`
        })
    }
    context += `</select>`
    return context
}