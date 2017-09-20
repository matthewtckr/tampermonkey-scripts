// ==UserScript==
// @name         Redirect to AMP pages
// @namespace    https://rawgit.com/matthewtckr/tampermonkey-scripts
// @version      0.2.4
// @description  Redirect articles to AMP pages
// @author       Matt Tucker
// @match        *://*/*
// @exclude      https://www.nytimes.com/*
// @exclude      http://www.nydailynews.com/amp/*
// @exclude      https://www.reddit.com/*
// @exclude      https://www.brentozar.com/*
// @grant        none
// @downloadURL  https://rawgit.com/matthewtckr/tampermonkey-scripts/master/redirect-amp.js
// @updateURL    https://rawgit.com/matthewtckr/tampermonkey-scripts/master/redirect-amp.js
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByTagName('link');
    if ( links ) {
        var ampLinks = Array.prototype.filter.call(links, function(elem) { return elem.rel == "amphtml";});
        if ( ampLinks && Array.isArray( ampLinks ) && ampLinks.length > 0 ) {
            if ( ampLinks[0].href && self.location.href !== ampLinks[0].href ) {
                self.location = ampLinks[0].href;
            }
        }
    }
})();
