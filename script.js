const fun=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("viewcity").value}&appid=547878bba5ab191652412cf3ba882387`)
    .then(response => response.json())
    .then(data => (document.getElementById("view").innerHTML=(data.main.temp-273.15).toFixed(2)+" degree Celsius",document.getElementById("viewdescrip").innerHTML=(data.weather[0].description),document.body.style.backgroundImage = `url("${data.weather[0].description}.gif")`));
}
const fun1=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("viewcity").value}&appid=547878bba5ab191652412cf3ba882387`)
    .then(response => response.json())
    .then(data => (document.getElementById("view").innerHTML=(data.main.temp-459.67).toFixed(2)+" degree Faherneit",document.getElementById("viewdescrip").innerHTML=(data.weather[0].description),document.body.style.backgroundImage = `url("${data.weather[0].description}.gif")`));
}