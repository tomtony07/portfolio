/*=============== typewriting effect ===============*/


document.addEventListener("DOMContentLoaded", function() {
    // Typewriter effect function
    function typeWriter(element, text, delay = 100) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, delay);
            }
        }
        type();
    }

    // Apply the typewriter effect to home_title
    const homeTitle = document.querySelector('.home_title');
    const homeTitleText = homeTitle.getAttribute('data-text');
    homeTitle.innerHTML = '';  // Clear the initial content
    typeWriter(homeTitle, homeTitleText);

    // Apply the typewriter effect to home_name
    const homeName = document.querySelector('.home_name');
    const homeNameText = homeName.getAttribute('data-text');
    homeName.innerHTML = '';  // Clear the initial content
    typeWriter(homeName, homeNameText, 150);
});