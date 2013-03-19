mobileAutoZoom
==============

Javascript Mobile Auto Zoom Plugin
by Jonathan Argentiero

==============
Hello Developers,
Would you like to auto-set the "initial-zoom" in the "viewport" meta as much as it's necessary to display your template.
mobileAutoZoom is what you need:

## Quick start

* Include jQuery js ("http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
* Include mobileAutoZoom js ("mobileAutoZoom.min.js")
* Call the function ("mobileAutoZoom(layout_width)") on body load where layout_width is an integer of your choice

## (Unecessary) Deep Guide 

<pre>$(function(){  
    var layout_width = 1280; // your layout width
    if( isMobile.any() ){ 
        mobileAutoZoom(layout_width);
    }
})
</pre>