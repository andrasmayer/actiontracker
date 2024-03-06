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
  console.log(Topic)
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
    } else {
      let error = false
      let lastKey = parseInt(
        Object.keys(Topic.erTypes)[Object.keys(Topic.erTypes).length - 1]
      )
      Object.keys(Topic.erTypes).forEach((key) => {
        if (Topic.erTypes[key].title == newCatName.value) {
          error = true
        }
      })
      if (error == false) {
        Topic.erTypes[lastKey + 1] = { title: newCatName.value }
        buildCategories(Topic.erTypes)
      } else {
        alert("A kategória már a listában van")
      }
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
    } else {
      let error = false
      let lastKey =
        Object.keys(Topic.privateHeaders).length > 0
          ? parseInt(
              Object.keys(Topic.privateHeaders)[
                Object.keys(Topic.privateHeaders).length - 1
              ]
            )
          : 0
      Object.keys(Topic.privateHeaders).forEach((key) => {
        if (Topic.privateHeaders[key] == newHeader.value) {
          error = true
        }
      })
      if (error == false) {
        Topic.privateHeaders[lastKey + 1] = newHeader.value
        buildHeaders(Topic.privateHeaders)
      } else {
        alert("A fejléc már a listában van")
      }
    }
  })

  //Létrehozás
  const createTopic = document.getElementById("createTopic")
  createTopic.addEventListener("click", () => {
    const res = ajax("post",`./server/${Topic.URL}`,"json",Topic)
    console.log(Topic.URL)
    console.log(res)
    //alert("Topic létrehozva")
    //location.href = `?view=editTopic&topicid=${res}`
  })
}
