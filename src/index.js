const form = document.querySelector(".form")
const cityInputValue = document.querySelector('.city-input-value')
const countryInputValue = document.querySelector('.country-input-value')
const weatherResult = document.querySelector(".weather-results")
const city= document.querySelector(".city")
const country = document.querySelector(".country")
const mainTemperature = document.querySelector('.main-temp')
const temperatureIcon = document.querySelector('.temperature-icon')
const maxTemperature = document.querySelector(".max-temp")
const minTemperature = document.querySelector(".min-temp")
const weatherDescription = document.querySelector(".conditions")


const getWeatherReport = document.querySelector('.search-btn')


let weather = {
    'apiKey': "ddcef2e26391a79c173417a056875ed6",

    fetchWeatherInformation: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        ).then(response => response.json())
        .then( data => this.displayWeather(data))

    },

    displayWeather: function (data) {
        // using array destructuring to destructure the API data 
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, temp_max, temp_min } = data.main
        
        // Loading the data into the weather result card
        city.innerText = name + ','
        temperatureIcon.src = "https://openweathermap.org/img/w/" + icon + ".png"
        mainTemperature.innerText = Math.floor(temp) + '°C'
        maxTemperature.innerText = Math.floor(temp_max) + '°C'
        minTemperature.innerText = Math.floor(temp_min) + '°C'
        weatherDescription.innerText = description
      
    },
    

    
    search: function () {
        this.fetchWeatherInformation(cityInputValue.value)
        city.innerText = cityInputValue.value
        country.innerText= countryInputValue.value
    },

}

function result() {
    
    function clearField() {
        cityInputValue.value = ""
        countryInputValue.value = ""
    }

    if ((cityInputValue.value !== "") && countryInputValue.value !== "") {
        document.querySelector(".weather-results").style.opacity = '1'
        weather.search()
        clearField()
    }
}


getWeatherReport.addEventListener("click", function (data) {
    result()
})


// if user press the "Enter Key"
document.querySelector(".clear-field").addEventListener("keyup", function (event){
    
    if (event.key == 'Enter') {
        result()
    }    
})

