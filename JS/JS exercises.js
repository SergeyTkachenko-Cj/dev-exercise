'use strict';

(function dom1() {
	const bd = document.createElement('body');
	const ht = document.querySelector('html');
	const btn = document.createElement('button');
	const cssString = 'display: inline-block; width: 150px; height: 100px; margin: 50px 50px; font-size: 35px; border: 1px solid black; background: lightgrey;';

		ht.appendChild(btn);

	const butt = document.querySelector('button');
	butt.style = cssString;
	butt.innerHTML = 0;

		butt.addEventListener('click', function() {
			butt.innerHTML++;
		});
})();