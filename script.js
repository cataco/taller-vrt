var rgbValues = [];

function randomPalette() {
    rgbValues = [];
    var randomNumber = getRandomInt(0, 72);
    for (i = 1; i < 6; i++) {
        let hue = randomNumber / 60;
        var rgb = hsvToRgb(hue, 1, 1);
        $(`#color${i}`).css("background-color", `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
        rgbValues.push(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
        randomNumber = randomNumber + 72;
    }
    generateRules();

}

function generateRules() {
    var rules = `.website-background{ color: ${rgbValues[0]};}

    .element-text{ color: ${rgbValues[1]};}
    
    .element-border{ border-color: ${rgbValues[2]};}
    
    .element-background{ background-color: ${rgbValues[3]};}
    
    .header{ color: ${rgbValues[4]};}`;
    $('#css-rules').val(rules);
}

function clearPalette() {
    var rules= `.website-background{ color: #FFFFFF;}

    .element-text{ color: #FFFFFF;}
    
    .element-border{ border-color: #FFFFFF;}
    
    .element-background{ background-color: #FFFFFF;}
    
    .header{ color: #FFFFFF;}`;

    for (i = 1; i < 6; i++) {
        $(`#color${i}`).css("background-color", `#FFFFFF`);
    }
    $('#css-rules').val(rules);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};