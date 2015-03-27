'use strict';

module.exports = {
  set: function (id) {
      var html = '',
          React = require('react/addons'),
          ComponentsList = require('../components/ComponentsList'),
          Components = ComponentsList(),
          ComponentsID = "home",
          ComponentsDocumentID = "home";

      if (id) {
        var filePath = "./" + id + ".html?fid="+(Math.random()*1000000),
            xmlhttp = new XMLHttpRequest();

        xmlhttp.open("GET", filePath, false);
        xmlhttp.send();

        html = xmlhttp.responseText;
        ComponentsID = id.replace("components-", "").replace("-", "_");
        ComponentsDocumentID = id + "-reactjs";
      }

      document.querySelector('.e-main-content').innerHTML = html;

      if (Components[ComponentsID] && typeof Components[ComponentsID] === 'object') {
        if (Object.prototype.toString.call((Components[ComponentsID])) === '[object Object]') {
          React.render(
            Components[ComponentsID],
            document.querySelector("#" + ComponentsDocumentID)
          );
        } else if (Object.prototype.toString.call((Components[ComponentsID])) === '[object Array]') {
          Components[ComponentsID].map(function(reactComponents) {
            var reactComponentKey = Object.keys(reactComponents).toString(),
                reactComponentID = (id +"-"+ reactComponentKey).replace("_", "-");

            if (document.querySelector("#" + reactComponentID)) {
              React.render(
                reactComponents[reactComponentKey],
                document.querySelector("#" + reactComponentID)
              );
            }

          });
        }
      }

      if (window.Prism) {
        window.Prism.highlightAll();
      }
  }
};
