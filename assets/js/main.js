/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('side'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar');
    });
}

/*===== SIDEBAR HIDE =====*/
/* Validate If Constant Exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    });
}


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/


           
            const tabs = document.querySelectorAll('[data-target]');
            const tabContent = document.querySelectorAll('[data-content]');
        
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const target = document.querySelector(tab.dataset.target);
        
                    tabContent.forEach(content => {
                        content.classList.remove('skills_active');
                    });
                    target.classList.add('skills_active');
        
                    tabs.forEach(tab => {
                        tab.classList.remove('skills_active');
                    });
                    tab.classList.add('skills_active');
                });
            });
       

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerportfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work_item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work')); // Consistent class name
    this.classList.add('active-work'); // Consistent class name
}

linkWork.forEach(l => l.addEventListener('click', activeWork));






document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav_link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active-link' class from all links
            navLinks.forEach(link => link.classList.remove('active-link'));

            // Add 'active-link' class to the clicked link
            this.classList.add('active-link');
        });
    });
});




/*===== Work Popup =====*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio_popup").classList.toggle("open")
}
document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp_thumbnail img").src =portfolioItem.querySelector(".work_img").src; //for changing image
    document.querySelector(".portfolio_popup-subtitle span").innerHTML =portfolioItem.querySelector(".work_title").innerHTML;//changing the work title
    document.querySelector(".portfolio_popup-body").innerHTML =portfolioItem.querySelector(".portfolio_item-details").innerHTML;//changing the work title

}
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

/*=============== SWIPER TESTIMONIAL ===============*/
document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".testimonials_container", {
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
         },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
    });
  });
  

/*=============== INPUT ANIMATION ===============*/
const inputs =document.querySelectorAll(".input");

function focusFunc(){
    let parent =this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent =this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
}
}

inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
}
)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =documet.querySelectorAll("section[id]");

window.addEventListener("scroll",navhHighlighter)

function navhHighlighter()
{
    let scrollY=window.pageYOFFset;
    sections.forEach(current=> {
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop - 50;
        sectionId = current.getattributes("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active_link")
            }
            else
            {
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active_link")
            }
    })
}

/*=============== SHOW SCROLL UP ===============*/
