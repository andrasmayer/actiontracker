export const DropDowns = (data) =>{
    let isSelected = ``
    let context = `<select class="${data.className}">`
    data.element.forEach((itm,key) => {
        isSelected = key == data.selected ? "selected" : ""
        context += `<option ${isSelected} value="${key}">${itm}</option>`
    })
    context += `</select>`
    return context
}

export const DropDowns_Object = (data) =>{
    let isSelected = ``
    let context = `<select class="${data.className}">`
    Object.keys(data.element).forEach((key) => {
        isSelected = key == data.selected ? "selected" : ""
        context += `<option ${isSelected} value="${key}">${data.element[key].title}</option>`
    })
    context += `</select>`
    return context
}