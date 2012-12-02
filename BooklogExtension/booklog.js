// ユーザ名
var userName = $('div#myshelfArea > a').attr('href').split('/')[2];
console.log(userName);

var tagChildren = $('ul#tag > li > a > span');
var tagAry = [];
var i = 0;

var content = [];
for (var i=0;i<tagChildren.length;i+=1) {
    tagAry[i] = tagChildren[i].innerHTML;
}

// 今の棚
$('img').each(function() {
    if (String($(this).attr('src')).indexOf("ecx.images-amazon.com") !== -1) {
        console.log($(this).attr('alt'));
    }
});


// 本の名前:タグ名
var tagHash = [];

// スクレイピング
$(document).ready(function() {
    // タグで回す
    for(var cnt in tagAry) {
        console.log(tagAry[cnt]);
        $.ajax({
            // http://から始まるURLを指定
            url: 'http://booklog.jp/users/' +userName +'/book?display=front&category_id=0&status=0&rank=0&tag=' + tagAry[cnt],
            type: 'GET',
            success: function(res) {
                var bookStr = "";
                $(res).find('img').each(function() {
                    if (String($(this).attr('src')).indexOf("ecx.images-amazon.com") !== -1) {
                        bookStr += $(this).attr('alt');
                        // 本の名前:タグ名
                        tagHash[bookStr] = $(this).attr('alt');
                    }
                });
                console.log(bookStr);
            }
        });
    }
});

