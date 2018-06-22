jQuery(document).ready(function(){

    jQuery('#youtube_display_carousel').carousel();

    jQuery('.carousel-showmanymoveone .item').each(function(){
        var itemToClone = jQuery(this);

        for (var i=1;i<4;i++) {
            itemToClone = itemToClone.next();

            // wrap around if at end of item collection
            if (!itemToClone.length) {
                itemToClone = jQuery(this).siblings(':first');
            }

            // grab item, clone, add marker class, add to collection
            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-"+(i))
                .appendTo(jQuery(this));
        }
    });

    jQuery('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    var imageheight = jQuery('.vid img')[0].height;
    jQuery('.vid').each(function(){
        jQuery(this).find('.play').css("border-top-width", imageheight*.1);
        jQuery(this).find('.play').css("border-bottom-width", imageheight*.1);
        jQuery(this).find('.play').css("border-left-width", imageheight*.20);
        jQuery(this).find('.play').css("top", imageheight*.22);

    });

});