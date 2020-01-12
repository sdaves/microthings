window.CustomHtml = window.CustomHtml || {};

var preact = require('preact');
for (var i in preact) { window.CustomHtml[i] = function() { return preact[i].apply(preact, arguments) } }

var proppy = require('proppy');
for (var i in proppy) { window.CustomHtml[i] = function() { return proppy[i].apply(proppy, arguments) } }

var proppyPreact = require('proppy-preact');
for (var i in proppyPreact) { window.CustomHtml[i] = function() { return proppyPreact[i].apply(proppyPreact, arguments) } }
