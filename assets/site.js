document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { link.closest('details').open = false; }));

