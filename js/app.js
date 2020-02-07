button = document.querySelector('.button');
button1 = document.querySelector('body');
button.addEventListener('click',start);
console.log('button: ', button);

function start() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
     
    button1.style.background = color;
}