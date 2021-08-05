const api = {
	key: '3c220d15f00f13c79b4b00a3564e7f1d',
	url: 'http://api.openweathermap.org/data/2.5/weather',
};

const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImage = document.getElementById('tempImage');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');

async function search(query) {
	try {
		const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
		const data = await response.json();

		console.log(data);
	} catch (error) {
		console.log(error);
		alert('Hubo un error');
	}
}

function onSubmit(event) {
	event.preventDefault();
	search(searchbox.value);
}

const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('searchbox');

form.addEventListener('submit', onSubmit, true);
