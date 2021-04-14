// Task 2
clickNumber = 0;
document.getElementById('button1').addEventListener('click',() => {
	let textArea = document.getElementById('text1');
	if(clickNumber == 0)
		textArea.value = `текстовое поле`;
	else if(clickNumber % 2 == 0)
		textArea.setAttribute("style","color: pink;");
	else 
		textArea.setAttribute("style","color: black;");
	clickNumber++;
})


// Task 3
document.getElementById('button2').addEventListener('click', (event) =>{
	event.preventDefault();
	let text = document.getElementById('text1').value;
	let userText = prompt("Что вы хотите найти в текстовом поле");
	alert(text.indexOf(userText) > -1 ? "Существует":"Не существует");
})

// Task 4
let form = document.forms.form;
let radios = form.elements.radio;
let checks = form.elements.check;
let option = Array.from(form.elements.userSelect.options);
document.getElementById('button3').addEventListener('click', (event) => {event.preventDefault()});
document.getElementById('button3').ondblclick = function(event){
	let radioText = "ЗАПОЛНИТЕ RADIOS";
	let checkText = "";
	let optionText ="ЗАПОЛНИТЕ OPTION";
	
	radios.forEach(element => {
		if(element.checked){
			radioText = element.value;
		}
	});
	
	checks.forEach(element =>{
		if(element.checked){
			checkText += element.value + " ";
		}
	});
	if(checkText.length == 0)
		checkText = "ЗАПОЛНИТЕ CHECKBOX";

	option.forEach(element => {
		if(element.selected && !element.defaultSelected)
			optionText = element.value;
	});
	document.getElementById('p1').innerHTML = radioText + '|' +
		checkText + '|' + optionText;
};

// Task 5
document.getElementById('button4').addEventListener('click', (event) => {
	event.preventDefault();
	alert('submit');	
	document.getElementById('button3').ondblclick();
});

// Task 6 
let unswers = {
	history : "right",
	composition : ["Люди на болоте","Раскиданное гнездо","Новая земля"],
	manifest : "Паспорт",	
}
document.getElementById('submit').addEventListener('click', () =>{
	let form = document.forms.test;
	let historyes = form.elements.history;
	let composition = form.elements.composition;
	let manifest = form.elements.manifest.value;
	let result = "Твой ответ: ";
	let score = "";
	if ((result == unswers.history) && (result == unswers.composition) && (result == unswers.composition)){
		score = "3/3";
		
	} 
	alert(score);
	for(let history of historyes){
		if(history.checked){
			result += history.value + " , ";
		}
	}
	result += "\n" + "right: " + unswers.history + "\n" + "Твой ответ: ";

	for(let ty of composition){
		if(ty.checked){
			result += ty.value + " | ";
		}
	}
	result += "\n" + "right: " + unswers.composition + "\n" + "Твой ответ: ";

	result += manifest.toLowerCase();
	result += "\n" + "right: " + unswers.manifest;
	alert(result);
});