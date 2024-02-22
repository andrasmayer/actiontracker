const {DropDowns,DropDowns_Object} = await import(`./DropDowns.js${app_version}`)


export const adminView = (itm, Topic) => {
    console.log(Object.keys(Topic.privateHeaders))
    /*    let addin = ``
    Object.keys(Topic.privateHeaders).forEach((key)=>{
        addin += `<td><textarea class="addin_${key}">${itm.addin[key]}</textarea></td>`
    })

  
    
    return `
    <tr rowid="${itm.id}">
        <td>${itm.id}</td>
        <td>${DropDowns_Object({element:Topic.erTypes, className:"erTypes", selected:itm.erTypes})}</td>
        <td><input class="responsible" value="${itm.responsible}"></td>
        <td><input type="date" class="creationDate" value="${itm.creationDate}"></td>
        <td><input type="date" class="expireDate" value="${itm.expireDate}"></td>
        <td>${DropDowns({element:Topic.status_1, className:"status_1", selected:itm.status_1})}</td>
        <td>${Topic.status_1[itm.status_2]}</td>
        <td><textarea class="comment">${itm.comment}</textarea></td>
        ${addin}
    </tr>
    `*/
}

export const responsibleView = (itm, Topic) => {
    let addin = ``
    Object.keys(Topic.privateHeaders).forEach((key)=>{
        addin += `<td><textarea class="addin_${key}">${itm.addin[key]}</textarea></td>`
    })

    
    
    return `
    <tr rowid="${itm.id}">
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
