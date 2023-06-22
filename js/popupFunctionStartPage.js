let r=false;
const phoneField = document.querySelector('input[name="name"]')
const phoneField1 = document.querySelector('input[name="surname"]')
const button = document.getElementById('buttonFormInputDataStartPage');

function ert() {   
    if (phoneField.value.length > 1 && phoneField1.value.length > 1 && r==true) 
        button.removeAttribute('disabled');
    else
        button.setAttribute('disabled', 'disabled');
}
document.getElementById('rgt').onclick = function(){
    if(r)
        r=false;
    else
        r=true;
    ert();
}
document.getElementById('inputSurnameFormStartPage').onkeydown = function(){
	ert()
}
document.getElementById('inputNameFormStartPage').onkeydown = function(){
	ert()
}

window.onload = document.getElementById("buttonFormInputDataStartPage").onclick = function () {
	if(document.getElementById('buttonFormInputDataStartPage').onclick){ 
		let overlay	= document.querySelector('.overlay'),
		mOpen	= document.querySelectorAll('input[data-modal="idPopupBlockStartPage"]'),
		mClose	= document.querySelectorAll('input[data-close="idPopupBlockStartPage"]'),
		mStatus	= false;
		
		if (mOpen.length == 0) return;
		[].forEach.call(mOpen, function(el) {
			el.addEventListener('click', function(e) {
				let modalId	= el.getAttribute('data-modal'),
					modal	= document.getElementById(modalId);
				modalShow(modal);
			});
		});
		document.addEventListener('keydown', modalClose);
		
		function modalShow(modal) {
			overlay.classList.remove('fadeOut');
			overlay.classList.add('fadeIn');
			modal.classList.remove('fadeOut');
			modal.classList.add('fadeIn');
			mStatus = true;
		}
		
		function modalClose(event) {
			if (mStatus) {
				let modals = document.querySelectorAll('.popupBlockStartPage');
				[].forEach.call(modals, function(modal) {
					modal.classList.remove('fadeIn');
					modal.classList.add('fadeOut');
				});
				overlay.classList.remove('fadeIn');
				overlay.classList.add('fadeOut');
				mStatus = false;
			}
		}
	}
}


