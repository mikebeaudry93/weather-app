class Weather {
    constructor(city, state, country) {
        this.apiKey = '5df1b74f90bdc0fa9b261571076b7f77';
        this.city = city;
        this.state = state;
        this.country = country
    }

    async getWeather() {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country}&units=metric&appid=${this.apiKey}`)

        const responseData = await response.json();
        
        
        return responseData
    }

    // Change weather location 
    changeLocation(city, state, country) {
        this.city = city;
        this.state = state;
        this.state = country;
    }
}