$(".cSelect li").click(function() {
    var langName = $(".cSelect .cSelect-Selected:first").text();
    localStorage['unity_language'] = langName;
});

var language = localStorage['unity_language'] ? localStorage['unity_language'] : 'cs'; // default is C#

$("pre.code[code_lang_name]").hide();
switch (language) {
    case 'C#':
        $(".cSelect .cSelect-Selected").text("C#");
        $("pre.code[code_lang_name='C#']").show();
        break;
    case 'Boo':
        $(".cSelect .cSelect-Selected").text("Boo");
        $("pre.code[code_lang_name='Boo']").show();
        break;
    case 'JavaScript': // it is UnityScript
        $(".cSelect .cSelect-Selected").text("JavaScript");
        $("pre.code[code_lang_name='JavaScript']").show();
        break;
    default:
        $(".cSelect .cSelect-Selected").text("C#");
        $("pre.code[code_lang_name='C#']").show();
        break;
}
