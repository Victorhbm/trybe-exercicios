window.onload = function() {
	let selectBgColor = document.getElementById('bg-color');
	selectBgColor.addEventListener('change', function(){
		let selected = selectBgColor.selectedOptions[0];
		document.body.style.backgroundColor = selected.value;

		localStorage.setItem('background-color', selected.value);
	})

	let selectTextColor = document.getElementById('text-color');
	selectTextColor.addEventListener('change', function(){
		let paragraph = document.getElementById('paragraph');
		let selected = selectTextColor.selectedOptions[0];
		paragraph.style.color = selected.value;

		localStorage.setItem('text-col', selected.value);
	})

	let selectFontSize = document.getElementById('font-size');
	selectFontSize.addEventListener('change', function(){
		let paragraph = document.getElementById('paragraph');
		let selected = selectFontSize.selectedOptions[0];
		paragraph.style.fontSize = selected.value;

		localStorage.setItem('font-size', selected.value);
	})

	let selectLineHeight = document.getElementById('line-height');
	selectLineHeight.addEventListener('change', function(){
		let paragraph = document.getElementById('paragraph');
		let selected = selectLineHeight.selectedOptions[0];
		paragraph.style.lineHeight = selected.value;

		localStorage.setItem('line-height', selected.value);
	})

	let selectFontFamily = document.getElementById('font-family');
	selectFontFamily.addEventListener('change', function(){
		let paragraph = document.getElementById('paragraph');
		let selected = selectFontFamily.selectedOptions[0];
		paragraph.style.fontFamily = selected.value;

		localStorage.setItem('font-family', selected.value);
	})

	let backgroundStorage = localStorage.getItem('background-color');
	document.body.style.backgroundColor = backgroundStorage;

	let textColorStorage = localStorage.getItem('text-col');
	paragraph.style.color = textColorStorage;

	let fontSizeStorage = localStorage.getItem('font-size');
	paragraph.style.fontSize = fontSizeStorage;

	let lineHeightStorage = localStorage.getItem('line-height');
	paragraph.style.lineHeight = lineHeightStorage;

	let fontFamilyStorage = localStorage.getItem('font-family');
	paragraph.style.fontFamily = fontFamilyStorage;
}