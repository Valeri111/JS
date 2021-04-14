var radios = document.querySelectorAll('input[name="yn"]');
var labels = document.querySelectorAll('label');
function checkradio()
{
	for (var but of radios){
	switch(true)
	{
		case but.checked==true: 
		if (but == document.querySelector('input#y')) document.querySelector('label[for="y"]').setAttribute('style', 'color:red;'); 
		else document.querySelector('label[for="n"]').setAttribute('style', 'color:red;'); 
		break; 
		case but.checked==false: 
		if (but == document.querySelector('input#y')) document.querySelector('label[for="y"]').setAttribute('style', 'color:blue;'); 
		else document.querySelector('label[for="n"]').setAttribute('style', 'color:blue;'); 
		break;
	}
	}
}
checkradio();
document.body.children[0].children[0].addEventListener('click', (event)=>{checkradio();});
document.body.children[0].children[2].addEventListener('click', (event)=>{checkradio();});

document.body.children[0].children[7].style.display = "none";
document.body.children[0].children[8].style.display = "none";

const div = document.querySelector('#spisok');
const ol = document.createElement("ol");
const li = document.createElement("li");
document.getElementById("spis").addEventListener('click', (event)=>{
div.appendChild(ol);
ol.appendChild(li);
li.innerHTML = 'start';
document.getElementById("spis").setAttribute("disabled", "true");
document.body.children[0].children[7].style.display = "block";
document.body.children[0].children[8].style.display = "block";});

function oddelem(){
	var list= document.getElementsByTagName("li");
 for (var i=0; i!= list.length; ++i) {
  if ((i+1)%2==1) {
   list[i].style.color="blue";
  } else { list[i].style.color="red"; };
 }}

document.body.children[0].children[8].addEventListener('click', (event)=>{
var li = document.createElement("li");
ol.appendChild(li);
li.innerHTML = 'last';
oddelem();
});

document.body.children[0].children[7].addEventListener('click', (event)=>{
var li = document.createElement("li");
ol.insertBefore(li, ol.childNodes[0]);
li.innerHTML = 'first';
oddelem();
});
