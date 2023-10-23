function passwordToggle(){
    let password = document.querySelector("#password");
    if(password.type == "password")
        password.type = "text"
    else
        password.type = "password";
}

let password = document.querySelector("#password")
let checkbox = document.querySelector("#checkbox")
let passwordConfirm = document.querySelector("#passwordConfirm")
let strength = document.querySelector("#strength")

password.addEventListener("keyup", (e)=>{
    strength.style.display = "block";
    if(e.target.value.length < 6)
    {
        strength.innerHTML = "weak";
        strength.style.color = "red";
    }else if(e.target.value.length < 8)
    {
        strength.innerHTML = "medium";
        strength.style.color = "yellow";
    }else{
        strength.innerHTML = "strong";
        strength.style.color = "green";
    }
})
const passwordStrenght = ()=>{
    strength.style.display  = "none"
}

document.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!checkbox.checked)
    {
        alert("agree terms and condition")
        return;
    }


    if(password.value != passwordConfirm.value)
    {
        alert("confirm password not matching");
        return;
    }

    alert("thank you for submiting the form");
})