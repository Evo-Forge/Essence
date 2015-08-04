'use strict';

module.exports = {
  get: function (html_file) {
    var return_html = "";

    if( html_file ) {
      var filePath = "./" + html_file + ".html",
      xmlhttp = new XMLHttpRequest();

      xmlhttp.open("GET", filePath, false);
      xmlhttp.send();

      return_html = xmlhttp.responseText;
    }

    return return_html;
  }
};
