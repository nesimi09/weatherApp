
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherInfo = document.querySelector(".weatherInfo");
const errorDiv = document.getElementById("error");

const apiKey = 'ab9e6554744e40fea80dc90000f3941b';

searchBtn.addEventListener('click' , function(e){
    e.preventDefault();
    const city = cityInput.value.trim();
    
    if ( city === '') {
        showError("Pleas enter a city!")
        return;
    }
    getWeather(city);
})

function getWeather(city){
    errorDiv.classList.remove('show');
    weatherInfo.innerHTML ='';
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('City not found!')
        }
        return response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        showError('city not found')
    });
}

function displayWeather(data) {
    const emoji = getWeatherEmoji(data.weather[0].description);
    const html = `
        <div class="city-name">${data.name}, ${data.sys.country}</div>
        <div class="temperature">${Math.round(data.main.temp)}°C</div>
        <div class="description">${emoji} ${data.weather[0].description}<div>
        <div class="details">
            <div class="detail-item">
                <div class="detail-label">Humidity</div>
                <div class="detail-value">${data.main.humidity}%</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Wind Speed</div>
                <div class="detail-value">${data.wind.speed} m/s</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Feels Like</div>
                <div class="detail-value">${Math.round(data.main.feels_like)}°C</div>
                </div>
            </div>
    `;
        

        weatherInfo.innerHTML = html;
}

function getWeatherEmoji(description) {
    description = description.toLowerCase();
    
    if (description.includes('clear')) return '☀️';
    if (description.includes('cloud')) return '☁️';
    if (description.includes('rain')) return '🌧️';
    if (description.includes('drizzle')) return '🌦️';
    if (description.includes('thunderstorm')) return '⛈️';
    if (description.includes('snow')) return '❄️';
    if (description.includes('mist') || description.includes('fog')) return '🌫️';
    if (description.includes('smoke')) return '💨';
    if (description.includes('haze')) return '🌁';
    
    return '🌤️'; 
}

function showError(message) {
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
        weatherInfo.innerHTML = '';
    }

