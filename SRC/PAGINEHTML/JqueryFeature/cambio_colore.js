$(function () {
    $('#text').keypress(cambiocolore)
});

function cambiocolore(event) {
    console.log('Tasto pigiato!');
    switch (event.code) {
        case "keyA": $('#text').css({ color: 'lightblue' });
         break;
        case 'keyB': $('#text').addClass('blue'); 
        break;
        case 'keyC': $('#text').addClass('cyan');
         break;
        case 'keyD': $('#text').addClass('denim'); 
        break;
        case 'keyE': $('#text').addClass('emerald'); 
        break;

        case 'keyG': $('#text').addClass('green'); 
        break;





        case 'keyO': $('#text').addClass('orange'); 
        break;

        case 'keyP': $('#text').addClass('pink'); 
        break;

        case 'keyR': $('#text').addClass('red'); 
        break;
        case 'keyS': $('#text').addClass('sapphire'); 
        break;

        case 'keyV': $('#text').addClass('purple'); 
        break;
        case 'keyY': $('#text').addClass('yellow'); 
        break;
        case 'keyZ': $('#text').addClass('black'); 
        break;



        default: $('#text').addClass('white'); 
        break;
    }

}