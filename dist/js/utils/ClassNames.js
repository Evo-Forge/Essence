"use strict";

module.exports = function (initClass, ExtraClass) {
  var typeInitClass = typeof initClass,
      typeExtraClass = typeof ExtraClass,
      classes = {};

  /**
   * Instead of assigning the reference of `initClass` to `classes` this for loop copies all the
   * values of `initClass` to `classes` preserving the original `initClass` object.
   */
  for (var key in initClass) {
    classes[key] = initClass[key];
  }

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