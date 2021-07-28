
function submit(){
let searchBox = document.getElementById('searchBox').value;
let city = document.getElementById('city');
let  focast= document.getElementById('focast');
let  weather = document.getElementById('weather');
document.getElementById('result').style.visibility ="visible";
 console.log(searchBox);
 if (searchBox ==='') {
 	 alert("Please input a city!");
 }
 else{
 	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchBox}&units=metric&APPID=216ea5785a80dcabdbb7fade3bb6f0f0`)
.then(res => res.json())
.then(data => {
	document.getElementById('city').innerHTML=data.weather[0].description;
	document.getElementById('focast').innerHTML=data.name;
let changeam =data.main.temp; 	
 document.getElementById('weather').innerHTML= Math.round(data.main.temp) + "&#160;"+"°C";


}
)
 }
	


}

