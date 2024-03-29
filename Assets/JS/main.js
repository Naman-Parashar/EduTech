// Change Navbar Styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
});

// Show or Hide FAQ's answer

const faqs=document.querySelectorAll('.faq');
//  to add event listeners for all of them.
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //change icon
        const icon=faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus')
        {
            icon.className= "uil uil-minus";
        }
        else{
            icon.className= "uil uil-plus";
        }
    })
});

// For showing or hiding nav menu WE USE ARROW function 
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector ("#open-menu-btn");
const closeBtn = document.querySelector ("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu we use different typing methods
const closeNav= () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener('click', closeNav);