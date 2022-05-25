function colorChange(){
	url="  http://127.0.0.1:5000/color";


	fetch(url).then(function(response) {
		return response.json();
	}).then(function(data) {
		
		var Color=data[1].color;
		console.log(Color);
		document.body.style.backgroundColor=Color;
		
	}).catch(function() {
		console.log("Not working bro!!");
	});
	
}
window.addEventListener('click',colorChange);


  
