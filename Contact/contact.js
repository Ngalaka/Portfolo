const menuList = document.querySelector('#nav-links')
const contact = document.querySelector('#contact');
menuList.style.maxHeight ="0px";

function toggle(){
  if(menuList.style.maxHeight =="0px"){
    menuList.style.maxHeight ="600px"
  }
  else{
    menuList.style.maxHeight ="0px"
  }
}


contact.addEventListener('click', function(){
window.location.href ="./Contact/contact.html";
});