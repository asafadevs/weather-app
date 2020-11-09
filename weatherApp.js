let button = document.querySelector(".button");
let inputValue = document.querySelector(".inputValue");
let loc = document.querySelector(".location-timezone");
let temperature = document.querySelector(".temperature-degree");
let description = document.querySelector(".temperature-description");
let locationIcon = document.querySelector('.weather-icon');

button.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a8206d949866d65ee5236bcb822a49b6')
    .then(response => response.json())
    .then(data => {
        let namevalue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data.weather[0].description;
        const icon = data.weather[0].icon;

        let celsius =  tempValue - 273.15;
        let conCelsius = celsius.toFixed(1);

        loc.innerHTML = namevalue;
        temperature.innerHTML = conCelsius;
        description.innerHTML = descValue;
        locationIcon.innerHTML =  '<img src="icons/'+icon+'.png"/>';

    })
})


