//1. Menggunakan ajax

// let mahasiswa = {
// 	nama : "Taufik Agung Santoso",
// 	nrp : "14116007",
// 	email : "taufikagungsantoso17@gmail.com"
// }
//
// console.log(JSON.stringify(mahasiswa));


// 2. Menggunakan javasript
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function (){
// 	if (xhr.readyState == 4 && xhr.status == 200 ){
// 		let mahasiswa = JSON.parse(this.responseText);
// 		console.log(mahasiswa);
// 	}
// }
//
// xhr.open('GET','coba.json', true);
// xhr.send();


// 3. Menggunakan jquery

$.getJSON('coba.json', function(data){
	console.log(data);
});
