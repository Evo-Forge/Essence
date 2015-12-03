'use strict';

module.exports = {
  isMobile: function () {
    if( navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  },

  screenSize: function () {
    var screenWidth = screen.width;

    if ( screenWidth <= 360 ) {
      return 1; // "small";
    } else if ( screenWidth > 360 && screenWidth <= 800 ) {
      return 2; // "medium";
    } else {
      return 3; // "large";
    }
  }
};
