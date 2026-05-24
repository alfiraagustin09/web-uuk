// 1. Pop-up Add to Cart 
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.product-card');
        const pop = document.createElement('div');
        pop.style.cssText = "position:fixed; top:20px; right:20px; background:var(--accent); color:white; padding:12px 20px; border-radius:10px; z-index:10000; font-weight:600; box-shadow:var(--shadow-hover);";
        pop.innerHTML = `${card.querySelector('.product-name').textContent} added to cart!<div style='font-size:0.85rem; opacity:0.8; font-weight:400;'>${card.querySelector('.product-price').textContent}</div>`;
        document.body.appendChild(pop);
        setTimeout(() => pop.remove(), 2000);
    });
});

// 2. Filter Kategori 
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.filter-item').forEach(item => item.classList.toggle('active-content', item.classList.contains(this.getAttribute('data-filter'))));
    });
});