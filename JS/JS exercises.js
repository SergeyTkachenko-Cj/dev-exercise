'use strict';

(function() {
	function literals(ltrls, ...expressions) {
			const a = expressions[0];
			const p = expressions[1];
			const s = (p + Math.sqrt((p * p) - (16 * a))) / 4;  

			console.log(`Formula value: ${s}`);
	}

	literals `Rectangle area: ${140} Rectangle perimeter: ${48}`
})();