function download_img(){
	var URLinput = document.querySelector('.searchInput');
	console.log(URLinput.value);
	sendURL(URLinput.value);
}


function sendURL(URL) {
    window.location.href = `http://localhost:3000/download?URL=${URL}`;
}