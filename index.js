let tabsLinks = document.getElementsByClassName("tab-link")
let tabsContents = document.getElementsByClassName("tabs-content")
// console.log(tabsLinks)
// for (let i = 0; i < tabsLinks.length; i++)
for (let tabLink of tabsLinks) {

    tabLink.addEventListener("click", (e) => {
        for (let tabLink of tabsLinks) {
            tabLink.classList.remove("active-link")
        }
        e.currentTarget.classList.add("active-link")

        for (let tabContent of tabsContents) {
            tabContent.classList.remove("active-tab")
        }
        e.currentTarget.classList.add("active-link")
        // console.log((`.${e.currentTarget.id}`))
        // console.log(document.querySelector(`.${e.currentTarget.id}`))
        document.querySelector(`.${e.currentTarget.id}`).classList.add("active-tab")
    })
}

let menueMark = document.querySelector(".fa-bars")
let xMark = document.querySelector(".fa-xmark")
let sideTab = document.querySelector(".side-tab")

menueMark.addEventListener("click", () => {
    sideTab.style.right = "0";
})

xMark.addEventListener("click", () => {
    sideTab.style.right = "-266px";
})
let successElem = document.querySelector(".success")
let submitBtn  = document.querySelector("[type='submit']")
let nameElem = document.querySelector("[name='Name']")
let mail = document.querySelector("[name='Email']")
let message = document.querySelector("[name='Message']")


submitBtn.addEventListener("click", () => {
    console.log()
    if (nameElem.value.length !== 0 && mail.value.length !== 0 && message.value.length !== 0  )
   { successElem.innerText = "Message Sent Successfuly!"
    successElem.style.color = "green"}

})

// const scriptURL = 'https://script.google.com/macros/s/AKfycby5WV6Aaa1j4ClWkEYT3DTvcRgx_e9jw4vD8YEzsIYQgtscxxa9KAFgIBnKznwjJTLh/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => console.log('Success!', response))
//         .catch(error => console.error('Error!', error.message))
// })