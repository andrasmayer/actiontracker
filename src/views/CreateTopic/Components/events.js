let { Topic, buildCategories, buildAdmins, buildHeaders } = await import(`./handlers.js${app_version}`)
const { FindUser } = await import(`../../../Components/Users/FindUser/FindUser.js${app_version}`)
const {ajax} = await import(`../../../Hooks/ajax/ajax.js${app_version}`)
const {$_GET} = await import(`../../../Hooks/findGET/findGET.js${app_version}`)


export const events = (importedTopic) => {
  if(importedTopic != null){
    Topic = importedTopic
    Topic.URL = `EditTopicBase/EditTopicBase.php`
  }
  else{
    Topic.URL = `CreateTopic/CreateTopic.php`
  }
  
  //Topic export from EditTopic.js

  if(Topic.contributors.length > 1 &&   Topic.contributors[0] == Topic.contributors[1]){
     Topic.contributors.splice(0,1) 
  }

  const topicName = document.getElementById("topicName")
  const topicDescription = document.getElementById("topicDescription")

  topicName.addEventListener("keyup", (e) => {
    Topic.title = e.target.value
  })

  topicDescription.addEventListener("keyup", (e) => {
    Topic.description = e.target.value
  })

  //Kategóriák
  const addCat = document.getElementById("addCat")
  const newCatName = document.getElementById("newCatName")
  addCat.addEventListener("click", () => {
    if (newCatName.value.length < 4) {
      alert("Kategória minimum 5 karakter!")
    }
    else {

      if(Topic.erTypes[newCatName.value] == null){
        Topic.erTypes[newCatName.value] = newCatName.value
        console.log(Topic.erTypes)
        buildCategories(Topic.erTypes)
      }
      else{  alert("Ez a kategória már foglalt") }

    }
  })

  //Contributorok
  const newAdmin = document.getElementById("newAdmin")
  const addAdmin = document.getElementById("addAdmin")
  const userList = document.getElementById("userList")

  newAdmin.addEventListener("keyup", (e) => {
    userList.innerHTML = FindUser(e.target.value)

    userList.querySelector("select").addEventListener("change", (e) => {
      let selectedOption = null
      e.target.querySelectorAll("option").forEach((opt) => {
        if (opt.value == e.target.value) {
          selectedOption = opt.textContent.split("(")[0]
        }
      })
      newAdmin.value = selectedOption
      newAdmin.setAttribute("userid", e.target.value)
    })
  })

  addAdmin.addEventListener("click", (e) => {
    let error = false

    if (newAdmin.getAttribute("userid") == null) {
      alert("Nem választottál nevet!")
      error = true
    }
    if (error == false) {
      Topic.contributorNames.forEach((itm) => {
        if (itm.userID == newAdmin.getAttribute("userid")) {
          error = true
        }
      })
      if (error == true) {
        alert("A felhasználó már a listában van")
      }
    }
    if (error == false) {
      Topic.contributorNames.push({
        username: newAdmin.value,
        userID: newAdmin.getAttribute("userid"),
      })
      Topic.contributors.push(newAdmin.getAttribute("userid"))
      buildAdmins(Topic.contributorNames)
      userList.innerHTML = ""
    }
  })

  //////Fejlécek
  const newHeader = document.getElementById("newHeader")
  const addHeader = document.getElementById("addHeader")
  const headerList = document.getElementById("headerList")

  addHeader.addEventListener("click", () => {
    if (newHeader.value.length < 3) {
      alert("Fejléc minimum 3 karakter!")
    }
    else {
      if(Topic.privateHeaders[newHeader.value] == null){
        Topic.privateHeaders[newHeader.value] = newHeader.value
        buildHeaders(Topic.privateHeaders)
      }
      else{  alert("Ez a fejléc már foglalt") }
    }
  })

  //Létrehozás
  const createTopic = document.getElementById("createTopic")
  createTopic.addEventListener("click", () => {
    const res = ajax("post",`./server/${Topic.URL}`,"html",Topic)
    if(Topic.URL == `CreateTopic/CreateTopic.php`){  location.href = `?view=editTopic&topicid=${res}` }
    else{ alert("Adatok módosítva") }
  })
}
