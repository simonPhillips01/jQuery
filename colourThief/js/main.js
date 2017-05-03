var myImage = $('#myImage')[0];
var colorThief = new ColorThief();
var dominantColor = colorThief.getColor(myImage);
var paletteColors = colorThief.getPalette(myImage, 9);

$('.dominant').css({"background-color":"rgb(" + dominantColor + ") "});
$('.dominant p').text("rgb(" + dominantColor + ")");