'use strict';

(function dom2() {

	const cssStringDiv = 'display: grid; grid-template-rows: repeat(3, 1fr); grid-template-columns: repeat(3, 1fr); grid-gap: 5px; width: 400px; height: 400px; margin: 20px;';
	const cssStringBut = 'font-size: 30px;';
	const arrNumb = ['+3','-1','-1','+3','0','-3','+1','+1','-3'];

		(function mainDIv() {	// create main div container
			const div = document.createElement('div');
			document.querySelector('html').appendChild(div);
			div.id = 'btns';
			div.style = cssStringDiv;
		})();

		(function childDivs() {		// create main div child buttons
			let btn;
				for (let i = 0; i < 9; i++) {
					btn = document.createElement('button');
					document.querySelector('#btns').appendChild(btn);
					btn.id = `btn${i + 1}`;
					btn.setAttribute('data-rotat',arrNumb[i]);
					btn.innerHTML = i + 1;
					btn.style = cssStringBut;
				}
		})();

		(function event() {
			const five = document.querySelector('#btn5');
			five.addEventListener('click', rotation);

				function rotation() {
					const allBtn = document.querySelectorAll('button');
					allBtn.forEach(function(i) {
						let x = i.innerHTML;
						let z = i.getAttribute('data-rotat');
						let w = +x + +z;
						i.innerHTML = w; 
						i.setAttribute('data-rotat', arrNumb[w - 1]);	
					});
				}
		})();
})();