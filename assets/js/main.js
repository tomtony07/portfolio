/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


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


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
