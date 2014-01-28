/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function(require) {

	var Promise = require('./MonitoredPromise');

	var p = new Promise(function(_, reject) {
		reject(new Error('unhandled-handled-later'));
	});

	setTimeout(function() {
		console.log('***Handling error now***');
		p.otherwise(function() { /* handled by squelching */ });
	}, 1000);

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

