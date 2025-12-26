const menuList = document.querySelector('#nav-links')
const hire = document.querySelector('#hire');
menuList.style.maxHeight ="0px";

function toggle(){
  if(menuList.style.maxHeight =="0px"){
    menuList.style.maxHeight ="600px"
  }
  else{
    menuList.style.maxHeight ="0px"
  }
}


hire.addEventListener('click', function(){
window.location.href ="../About/about.html";
});