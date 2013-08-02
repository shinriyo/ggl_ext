var msg_body = $(".messageBody > div > .userContent");
var regex_gist_obj = /http(s):\/\/gist\.github\.com\/\d*/;

var matche_ary = [];

for (var i in msg_body) {
    var str = msg_body[i].innerHTML;
    if (!str) continue;
    var result = str.match(regex_gist_obj);
    if (result && result.length > 0) {
        matche_ary.push(result[0]);
    }
}

// スクレイピングのコードより上？
var doAjax = function(url_str) {
    $.ajax({
        // http://から始まるURLを指定
        url: 'http://jsdo.it/',
        type: 'GET',
        //asynchronous: true,
        success: function(res) {
            alert("a");
/*            alert($(res).find('button-group actions > li > a'));
            // gistの実際のコード
            $(res).find('.column files').each(function() {
                msg_body = ;
            });
            */
        }
    });
}

// スクレイピング
$(document).ready(function() {
    for (var i in matche_ary) {
        doAjax(matche_ary[i]);
    }
});


