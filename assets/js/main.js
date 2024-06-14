/*=============== SHOW SIDEBAR ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav_link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const navMenu = document.getElementById('side');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    /*===== SIDEBAR SHOW =====*/
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-sidebar');
        });
    }

    /*===== SIDEBAR HIDE =====*/
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-sidebar');
        });
    }

    // Highlight the Home button when clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(navLink => navLink.classList.remove('active-link'));
            link.classList.add('active-link');
        });
    });

    // Ensure Home is highlighted on initial load if at the top
    window.addEventListener('load', () => {
        if (window.scrollY === 0) {
            document.querySelector('.nav_link[href="#home"]').classList.add('active-link');
        }
    });

    // Ensure Home is highlighted when scrolling back to top
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            navLinks.forEach(link => link.classList.remove('active-link'));
            document.querySelector('.nav_link[href="#home"]').classList.add('active-link');
        }
    });
});



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
  

/*=============== INPUT ANIMATION ===============
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
)*/

/*=============== typewriting effect ===============*/
document.addEventListener("DOMContentLoaded", function() {
    // Typewriter effect function with a callback
    function typeWriter(element, text, delay = 100, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, delay);
            } else if (callback) {
                setTimeout(callback, delay);  // Call the callback after a delay to make it more visible
            }
        }
        element.innerHTML = '';  // Clear the initial content before starting
        type();
    }

    // Apply the typewriter effect to home_title and home_name infinitely
    function startTypeWriter() {

        const homeTitle = document.querySelector('.home_title');
        const homeTitleText = homeTitle.getAttribute('data-text');
        homeTitle.innerHTML='';
        const homeName = document.querySelector('.home_name');
        const homeNameText = homeName.getAttribute('data-text');
        homeName.innerHTML='';
        typeWriter(homeTitle, homeTitleText, 100, function() {
            typeWriter(homeName, homeNameText, 100, function() {
                // Restart the typewriter effect for both elements
                setTimeout(startTypeWriter, 1000);  // Add a delay before restarting
            });
        });
    }

    // Start the typewriter effect initially
    startTypeWriter();
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active_link");
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active_link");
        }
    });
}

/*=============== SHOW SCROLL UP ===============*/


