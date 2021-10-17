function cart() {
    const bg = document.querySelector('.wrapper');
    const body = document.querySelector('body');
    const cartpopup = document.querySelector('.cart-popup');
    const cartbtn = document.querySelector('.cartbtn');
    const cartclosebtn = document.querySelector('.cartclosebtn');
    const searchpopup = document.querySelector('.search-outr');

    cartclosebtn.style.display = 'none';

    cartclosebtn.addEventListener('click', () => {
        cartpopup.style.display = 'none';
        bg.classList.remove('overlay');
        body.classList.remove('cartfixed');
        body.style.overflow = null;
        cartbtn.style.display = 'block';
        cartclosebtn.style.display = 'none';
        body.classList.remove('fixed');

    });


    bg.addEventListener('click', () => {
        cartpopup.style.display = 'none';
        bg.classList.remove('overlay');
        body.classList.remove('cartfixed');
        body.classList.remove('fixed');
        body.style.overflow = null;
        cartbtn.style.display = 'block';
        cartclosebtn.style.display = 'none';
    });

    cartbtn.addEventListener('click', () => {
        cartpopup.style.display = 'block';
        bg.classList.add('overlay');
        body.classList.add('cartfixed');
        body.classList.remove('fixed');
        body.style.overflow = 'hidden';
        cartbtn.style.display = 'none';
        cartclosebtn.style.display = 'block';
        searchpopup.style.display = 'none';

    });

}
cart();


