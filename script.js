// Smooth scrolling for navigation links
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(206, 197, 188, 0.98)';
        header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(248, 245, 242, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;
        const price = this.closest('.product-card').querySelector('.product-price').textContent;
        
        // Simple notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 10000;
            font-weight: 600;
            box-shadow: var(--shadow-hover);
            animation: slideIn 0.3s ease;
        `;
        notification.innerHTML = `
            ${productName} added to cart!
            <div style="font-size: 0.9rem; opacity: 0.9; margin-top: 0.5rem;">${price}</div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    });
});

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('.newsletter-input').value;
    if (email) {
        // Simulate API call
        setTimeout(() => {
            alert('✅ Terima kasih! Anda telah berlangganan newsletter Lunara.');
            this.reset();
        }, 500);
    }
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.filter-item');

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Pindahkan class active pada tombol
            btns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const target = this.getAttribute('data-filter');
            items.forEach(item => {
                if (item.classList.contains(target)) {
                    item.classList.add('active-content');
                } else {
                    item.classList.remove('active-content');
                }
            });
        });
    });
});

