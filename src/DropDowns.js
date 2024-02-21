export const DropDowns = (data) =>{
    let isSelected = ``
    let context = `<select class="${data.className}">`
    data.element.forEach((itm,key) => {
        if(data.text != null){itm = data.text.title}
        isSelected = key == data.selected ? "selected" : ""
        context += `<option ${isSelected} value="${key}">${itm}</option>`
    })
    context += `</select>`

    return context

}