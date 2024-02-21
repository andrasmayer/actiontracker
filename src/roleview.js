const {DropDowns} = await import(`./DropDowns.js${app_version}`)

export const adminView = (itm, Topic) => {
    let addin = ``
    Object.keys(Topic.privateHeaders).forEach((key)=>{
        addin += `<td><textarea class="addin_${key}">${itm.addin[key]}</textarea></td>`
    })

    
    
    return `
    <tr>
        <td>${itm.id}</td>
        <td>${DropDowns({element:Object.keys(Topic.erTypes), className:"status_1", selected:itm.erTypes, text:Topic.erTypes[itm.erTypes]})}</td>
        <td>${itm.responsible}</td>
        <td>${itm.creationDate}</td>
        <td>${itm.expireDate}</td>
        <td>${DropDowns({element:Topic.status_1, className:"status_1", selected:itm.status_1})}</td>
        <td>${Topic.status_1[itm.status_2]}</td>
        <td><textarea class="comment">${itm.comment}</textarea></td>
        ${addin}
    </tr>
    `
}

export const responsibleView = (itm, Topic) => {
    let addin = ``
    Object.keys(Topic.privateHeaders).forEach((key)=>{
        addin += `<td><textarea class="addin_${key}">${itm.addin[key]}</textarea></td>`
    })

    
    
    return `
    <tr>
        <td>${itm.id}</td>
        <td>${Topic.erTypes[itm.erTypes].title}</td>
        <td>${itm.responsible}</td>
        <td>${itm.creationDate}</td>
        <td>${itm.expireDate}</td>
        <td>${Topic.status_1[itm.status_1]}</td>
        <td>${DropDowns({element:Topic.status_2, className:"status_2", selected:itm.status_2})}</td>
        <td><textarea class="comment">${itm.comment}</textarea></td>
        ${addin}
    </tr>
    `
}

export const guestView = (itm, Topic) => {
    let addin = ``
    Object.keys(Topic.privateHeaders).forEach((key)=>{
        addin += `<td>${itm.addin[key]}</td>`
    })

 
 
    return `
    <tr>
        <td>${itm.id}</td>
        <td>${Topic.erTypes[itm.erTypes].title}</td>
        <td>${itm.responsible}</td>
        <td>${itm.creationDate}</td>
        <td>${itm.expireDate}</td>
        <td>${Topic.status_1[itm.status_1]}</td>
        <td>${Topic.status_1[itm.status_2]}</td>
        <td>${itm.comment}</td>
        ${addin}
    </tr>
    `
}
