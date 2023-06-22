;(function() {

	let overlay	= document.querySelector('.overlay1'),
		mClose	= document.querySelectorAll('[data-close]'),
		mStatus	= false;

	for (let el of mClose) {
		el.addEventListener('click', modalClose);
	}

	document.addEventListener('keydown', modalClose);

	document.getElementById("zaz").onclick = function() {
		if(document.getElementById('zaz').onclick){ 
			overlay.classList.remove('fadeOut1');
			overlay.classList.add('fadeIn1');
			mStatus = true;
		}
	}

	function modalClose(event) {
		if (mStatus) {
			overlay.classList.remove('fadeIn1');
			overlay.classList.add('fadeOut1');
			mStatus = false;
		}
	}
})();