const menuList = document.querySelector('#nav-links');
menuList.style.maxHeight ="0px";
const hire = document.querySelector('#hire');
const hire2 = document.querySelector('#hire2');
const hire3 = document.querySelector('#hire3');
const contact = document.querySelector('#contact');

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

hire2.addEventListener('click', function(){
window.location.href ="./About/about.html";
});

hire3.addEventListener('click', function(){
window.location.href ="./About/about.html";
});

contact.addEventListener('click', function(){
window.location.href ="./Contact/contact.html";
});