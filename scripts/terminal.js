function toggleTerminalTheme() {
	var background = document.getElementById('terminal-content');
	var inputText = document.getElementsByClassName('input');
	var outputText = document.getElementsByClassName('output');
	var linkText = document.getElementsByClassName('link');

	background.classList.toggle('light');
	toggleClassTheme(inputText);
	toggleClassTheme(outputText);
	toggleClassTheme(linkText);
}

function toggleClassTheme(classText) {
	for (let i=0; i < classText.length; i++) {
		classText[i].classList.toggle('light')
	}
}