console.log('hello browser')
let menu = document.querySelectorAll('li')
let burger = document.getElementById('burger')
burger.addEventListener('click', ()=>{
    menu.forEach(item=>{
        item.classList.toggle('visible')
        const menuback = item.parentElement
        if (item.classList.contains('visible')){
            menuback.style.backgroundColor="#5729bb"
        }else{
            menuback.style.backgroundColor="transparent"

        }
    })
})