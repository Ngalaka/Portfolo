const menuList = document.querySelector('#nav-links')
menuList.style.maxHeight ="0px";
const conta = document.querySelector('#hire');


function toggle(){
  if(menuList.style.maxHeight =="0px"){
    menuList.style.maxHeight ="600px"
  }
  else{
    menuList.style.maxHeight ="0px"
  }
}

conta.addEventListener('click', function(){
 window.location.href ="../Contact/contact.html";
})