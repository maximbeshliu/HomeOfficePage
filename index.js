const checbox = document.getElementById('checkbox');
const menu = document.querySelector('.navigation_items');





checbox.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menu.addEventListener('click', (e) => {
    if (e.target) {
        menu.classList.remove('active');
    }
});