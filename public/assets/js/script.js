//START script for arrays.html

let dcf = document.querySelector('#data-collector-form');
let dataCollector = document.querySelector('#data-collector');

dcf.addEventListener('submit', function(e){
	e.preventDefault();
	
	let value = dcf.querySelector('input[type="text"]').value;
	// create the html element
	let div = document.createElement('div');
	// add class to element
	div.setAttribute('class', 'dci animated fadeIn');

	// insert text content into the element
	div.textContent = value;

	// append the element to the dataCollector element
	dataCollector.appendChild(div);

});


//END script for arrays.html
