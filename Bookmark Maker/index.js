let formEl = document.getElementById("formSubmit");
let nameEl = document.getElementById("siteNameInput");
let nameErrEl = document.getAnimations("siteNameErrMsg")
let urlEl = document.getElementById("siteUrlInput");
let urlErrEl = document.getElementById("siteUrlErrMsg");
let btnEl = document.getElementById("btn");
let unorderedListEl = document.getElementById("unorderedList");

function addToBookmark() {
    let siteNameEl = nameEl.value;
    let siteUrlEl = urlEl.value;
    let listItem = document.createElement("li");
    unorderedListEl.appendChild(listItem);
    let bookmarkname = document.createElement("p");
    let bookmarkurl = document.createElement("a");
    bookmarkname.textContent = siteNameEl;
    bookmarkurl.textContent = siteUrlEl;
    bookmarkurl.href = siteUrlEl;
    bookmarkurl.setAttribute("target", "_blank");
    listItem.appendChild(bookmarkname);
    listItem.appendChild(bookmarkurl);
}

nameEl.addEventListener("change", function(event){
    if (event.target.value === "") {
        nameErrEl.textContent = "Required*"
    } else {
        nameErrEl.textContent = ""
    }
})

urlEl.addEventListener("change", function(event){
    if (event.target.value === "") {
        urlErrEl.textContent = "Required*"
    } else {
        urlErrEl.textContent = ""
    }
})

formEl.addEventListener("submit", function(event){
    event.preventDefault();
    addToBookmark();
})


