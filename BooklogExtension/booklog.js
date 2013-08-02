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
var getNowThelf = function(tagHash) {
    $('.shelfItemInfoTitle > a').each(function() {
        //console.log($(this).text());
        var titleStr = $(this).text();
        var tagStr = tagHash[titleStr]
        if (tagStr !== undefined) {
            $(this).text(titleStr + ' [タグ: ' + tagStr +']');
        }
    });
}

// 本の名前:タグ名
var tagHash = [];
var doAjax = function(nowTag) {
        $.ajax({
            // http://から始まるURLを指定
            url: 'http://booklog.jp/users/' +userName +'/book?display=front&category_id=0&status=0&rank=0&tag=' + nowTag,
            type: 'GET',
            //asynchronous: true,
            success: function(res) {
                $(res).find('img').each(function() {
                    if (String($(this).attr('src')).indexOf("ecx.images-amazon.com") !== -1) {
                        // 本の名前:タグ名
                        tagHash[$(this).attr('alt')] = nowTag;
                    }
                });
                // タグを元に現在の棚に設定
                getNowThelf(tagHash);
            }
        });
}
// スクレイピング
$(document).ready(function() {
    // タグで回す
    for(var cnt in tagAry) {
        var nowTag = tagAry[cnt];
        console.log(nowTag);
        doAjax(nowTag);
    }
});

