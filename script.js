
// Global variables
let onlineCount = 127;
let isMenuOpen = false;

// DOM elements
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = menuButton.querySelector('.menu-icon');
const closeIcon = menuButton.querySelector('.close-icon');
const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');
const videoOverlay = document.querySelector('.video-overlay');
const priceSlider = document.getElementById('priceSlider');
const sliderProgress = document.getElementById('sliderProgress');
const earningsAmount = document.getElementById('earningsAmount');
const earningsNote = document.getElementById('earningsNote');
const onlineCountElement = document.getElementById('onlineCount');
const registrationForm = document.getElementById('registrationForm');
const vipPopupOverlay = document.getElementById('vipPopupOverlay');
const vipPopupClose = document.getElementById('vipPopupClose');
const vipButton = document.getElementById('vipButton');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
    initializeVideo();
    initializePriceSlider();
    initializeOnlineCounter();
    initializeRegistrationForm();
    initializeVipPopup();
    
    // Scroll to top
    window.scrollTo(0, 0);
});

// Menu functionality
function initializeMenu() {
    menuButton.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Video functionality
function initializeVideo() {
    playButton.addEventListener('click', playVideo);
    videoPlayer.addEventListener('play', hideOverlay);
    videoPlayer.addEventListener('pause', showOverlay);
    videoPlayer.addEventListener('ended', showOverlay);
}

function playVideo() {
    videoPlayer.play();
}

function hideOverlay() {
    videoOverlay.style.display = 'none';
}

function showOverlay() {
    videoOverlay.style.display = 'flex';
}

// Price slider functionality
function initializePriceSlider() {
    updatePriceDisplay();
    priceSlider.addEventListener('input', updatePriceDisplay);
}

function updatePriceDisplay() {
    const photos = parseInt(priceSlider.value);
    const pricePerPhoto = 50;
    const monthlyEarnings = photos * pricePerPhoto;
    
    // Update earnings display
    earningsAmount.textContent = `R$ ${monthlyEarnings.toLocaleString('pt-BR')}`;
    earningsNote.textContent = `Vendendo ${photos} fotos por R$ ${pricePerPhoto} cada`;
    
    // Update slider progress
    const percentage = ((photos - 10) / (100 - 10)) * 100;
    sliderProgress.style.width = `${percentage}%`;
}

// Online counter functionality
function initializeOnlineCounter() {
    updateOnlineCount();
    // Update count every 10-30 seconds
    setInterval(updateOnlineCount, Math.random() * 20000 + 10000);
}

function updateOnlineCount() {
    // Simulate realistic online count variations
    const variation = Math.floor(Math.random() * 21) - 10; // -10 to +10
    onlineCount = Math.max(100, Math.min(200, onlineCount + variation));
    onlineCountElement.textContent = onlineCount;
}

// Registration form functionality
function initializeRegistrationForm() {
    registrationForm.addEventListener('submit', handleRegistration);
}

function handleRegistration(e) {
    e.preventDefault();
    
    const formData = new FormData(registrationForm);
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const age = document.getElementById('age').value;
    
    // Basic validation
    if (!name || !email || !phone || !age) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    if (parseInt(age) < 18) {
        alert('Você deve ter pelo menos 18 anos para se cadastrar.');
        return;
    }
    
    // Show VIP popup
    showVipPopup();
}

// VIP popup functionality
function initializeVipPopup() {
    vipPopupClose.addEventListener('click', hideVipPopup);
    vipPopupOverlay.addEventListener('click', function(e) {
        if (e.target === vipPopupOverlay) {
            hideVipPopup();
        }
    });
    vipButton.addEventListener('click', handleVipPurchase);
    
    // Show popup after some time if user hasn't registered
    setTimeout(() => {
        const hasShownPopup = localStorage.getItem('vipPopupShown');
        if (!hasShownPopup) {
            showVipPopup();
            localStorage.setItem('vipPopupShown', 'true');
        }
    }, 30000); // Show after 30 seconds
}

function showVipPopup() {
    vipPopupOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideVipPopup() {
    vipPopupOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function handleVipPurchase() {
    // Redirect to payment page
    window.open('https://pay.itslovefoot.space/checkout?product=8d34d380-5f0b-11f0-a3b6-46da4690ad53', '_blank');
    hideVipPopup();
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(amount);
}

// Phone mask for Brazilian numbers
function maskPhone(value) {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
}

// Apply phone mask to input
document.getElementById('phone').addEventListener('input', function(e) {
    e.target.value = maskPhone(e.target.value);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back redirect popup functionality (if URL has showBackRedirect parameter)
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('showBackRedirect') === 'true') {
        showVipPopup();
        // Clean up URL parameter
        window.history.replaceState({}, '', '/');
    }
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Add loading states for buttons
function addLoadingState(button, text = 'Carregando...') {
    button.disabled = true;
    button.textContent = text;
    button.style.opacity = '0.7';
}

function removeLoadingState(button, originalText) {
    button.disabled = false;
    button.textContent = originalText;
    button.style.opacity = '1';
}

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    // Add your analytics tracking code here
}

// Track form submissions
registrationForm.addEventListener('submit', function() {
    trackEvent('form_submission', {
        form_type: 'registration'
    });
});

// Track video play
videoPlayer.addEventListener('play', function() {
    trackEvent('video_play', {
        video_type: 'hero_video'
    });
});

// Track VIP button clicks
vipButton.addEventListener('click', function() {
    trackEvent('vip_button_click');
});
