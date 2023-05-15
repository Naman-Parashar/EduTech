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
})

