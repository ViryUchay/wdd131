// Footer - Dynamic Copyright Year
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Footer - Last Modified Date
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navigation = document.querySelector('.navigation');

if (hamburger && navigation) {
    hamburger.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamburger.classList.toggle('open');
        
        // Change hamburger icon
        if (hamburger.classList.contains('open')) {
            hamburger.textContent = '✕';
        } else {
            hamburger.textContent = '☰';
        }
    });
}