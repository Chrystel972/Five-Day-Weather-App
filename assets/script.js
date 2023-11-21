var apiKey = "8b81144294471b6f159515bb5cadd027";
var searchForm = document.querySelector('#search-form');
var cityInput = document.querySelector('#search-input');
var today = document.querySelector('#today');
var forecast = document.querySelector('#forecast');


function currentWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
       console.log(data)
       var place = document.createElement('h1');
       place.textContent = data.name + ' ';
       var date = new Date ();
       var formatDate = date.getDate() + '/' + (date.getMonth() + 1)  + '/' + date.getFullYear() + ' ';
       place.append(formatDate);
       var img = document.createElement('img');
       img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
       place.append(img);
       today.append(place);
       var temp = document.createElement('p');
       temp.textContent = 'temperature' + ' ' + data.main.temp 
       today.append(temp);
       var humidity = document.createElement('p');
       humidity.textContent = 'humidity' + ' ' + data.main.humidity
       today.append(humidity);
       var windSpeed = document.createElement('p');
       windSpeed.textContent = 'wind speed' + ' ' + data.wind.speed
       today.append(windSpeed);
    })
}

searchForm.addEventListener("submit", function(event){
    event.preventDefault();
var city = cityInput.value;
currentWeather(city);
})