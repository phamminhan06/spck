// let register = document.getElementById("#register")
// register.addEventListener("submit", e => {
//     e.preventDefault()
//     console.log('a')
//     let email = document.getElementById("email")
//     let pw = document.getElementById("password")
// })

function register() {
    let email = document.getElementById("email")
    console.log(email.value)

    let pw = document.getElementById("pw")
    console.log(pw.value)

    let pwrepeat = document.getElementById("pwrepeat")
    console.log(pwrepeat.value)
    
    const user = {
        email: email.value,
        pw: pw.value,
        pwrepeat: pwrepeat.value
    }
    
    localStorage.setItem("user", JSON.stringify(user))
     location.replace('index.html')

}