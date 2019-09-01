// ==UserScript==
// @src_name     Micoua_谷歌访问助手首页跳转
// @name         流氓网站重定向
// @version      1.0.1
// @src_author   micoua
// @author       DuangXT
// @src_namespace    https://greasyfork.org/zh-CN/users/162781
// @description  将一些流氓网站重定向到另一些干净的搜索引擎.
// @src_description  将谷歌访问助手强制要求首页设置修改为自定义首页

// @include      *

//               ↓ jQuery核心文件 ↓
// @require      https://greasyfork.org/scripts/39025-micoua-jquery-min-js/code/Micoua_jQuery_min_js.js?version=255336
//               ↓ jQueryUI核心文件 ↓
// @require      https://greasyfork.org/scripts/40306-micoua-jqueryui-min-js/code/Micoua_jQueryUI_min_js.js?version=267377

// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// ==/UserScript==

(function () {
    /**
     * 主入口
     */
    function main() {
        gotoWeb(); // 跳转网页
    }

    /**
     * 全局变量
     */
    var currentURL = window.location.href; // 获取当前网页地址
    var my_url = "https://www.google.com/"; // 预定义跳转网页
    var searche = {
            "searches": [
                "https://duckduckgo.com",
                "https://www.google.com",
                "https://bing.com",
                "https://lookao.com",
                "https://mijisou.com",
                "https://www.gobaidugle.com",
                "http://www.chinaso.com",
                "https://hss3uro2hsxfogfq.onion.to",
                "https://www.startpage.com",
                "https://yippy.com",
                "https://www.qwant.com",
                "https://www.oscobo.com",
                "https://gibiru.com",
                "https://swisscows.com",
                "https://www.ecosia.org",
                "https://www.discretesearch.com",
                "https://www.searchencrypt.com",
                "https://www.dogedoge.com",
                "https://mengso.com",
                "https://www.yahoo.com",
                "https://www.ask.com",
                "https://yandex.com",
                "https://www.searx.me",
                "https://peekier.com",
                "https://so.mezw.com"
            ]
        };

    /**
     * 跳转网页
     */
    gotoWeb = function () {
        /** 定义拦截网页 */
        var urls = {
            "rogue_url": [
                "www.baidu.com", // 阻止手贱，强行跳转其它搜索引擎
                "123.hao245.com",
                "360.hao245.com",
                "hao123.com",
                "2345.com",
                "hao.360.cn",
                "hao360.com",
                "www.hao360.com",
                "hao.360.com",
                "hao.qq.com",
                "cn.hao123.com",
                "123.sogou.com",
                "daohang.qq.com"
            ]
        };
        /** 拦截网站并跳转 */
        var rogue_url = GM_getValue("rogue_url") === undefined ? urls.rogue_url : $.merge(GM_getValue("rogue_url"), urls.rogue_url);
        var searche_url = GM_getValue("searches") === undefined ? searche.searches : $.merge(GM_getValue("searches"), searche.searches);
        var j = Math.floor(Math.random() * searche_url.length + 1);
        for (var i = 0; i < rogue_url.length; i++) {
            if (currentURL.indexOf(rogue_url[i]) != -1) {
                window.location.href = searche_url[j];
                return;
            }
         }
    };

    /**
     * 加载完所有数据后进入主函数
     */
    //if (true) //不等加载直接跳转 
        main();
})();