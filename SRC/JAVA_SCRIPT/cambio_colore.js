$(function() {$('input').keypress(cambiocolore)});

    function cambiocolore(event){
    console.log('Tasto pigiato!');
    switch(event.code) {
    case 'keyR' {$('#text').addClass('red');}
    case 'keyB' {$('#text').addClass('blue');}
    case 'keyY' {$('#text').addClass('yellow');}
    case 'keyG' {$('#text').addClass('green');}
    case 'keyV' {$('#text').addClass('purple');}
    case 'keyP' {$('#text').addClass('pink');}
    case 'keyZ' {$('#text').addClass('black');}
    case 'keyO' {$('#text').addClass('orange');}
    case 'keyA' {$('#text').addClass('lightblue');}
    }
    
}