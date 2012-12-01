var colors;
var onloadedFunc = function() {
    colors = document.getElementsByName('colors');
    restoreColor();
    var btn = document.getElementById('btn');
    btn.onclick = function() { saveColor(); };
    console.log(colors);
}
window.onload = onloadedFunc;

var restoreColor = function () {
    switch (localStorage['color']) {
        case 'red':
            colors[0].checked = true;
            break;
        case 'green':
            colors[1].checked = true;
            break;
        case 'yellow':
            colors[2].checked = true;
            break;
        default:
            colors[0].checked = true;
            break;
    }
}

var saveColor = function() {
    if (colors[0].checked === true) {
        localStorage['color'] = 'red';
    } else if (colors[1].checked === true) {
        localStorage['color'] = 'green';
    } else {
        localStorage['color'] = 'yellow';
    }
    console.log(localStorage['color']);
}
