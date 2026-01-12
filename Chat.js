function changeLanguage(lang) {
    // Change language on the root element
    document.documentElement.lang = lang;

    // Update the content visibility based on language
    document.querySelectorAll('[lang]').forEach((el) => {
        if (el.lang === lang) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });

    // Store language preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize the language based on localStorage or browser language
const userLanguage = navigator.language || navigator.userLanguage;
const preferredLang = localStorage.getItem('preferredLanguage') || userLang.slice(0, 2); // Default to "ja" or browser's default
changeLanguage(preferredLang);
// Sticky Navigation: Adds/removes the 'scrolled' class when scrolling
window.addEventListener('scroll', () => {
const nav = document.querySelector('.nav');
if (window.scrollY > 50) {
nav.classList.add('scrolled');
} else {
nav.classList.remove('scrolled');
}
});

// Animated Counter: This will animate the counters when they are in view
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounter = () => {
counters.forEach(counter => {
const updateCount = () => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
    } else {
        counter.innerText = target;
    }
}
updateCount();
});
}

// Trigger the counter animation when the element is visible on the screen
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
    animateCounter();
}
});
});

counters.forEach(counter => {
observer.observe(counter.parentElement);
});

// Store the selected language in localStorage
localStorage.setItem('preferredLanguage', lang);

// Modify initial language detection to set the language on page load
const userLang = navigator.language || navigator.userLanguage;
const preferredLanguage = localStorage.getItem('preferredLanguage') || userLang.slice(0, 2); // Default to "ja" or browser's default
changeLanguage(preferredLang);
