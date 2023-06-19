const apikey="936f89e2c04ffce8496ce37b0069e79f"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const time="https://api.ipgeolocation.io/timezone?apiKey=79d979faa55d4ae7a69075946190bb98&"
async function checkweather(name){
    const response= await fetch(apiurl+name+`&appid=`+apikey);
    var data =await response.json();
    const respons= await fetch(time+"lat="+data.coord.lat+"&long="+data.coord.lon);
    console.log(time+"lat="+data.coord.lat+"&log="+data.coord.lon)
    var d =await respons.json();
    console.log(d)
    console.log(data)
    a=document.getElementById('cityname').value
    document.getElementById('city').firstElementChild.innerHTML=data.name.toUpperCase()
    document.getElementById('celcius').firstElementChild.innerHTML=Math.round(data.main.temp)+"°C"
    document.getElementById('speed').firstElementChild.innerHTML="Wind speed: "+Math.round(data.wind.speed)+" Km/hr"
    document.getElementById('humidity').firstElementChild.innerHTML="Humidity: "+Math.round(data.main.humidity)
    document.getElementById('time').firstElementChild.innerHTML=d.time_12
}