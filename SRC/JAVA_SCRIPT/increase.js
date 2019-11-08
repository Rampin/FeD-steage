
let cur = parseInt($('#testo').css("font-size"));

$('input').keypress(gettext);

$('#button1').click(function () {
    $('#testo').css('font-size', cur *= 1.5)
});

$('#button2').click(function () {
    $('#testo').css('font-size', cur *= 0.66)
});




function gettext(event) {
    console.log('Tasto pigiato!');
    if (event.code == 'Enter') {
        let temp = $('#input').val();
        $('#testo').text(temp);
        $('#input').val('');
    }
}





