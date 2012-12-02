// Twitter 検索
chrome.contextMenus.create({
    "title": "「%s」をTwitterで検索",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
        var url = 'http://twitter.com/#!/search/'+encodeURIComponent(info.selectionText);
        chrome.tabs.create({
            url: url
        });
    }
});
