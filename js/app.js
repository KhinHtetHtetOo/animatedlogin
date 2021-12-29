//UI
const notiel = document.querySelector('.notibar');
const barel = document.querySelector('.bar');
const searchel = document.querySelector('.search');
const textbox = document.querySelector('.textbox')
const inputel = document.querySelector('.input');
const textboxel = document.querySelector('.textbox');

//Event Listener 1
searchel.addEventListener('click',()=>{
    // console.log('hay');

    searchel.classList.toggle('play');
   
})

//Event listener 2
barel.addEventListener('click',()=>{
    console.log('hay');

    textbox.classList.toggle('active');
    
})




