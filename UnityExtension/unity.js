$(".cSelect li").click(function() {
    var langName = $(".cSelect .cSelect-Selected:first").text();
    localStorage['unity_language'] = langName;
});

var language = localStorage['unity_language'] ? localStorage['unity_language'] : 'cs'; // default is C#

switch (language) {
    case 'C#':
        $(".cSelect .cSelect-Selected").text("C#");
        break;
    case 'Boo':
        $(".cSelect .cSelect-Selected").text("Boo");
        break;
    case 'JavaScript': // it is UnityScript
        $(".cSelect .cSelect-Selected").text("JavaScript");
        break;
    default:
        $(".cSelect .cSelect-Selected").text("C#");
        break;
}
