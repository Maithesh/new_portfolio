const burger=document.querySelector(".menu");
const nv_list=document.querySelector(".nv-list");
burger.addEventListener('click',()=>{
    nv_list.classList.toggle('nv-list-shown')
});