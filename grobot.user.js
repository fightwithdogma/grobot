// ==UserScript==
// @name        GROBOT
// @namespace   reddit
// @description a grow bot that doesn't spam others and cleans up the chat every few minutes
// @author      /u/fightwithdogma
// @include     https://www.reddit.com/robin
// @version     1.0
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

$('#robinSendMessage').append('<div id="customCounter"></div>');
setInterval(function() {
    $(".robin-chat--vote-increase").click();
    var a = $('span.robin-message--message:nth-child(2)').text().split(" ");
    a.pop();
    a = a.pop();
    if (a == "end") {
        a = 1;
    }

    var t = new Date($("div.robin-message:nth-child(1) > time:nth-child(1)").attr("datetime"));
    var m = (a - Math.floor((Date.now() - t) / 1000 / 60));
    var s = (a - (Date.now() - t) / 1000 / 60);
    s = s - Math.floor(s);
    s = Math.floor(s * 60);

    $('#customCounter').html(m +' minutes '+s+' seconds remaining');
}, 1000);
setInterval(function() {$('#robinChatMessageList').html($('<div>').append($("div.robin-message:nth-child(1)").clone()).html()+$('<div>').append($("div.robin-message:nth-child(2)").clone()).html());}, 1000*60*10);
setInterval(function() {
    var a = $('span.robin-message--message:nth-child(2)').text().split(" ");
    a.pop();
    a = a.pop();
    if (a == "end") {
        a = 1;
    }
    $('#robinChatMessageList').append('<div class="robin-message robin--flair-class--no-flair robin--message-class--message robin--user-class--system"><time class="robin-message--timestamp" datetime="'+Date.now()+'">custom - log</time><span class="robin-message--from robin--username">[robin]</span><span class="robin-message--message">'+$(".robin-room-participant").length+" "+$(".robin-user-list-overflow-indicator").text()+' participants in the room, '+ (a - Math.floor((Date.now() - new Date($("div.robin-message:nth-child(1) > time:nth-child(1)").attr("datetime"))) / 1000 / 60))+' minutes remaining</span></div>');
}, 1000*60*3);
})();
