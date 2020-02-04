document.querySelector('.toggle').addEventListener('click', toggle);

function toggle() {
	let header = document.getElementById('header')
	header.classList.toggle('active');
}