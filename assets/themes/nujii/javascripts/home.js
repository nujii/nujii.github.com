
(function() {
  var container = $('.macbook-container');
  var navBarHeight = $('.navbar').height();
  var footerHeight = $('footer').height();

  var moveMacbook = function() {
    var imageHeight = $('.macbook img').height();
    var introHeight = $('.intro').height();
    var bodyHeight = $('body').height();
    var windowWidth = $(window).width();
    if (windowWidth > 786) {
      var contentHeight = bodyHeight-footerHeight-navBarHeight-60;
      var spanHeight = (imageHeight>introHeight)?imageHeight:introHeight;
      var newHeight = (spanHeight>contentHeight)?spanHeight:contentHeight;
      container.height(newHeight);
    }
    else {
      var contentHeight = footerHeight+navBarHeight+introHeight+65;
      var newHeight = (contentHeight+imageHeight<bodyHeight)?(bodyHeight-contentHeight):(contentHeight-imageHeight-65);
      container.height(newHeight);
    }
  };

  $("body").resize(moveMacbook);
  moveMacbook();
  
}).call(this);
