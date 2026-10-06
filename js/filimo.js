
async function filimo() {

    let Filimo =""

    let data = await fetch("https://marjanrangchi.github.io/filimoAPI/db.json")
    let res = await data.json()


    Filimo = res?.filimo?.map((item)=>{
        return `   <div class="return">
                 <div class="title">${item.title}</div>
                  <a href=${item.href}>${item.title2}</a>
                   </div>`
        

    })


    document.querySelector("#filimo").insertAdjacentHTML("beforeend" , Filimo.join(""))
    
}

export default filimo;