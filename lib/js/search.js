function login() {
    const btnClose = document.querySelectorAll('.btn-close');
    const bg = document.querySelector('.wrapper');
    const body = document.querySelector('body');
    const searchpopup = document.querySelector('.search-outr');
    const search = document.querySelector('.searchbar');
    const cartpopup = document.querySelector('.cart-popup');

    for (let btns of btnClose) {
        btns.addEventListener('click', () => {
            searchpopup.style.display = 'none';
            bg.classList.remove('overlay');
            body.classList.remove('fixed');
            body.style.overflow = null;
            body.classList.remove('cartfixed');
        });
    }

    bg.addEventListener('click', () => {
        searchpopup.style.display = 'none';
        bg.classList.remove('overlay');
        body.classList.remove('fixed');
        body.style.overflow = null;
        body.classList.remove('cartfixed');
    });

    search.addEventListener('click', () => {
        searchpopup.style.display = 'block';
        bg.classList.add('overlay');
        body.classList.add('fixed');
        body.classList.remove('cartfixed');
        body.style.overflow = 'hidden';
        cartpopup.style.display = 'none';
    });

}
login();


