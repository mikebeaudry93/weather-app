class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feelsLike = document.getElementById('w-feels-like')
        this.dewpoint = document.getElementById('w-dewpoint')
        this.wind = document.getElementById('w-wind')
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${Math.round(weather.main.temp)} °C`;
        this.icon.setAttribute('src', `icons/${weather.weather[0].icon}.png`)
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.feelsLike.textContent = `Feels Like: ${Math.round(weather.main.feels_like)} °C`
        this.wind.textContent = `Wind: ${Math.round(weather.wind.speed)} km/h`

    }
}