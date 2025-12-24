const menuList = document.querySelector('#nav-links');
menuList.style.maxHeight ="0px";
const hire = document.querySelector('#hire');

function toggle(){
  if(menuList.style.maxHeight =="0px"){
    menuList.style.maxHeight ="600px"
  }
  else{
    menuList.style.maxHeight ="0px";
  }
}

hire.addEventListener('click', function(){
window.location.href ="./About/about.html";
});