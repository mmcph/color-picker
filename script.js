window.onload = function (){
	initColorPicker();
};

function initColorPicker(){
	let colorBox = document.getElementById("colorBox");
	let rgb = {
		red: document.getElementById("redVal"),
		green: document.getElementById("greenVal"),
		blue: document.getElementById("blueVal") 
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
};

function setColorPickerEventListeners(colorBox, rgb, colorPickers){
	let pickerLength = colorPickers.length

	for(i=0;i<colorPickers.length;i++){
		colorPickers[i].addEventListener('change', () => {
			let red = rgb.red.value
			let green = rgb.green.value
			let blue = rgb.blue.value
			setBGColor(colorBox, red, green, blue);
			setDisplayValues(red, green, blue);
		});
	};
};

function setBGColor(colorBox, red, green, blue){
	rgbVal = [red, green, blue].join(',');
	colorBox.style.backgroundColor = "rgb("+rgbVal+")"
}

function setDisplayValues(red, green, blue){
	let redValue = document.getElementById("redValue");
	let greenValue = document.getElementById("greenValue");
	let blueValue = document.getElementById("blueValue");

	redValue.innerText = red;
	greenValue.innerText = green;
	blueValue.innerText = blue;

}