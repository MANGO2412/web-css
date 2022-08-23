const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    btn.classList.toggle('is-active')
})


//other example
const btnAction = document.getElementById("btnAction");
const contener = document.querySelector(".contener");

btnAction.addEventListener("click",()=>{
      contener.classList.toggle("end-state");
})
