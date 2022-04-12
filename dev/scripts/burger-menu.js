const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = 0;
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    console.log('triggered');
}

function close() {
    mainMenu.style.top = '-100%';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
}
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);