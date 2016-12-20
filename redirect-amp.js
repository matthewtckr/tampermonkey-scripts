// ==UserScript==
// @name         Redirect to AMP pages
// @namespace    http://github.com/matthewtckr/tamper-scripts
// @version      0.1
// @description  Redirect articles to AMP pages
// @author       Matt Tucker
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByTagName('link');
    if ( links ) {
        var ampLinks = Array.prototype.filter.call(links, function(elem) { return elem.rel == "amphtml";});
        if ( ampLinks && Array.isArray( ampLinks ) && ampLinks.length > 0 ) {
            if ( ampLinks[0].href ) {
                self.location = ampLinks[0].href;
            }
        }
    }
})();
