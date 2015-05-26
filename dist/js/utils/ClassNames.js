"use strict";

module.exports = function (initClass, ExtraClass) {
  var classes = initClass,
      typeInitClass = typeof initClass,
      typeExtraClass = typeof ExtraClass;

  if (typeExtraClass !== "undefined") {
    var initClasses = typeInitClass === "object" ? initClass : initClass.split(" "),
        extraClasses = typeExtraClass === "object" ? ExtraClass : ExtraClass.split(" ");

    extraClasses.map(function (s) {
      initClasses[s] = true;
    });

    classes = initClasses;
  }

  return classes;
};