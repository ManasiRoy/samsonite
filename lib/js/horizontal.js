jQuery(function ($) {
	'use strict';


	// -------------------------------------------------------------
	//   Cycle By Items
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#scrollowl');
		var $wrap = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('#scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			//easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Cycling
			cycleBy: null,
			cycleInterval: 1500,  // Cycle interval
			pauseOnHover: true,
			startPaused: false,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});

	}());
	// -------------------------------------------------------------
	//   Cycle By Items
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#scrollowl2');
		var $wrap = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('#scrollbar2'),
			scrollBy: 1,
			//speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Cycling
			cycleBy: null,
			cycleInterval: 1500,  // Cycle interval
			pauseOnHover: true,
			startPaused: false,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   Cycle By Items
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#scrollowl3');
		var $wrap = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('#scrollbar3'),
			scrollBy: 1,
			//speed: 300,
			elasticBounds: 1,
			//easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Cycling
			cycleBy: null,
			cycleInterval: 1500,  // Cycle interval
			pauseOnHover: true,
			startPaused: false,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   Cycle By Items
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#benefits');
		var $wrap = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('#scrollbar4'),
			scrollBy: 1,
			//speed: 300,
			elasticBounds: 1,
			//easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Cycling
			cycleBy: null,
			cycleInterval: 1500,  // Cycle interval
			pauseOnHover: true,
			startPaused: false,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());


	// -------------------------------------------------------------
	//   Cycle By Items
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#collections');
		var $wrap = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('#scrollbar5'),
			scrollBy: 1,
			//speed: 300,
			elasticBounds: 1,
			//easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Cycling
			cycleBy: null,
			cycleInterval: 1500,  // Cycle interval
			pauseOnHover: true,
			startPaused: false,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());
});