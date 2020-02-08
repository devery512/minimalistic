document.querySelector( '.toggle' ).addEventListener( 'click', toggle );

typing();


// Functions
function toggle() {
	let header = document.getElementById( 'header' );
	header.classList.toggle( 'active' );
}

// function typing() {
// 	let i = 0;
// 	let text = 'Engineer, Hobbyest, Gamer';
// 	while ( i < text.length ) {
// 		document.getElementById( 'title' ).innerHTML += text.charAt(i);
// 		i++;
// 		setTimeout(typing,500);
// 	}break;
// }


// function typing() {
// 	if ( i < text.length ) {
// 		document.getElementById( 'title' ).innerHTML += text.charAt(i);
// 		i++;
// 		setTimeout(typing,50);
// 	}
// }