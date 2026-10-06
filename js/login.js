
async function login() {

    let loginIcon =""

    let data = await fetch("https://marjanrangchi.github.io/filimoAPI/db.json")
    let res = await data.json()


    loginIcon = res?.login?.map((item)=>{
        return `      <div>
            <img src=${item.src1} alt="icon">
            <img src=${item.src2} alt="name">
        </div>`
        

    })


    document.querySelector("#login-icon").insertAdjacentHTML("beforeend" , loginIcon.join(""))
    
}

export default login;