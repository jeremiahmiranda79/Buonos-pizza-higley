// Create category
const createcategory = async(event) => {
	event.preventDefault();
	const name = document.querySelector('#name').value.trim();
	const image = document.querySelector('#image').value;
	const response = await fetch('/api/menu/newcategory', {
		method: 'POST',
		body: JSON.stringify({ 
			name, image 
		}),
		headers: { 'Content-Type': 'application/json' },
	});
	if (response.ok) {
		alert(`Category ${name} created`);
		document.location.replace('/menu');
	} 
	else {
		alert(response.statusText);
	};
};
document.querySelector('#createCategory').addEventListener('submit', createcategory);