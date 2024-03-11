export let Topic = {
  title: "",
  description: "",
  contributorNames: [],
  contributors: [],
  erTypes: { 0: { title: "Kérlek válassz" } },
  privateHeaders: {},
  saveType:"create"
}

let requet
export const importTopic = (obj)=>{ //Külső forrás EditTopics.js
  Topic = obj
  Topic.saveType = "edit"
}

export const buildCategories = (obj) => {

  const categories = document.getElementById("categories")
  let context = ``
  Object.keys(obj).forEach((key) => {
    if (key > 0) {
      context += `<li>${obj[key].title} <button catkey="${key}" class="removeCategory" >-</button></li>`
    }
  })

  if (categories != null) {
    categories.innerHTML = context
    document.querySelectorAll(".removeCategory").forEach((itm) => {
      itm.addEventListener("click", (e) => {
        const key = e.target.getAttribute("catkey")
        delete Topic.erTypes[key]
        buildCategories(Topic.erTypes)
      })
    })
  } else {
    return ""
  }
  //else{return context}
}

export const buildAdmins = (obj) => {
  const admins = document.getElementById("admins")
  let context = ``
  obj.forEach((itm, key) => {
    context += `<li>${itm.username} <button catkey="${key}" class="removeAdmin">-</button></li>`
  })

  if (admins != null) {
    admins.innerHTML = context
    document.querySelectorAll(".removeAdmin").forEach((itm) => {
      itm.addEventListener("click", (e) => {
        const key = e.target.getAttribute("catkey")
        Topic.contributorNames.splice(key, 1)
        Topic.contributors.splice(key, 1)

        console.log(Topic.contributors)


        buildAdmins(Topic.contributorNames)
      })
    })
  } else {
    return ""
  }

  //else{return context}
}

export const buildHeaders = (obj) => {
  const headerList = document.getElementById("headerList")
  let context = ``
  Object.keys(obj).forEach((key) => {
   
      context += `<li>${obj[key]} <button catkey="${key}" class="removeHeader">-</button></li>`
    
  })
  if (headerList != null) {
    headerList.innerHTML = context
  
    document.querySelectorAll(".removeHeader").forEach((itm) => {
        itm.addEventListener("click", (e) => {
          const key = e.target.getAttribute("catkey")
          delete Topic.privateHeaders[key]
          buildHeaders(Topic.privateHeaders)
        })
    })
  } else {
    return ""
    //return context
  }
}
