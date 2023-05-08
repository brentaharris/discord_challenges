const dialog = document.getElementById("dialog")
const closeBtn = document.getElementById("close-btn")
const checkBox = document.getElementById("checkbox")


//check cookie and set cookie logic
const allowDialog = !document.cookie.split(";").some((c) => c.trim().startsWith("doNotShow=true"))

if(allowDialog) {
    dialog.showModal()
}

closeBtn.addEventListener("click", () => {
    if(checkBox.checked) {
        const cookie = "doNotShow"
        const cookieValue = true
        //set cookie and set to expire in 1 year
        document.cookie = `${cookie}=${cookieValue}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()} path=/`
        console.log("doNotShow cookie placed")
    }
    dialog.close()
})