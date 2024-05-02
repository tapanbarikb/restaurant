
//---------------------------light black & white------------------------
const themeSwitch=document.getElementById("theme-switch");
const body=document.body
themeSwitch.addEventListener("change", function(){
    body.classList.toggle('dark-mode')
})

//--------------------------remove animation --------------
const itemImages =document.querySelectorAll(".item-img")
itemImages.forEach(img=>{
    img.addEventListener('click',()=>{
        // Remove the 'animated' class for all img
        itemImages.forEach(img=>img.classList.remove('animated'))
        //add 'animated' class to the click img
        img.classList.add('animated')
    })
})

//---------------------------chang items----------------------
//select all the img in the footer
const footerImages=document.querySelectorAll(".footer .images img")

//select food bar img
const foodbarImage=document.querySelector('.foodbar img')
footerImages.forEach(image=>{
    image.addEventListener('click',()=>{
        //img change 
        foodbarImage.src= image.src
    })
})

//-----------------------------add item in cart--------------------

const addToCartButtons=document.querySelectorAll('.images a')
const cartIcon =document.querySelector('.top-navber .icons a i')
let cartCount=0

addToCartButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        cartCount++
        cartIcon.textContent=cartCount
    })
})