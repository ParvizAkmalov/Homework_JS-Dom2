let IksMenu = document.querySelector(".MenuII")
let Menu = document.querySelector(".conmenuu")
let NavbarMenu = document.querySelector(".NavbarMenu")
let Okno = document.querySelector(".conteiner2")
let NavbarBtn = document.querySelector(".NavbarButton")
let Con2BtnI = document.querySelector(".Con2BtnI")
let Con2Btn1 = document.querySelector(".Con2Btn1")

NavbarMenu.onclick = () => {
    Menu.style.right = ("0")
}
IksMenu.onclick = () => {
    Menu.style.right = ("-100%")
}
NavbarBtn.onclick = () => {
    Okno.style.display = ("block")
}
Con2BtnI.onclick = () => {
    Okno.style.display = ("none")
}
Con2Btn1.onclick = () => {
    Okno.style.display = ("none")
}