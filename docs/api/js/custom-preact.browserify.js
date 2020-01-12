window.CustomHtml = window.CustomHtml || {};

var preact = require('preact');
for (var i in preact) { window.CustomHtml[i] = preact[i] }

var proppy = require('proppy');
for (var i in proppy) { window.CustomHtml[i] = proppy[i] }

var proppyPreact = require('proppy-preact');
for (var i in proppyPreact) { window.CustomHtml[i] = function() { return proppyPreact[i].apply(proppyPreact, arguments) } }
