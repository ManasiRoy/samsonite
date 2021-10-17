// Compare Js

const btnCompare = document.querySelectorAll('.btn-compare');
const compareoutr = document.querySelector('.compare-outr');

for (let btns of btnCompare) {
    btns.addEventListener('click', () => {
        compareoutr.style.display = 'block';
    });
}
$(document).ready(function () {

    $("#togglebtn").on('click', () => {
        $('.compare-popup').slideToggle();
        $('.compare-outr').toggleClass('active');
        $('.wrapper').toggleClass('overlay');
        $('body').toggleClass('comparefixed')
    })

})