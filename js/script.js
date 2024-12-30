// Show the scroll-to-top button when the user scrolls down
window.onscroll = function () {
    let scrollButton = document.getElementById("topScrollBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// Scroll the page to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".safety-section, .support-section");

    const handleScroll = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (sectionTop < viewportHeight - 50) {
                section.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check to show visible sections
    handleScroll();
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');

// Toggle the menu visibility
function toggleMenu() {
    menu.classList.toggle('show');
}

// Close the menu if clicked outside
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
    }
});

// Swapping for input fields
const exchangeIcon = document.getElementById('exchange-icon');
const sourceInput = document.getElementById('source');
const destinationInput = document.getElementById('destination');

exchangeIcon.addEventListener('click', () => {
    const temp = sourceInput.value;
    sourceInput.value = destinationInput.value;
    destinationInput.value = temp;
});
