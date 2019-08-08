'use strict';

(function dom2() {

	const cssStringDiv = 'display: grid; grid-template-rows: repeat(3, 1fr); grid-template-columns: repeat(3, 1fr); grid-gap: 5px; width: 400px; height: 400px; margin: 20px;';
	const cssStringBut = 'font-size: 30px; pointer-events: none;';
	const cssStringFive = 'outline: none; pointer-events: auto; color: #fff; background: tomato;';
	const arrNum = [1, 2, 3, 6, 9, 8, 7, 4];
	const idsNum = [1, 2, 3, 6, 9, 8, 7, 4];

		(function mainDIv() {	// create main div container
			const div = document.createElement('div');
			document.querySelector('html').appendChild(div);
			div.id = 'btns';
			div.style = cssStringDiv;
		})();

		(function childDivs() {		// create main div child buttons
				for (let i = 0; i < 9; i++) {
					var btn = document.createElement('button');
					btn.id = `btn${i + 1}`;
					btn.innerHTML = i + 1;
					btn.style = cssStringBut;
					document.querySelector('#btns').appendChild(btn);
				}
			document.querySelector('#btn5').style.cssText += cssStringFive;
		})();

		(function event() {		// rotation event
			const five = document.querySelector('#btn5');
			const allBtnNoFive = document.querySelectorAll('#btns > button:not(#btn5)');
			five.addEventListener('click', rotation);

				function rotation() {
					arrNum.unshift(arrNum.pop());
					allBtnNoFive.forEach((i, j) => document.querySelector(`#btn${idsNum[j]}`).innerHTML = arrNum[j]);
				}
		})();
})();





