$(function () {
      // init Isotope
      var $listitem = $('.listitem').isotope({
            // options...
            itemSelector: '.item',
            layoutMode: 'masonry'
      });
      // layout Isotope after each image loads
      $listitem.imagesLoaded().progress(function () {
            $listitem.isotope('layout');
      });


      $('.bottommenu .titlemenu a').click(function(){
            var data = $(this).data('filter');
            $listitem.isotope({ filter: data });            
            return false;
      });

      new WOW().init();

})