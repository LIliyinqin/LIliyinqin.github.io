(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/group-2-954.png' : 'images/group-2-477.png');
$('.js-2').attr('src', (dpi>1) ? 'images/about-me-guan-yu-wo-294.png' : 'images/about-me-guan-yu-wo-147.png');
$('.js-3').attr('src', (dpi>1) ? 'images/1-242.png' : 'images/1-121.png');
$('.js-4').attr('src', (dpi>1) ? 'images/name-li-yinqin-xing-ming-358.png' : 'images/name-li-yinqin-xing-ming-179.png');
$('.js-5').attr('src', (dpi>1) ? 'images/ju-xing-500.png' : 'images/ju-xing-250.png');
$('.js-6').attr('src', (dpi>1) ? 'images/pasted-image-420.jpg' : 'images/pasted-image-210.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/bitmap-710.jpg' : 'images/bitmap-355.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/ju-xing2-860.png' : 'images/ju-xing2-430.png');
$('.js-9').attr('src', (dpi>1) ? 'images/jie-ke3-776.jpg' : 'images/jie-ke3-388.jpg');
$('.js-10').attr('src', (dpi>1) ? 'images/ju-xing2-834.png' : 'images/ju-xing2-417.png');

$('.js-12').attr('src', (dpi>1) ? 'images/pasted-image-768.jpg' : 'images/pasted-image-384.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/works-zuo-pin-ji-618.png' : 'images/works-zuo-pin-ji-309.png');
$('.js-14').attr('src', (dpi>1) ? 'images/ju-xing-792.png' : 'images/ju-xing-396.png');
$('.js-15').attr('src', (dpi>1) ? 'images/pasted-image-734.jpg' : 'images/pasted-image-367.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/ju-xing3-416.png' : 'images/ju-xing3-208.png');
$('.js-17').attr('src', (dpi>1) ? 'images/pasted-image-374.jpg' : 'images/pasted-image-187.jpg');
$('.js-18').attr('src', (dpi>1) ? 'images/ju-xing-610.png' : 'images/ju-xing-305.png');
$('.js-19').attr('src', (dpi>1) ? 'images/pasted-image-584.jpg' : 'images/pasted-image-292.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/pasted-image-528.jpg' : 'images/pasted-image-264.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/ju-xing-652.png' : 'images/ju-xing-326.png');
$('.js-22').attr('src', (dpi>1) ? 'images/ps-ai-id-sketch-1398.png' : 'images/ps-ai-id-sketch-699.png');
$('.js-23').attr('src', (dpi>1) ? 'images/contact-lian-xi-wo-522.png' : 'images/contact-lian-xi-wo-261.png');
$('.js-24').attr('src', (dpi>1) ? 'images/222-374.png' : 'images/222-187.png');
$('.js-25').attr('src', (dpi>1) ? 'images/email-502359058-qq-560.png' : 'images/email-502359058-qq-280.png');
$('.js-26').attr('src', (dpi>1) ? 'images/message-liu-yan-602.png' : 'images/message-liu-yan-301.png');
$('.js-27').attr('src', (dpi>1) ? 'images/1219e8562391d716ba371ea851d89208-1822.png' : 'images/1219e8562391d716ba371ea851d89208-911.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-13')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});