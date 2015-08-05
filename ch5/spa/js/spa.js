/* jslint browser: true, continue: true, devel: true, indent: 2, maxerr: 50,
newcap: true, nomen: true, plusplus: true, regexp: true, sloppy: true, vars: false,
white: true */

/*global $, spa */

// spa object/anon function
var spa = (function() {
  'use strict'
    var initModule = function($container) {
      spa.model.initModule();
      spa.shell.initModule($container);
    };
    // return method on the spa object
    return { initModule: initModule };
}());
