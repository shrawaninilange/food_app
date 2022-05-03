async function get(url){
    try {

        var res = await fetch(url)
        var data = await res.json()
         return data

    } catch (error) {
        console.log(error)
        
    }
}



function append(data,parent){
    data.forEach(function(el){

    var div = document.createElement("div")

    var img = document.createElement("img")
    img.src =el.strCategoryThumb

    var p = document.createElement("p")
    p.textContent = el.strCategory
        
    div.append(img,p)
    parent.append(div)

    })
}




// async function search(url){
//     try {

//         var search = document.getElementById("input").value

//         var res = await fetch(url)
//         var data = await res.json()
//          return data

//     } catch (error) {
//         console.log(error)
        
//     }
// }

function appenddata(data,parent){
  data.forEach(function(el){

    var div = document.createElement("div")
    div.setAttribute("id","new1")

    var img = document.createElement("img")
    img.src =el.strMealThumb

    var p = document.createElement("p")
    p.textContent =  "country :"+el.strArea

    var p1 = document.createElement("p")
    p1.textContent =  "Name :" + el.strTags

    var p2 = document.createElement("p")
    p2.textContent =   "strCategory :" + el.strCategory


    var p3 = document.createElement("p")
    p3.textContent =  " Ingredient :" + el.strIngredient1

    var p4 = document.createElement("p")
    p4.textContent =  "Ingredient :" + el.strIngredient2


    var p5 = document.createElement("p")
    p5.textContent =  " Ingredient :" + el.strIngredient3

    var p6 = document.createElement("p")
    p6 .textContent =  " Ingredient :" + el.strIngredient4



    div.append(img,p,p1,p2,p3,p4,p5,p6)
    parent.append(div)

    })
}


export {get,appenddata,append}

 