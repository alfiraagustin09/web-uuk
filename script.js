// 1. Smooth Scroll Navigasi
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
});

// 2. Animasi Muncul (Fade In)
const observer = new IntersectionObserver(entries => {
    entries.forEach(el => el.isIntersecting && el.target.classList.add('visible'));
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 3. Pop-up Notifikasi Add to Cart (Tetap Smooth)
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.product-card');
        const name = card.querySelector('.product-name').textContent;
        const price = card.querySelector('.product-price').textContent;
        const pop = document.createElement('div');
        pop.style.cssText = `position:fixed; top:20px; right:20px; background:var(--accent); color:white; padding:1rem 2rem; border-radius:10px; z-index:10000; font-weight:600; box-shadow:var(--shadow-hover); animation:slideIn 0.3s ease forwards;`;
        pop.innerHTML = `${name} added to cart!<div style="font-size:0.9rem; opacity:0.9; margin-top:0.5rem;">${price}</div>`;
        document.body.appendChild(pop);
        
        setTimeout(() => {
            pop.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => pop.remove(), 300);
        }, 3000);
    });
});

// 4. Filter Kategori Produk
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const target = this.getAttribute('data-filter');
        document.querySelectorAll('.filter-item').forEach(item => {
            item.classList.toggle('active-content', item.classList.contains(target));
        });
    });
});