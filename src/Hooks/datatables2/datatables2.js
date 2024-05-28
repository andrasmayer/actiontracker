export const datatables2 = (dataSet)=>{

  


    const filters = {}
    const table = document.getElementById(dataSet.table)
    const cellRefs = [];
    dataSet.header.forEach((itm,key)=>{

        filters[itm] = ""
        cellRefs.push(itm)
    })

    

    table.querySelectorAll("th").forEach((itm,key)=>{

        if(itm.querySelectorAll("input").length == 0){
            itm.innerHTML = `<input class="thSearch" cellRef="${cellRefs[key]}" placeholder="${itm.textContent}">`
        }

    
   })
    
    document.querySelectorAll(".thSearch").forEach(itm=>{
        itm.addEventListener("keyup",(e)=>{
            const val = e.target.value
            const cellRef = e.target.getAttribute("cellRef")
            filters[cellRef] = val
            
            const filteredData = dataSet.feed.filter(item =>
                Object.entries(filters)
                    .every(([key, value]) =>
                        item[key] != null ? item[key].toLowerCase().includes(value.toLowerCase())  : true
                )
            )

            table.querySelector("tbody").querySelectorAll("tr").forEach(itm=>{  itm.style.display = "none"})
            filteredData.forEach((itm)=>{
                console.log(itm.id)
                table.querySelector("tbody").querySelectorAll("tr").forEach(tr=>{  
                    console.log(tr.getAttribute("rowid"))
                    if(tr.getAttribute("rowid") == itm.id){ tr.style.display = "" }

                })
            })
        })

    })


}