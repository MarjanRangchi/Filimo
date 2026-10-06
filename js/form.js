
async function form() {

    let Form =""

    let data = await fetch("https://marjanrangchi.github.io/filimoAPI/db.json")
    let res = await data.json()


    Form= res?.form?.map((item)=>{
        return `    <div class="container">
            <label for="userName">${item.title1}</label>
            <input type="text" minlength="10" name="userName" id="userName" placeholder="${item.placeholder}">
        </div>

        <button class="btn" id="btn">${item.title2}</button>
        <div class="border">
            <span>${item.title3}</span>
        </div>
        <button class="google">${item.title4}</button>`
        

    })


    document.querySelector("#form-input").insertAdjacentHTML("beforeend" , Form.join(""))
    
}

export default form;