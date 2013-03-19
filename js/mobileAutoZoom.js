/*!
 * jQuery mobileAutoZoom Library v1.0, 2013, Jonathan Argentiero
 * http://jquery.com/
 *
 */
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
function mobileAutoZoom(bodyWidth){
    if( isMobile.any() ){ 
        var zoom = window.innerWidth/bodyWidth;
        if(zoom < 1){
            $('head meta[name=viewport]').remove();
            $('head').prepend('<meta name="viewport" content="width='+bodyWidth+', initial-scale='+zoom+'" />');
        }
    }
}