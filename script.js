// Script for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Change navbar style on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'white';
    }
});

// Product interaction
document.querySelectorAll('.product-card .btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        
        // In a real application, you would add to cart or redirect to product page
        console.log(`Produk dipilih: ${productName}`);
    });
});

// Header CTA button
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#kontak').scrollIntoView({
        behavior: 'smooth'
    });
});

// Function to scroll to contact section
function scrollToContact() {
    document.querySelector('#kontak').scrollIntoView({
        behavior: 'smooth'
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .product-card, .testimonial-card');
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .product-card, .testimonial-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});

// Mobile menu toggle
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Insert mobile menu button before nav links
    navbar.insertBefore(mobileMenuBtn, navLinks);
    
    // Add mobile menu styles
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            color: var(--primary);
            cursor: pointer;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
            }
            
            .nav-links {
                display: none;
                flex-direction: column;
                width: 100%;
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                padding: 20px 0;
                z-index: 1000;
            }
            
            .nav-links.active {
                display: flex;
            }
            
            .nav-links li {
                margin: 10px 0;
                text-align: center;
            }
        }
    `;
    document.head.appendChild(mobileStyles);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', initMobileMenu);

// WhatsApp integration
function initWhatsAppIntegration() {
    // Set WhatsApp number
    const whatsappNumber = "6281296233537";
    
    // Update all WhatsApp links
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        const currentHref = link.getAttribute('href');
        if (currentHref.includes('wa.me')) {
            // Ensure the link uses the correct number
            link.setAttribute('href', currentHref.replace(/wa\.me\/\d+/, `wa.me/${whatsappNumber}`));
        }
    });
}

// Initialize WhatsApp integration
document.addEventListener('DOMContentLoaded', initWhatsAppIntegration);