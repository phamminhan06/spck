// let register = document.getElementById("#register")
// register.addEventListener("submit", e => {
//     e.preventDefault()
//     console.log('a')
//     let email = document.getElementById("email")
//     let pw = document.getElementById("password")
// })

function register() {
    let gmail = document.getElementById("gmail")
    console.log(gmail.value)

    let pword = document.getElementById("pword")
    console.log(pword.value)

    let pwrepeat = document.getElementById("pwrepeat")
    console.log(pwrepeat.value)
    
    const register = {
        gmail: gmail.value,
        pword: pword.value,
        pwrepeat: pwrepeat.value
    }
    
    localStorage.setItem("user", JSON.stringify(register))
    location.replace('index.html')

}

function user() {
    let gmail = document.getElementById("gmail")
    console.log(gmail.value)

    let pw = document.getElementById("pword")
    console.log(pw.value)
    
    const user = JSON.parse(localStorage.getItem("user"))
    if(user.gmail === gmail.value && user.pword === pword.value)
        location.replace('index.html')
    else
        alert("Sai tài khoản hoặc mật khẩu")

}

