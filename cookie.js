const popup = document.getElementById("popup")
const acceptBtn = document.getElementById("cookie-btn")
const msg = document.getElementById("msg")

if(localStorage.getItem("cookieConsent")==="accepted"){
    popup.style.display ="none"
    msg.textContent = "All cookies have been accepted prior"
}
acceptBtn.addEventListener("click", ()=>{
    localStorage.setItem("cookieConsent","accepted")
    popup.style.display = "none"
    msg.textContent = "Thank you"
})


