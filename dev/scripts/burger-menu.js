const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const listContainer = document.querySelector('.list-container');

closeMenu.style.display = 'none';



function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.transform = "translateY(72px)";
    // mainMenu.style.transition = "top 1s ease-in";
    closeMenu.style.color = "#fff";
    // listContainer.style.maxHeight = "4800px";
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    console.log('triggered');
}

function close() {
    mainMenu.style.transform = "translateY(-200%)";
    // mainMenu.style.transition = "top 1s ease-in";
    // listContainer.style.maxHeight = 0;
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    console.log('closing triggered')
}
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);