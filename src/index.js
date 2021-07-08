// API KEY = ddcef2e26391a79c173417a056875ed6
// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

// fetch("https://community-open-weather-map.p.rapidapi.com/find?q=london&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


    // <div class="weather-results">
    //                 <h2>City, <span>Country</span></h2>
    //                 <h2><span>25&#176</span></h2>
    //                 <img src="./img/VectorLogo.png" alt="temperature-icon">
    //                 <div class="temp">
    //                     <h3>
    //                         <span class="max-temp">24&#176</span>
    //                         <span class="min-temp">19&#176</span>
    //                     </h3>
    //                 </div>
    //                 <span class="conditions">Slow Rain</span>
    //             </div>
    //             <div class="footer">
    //                 <p>Designed by Oti  <span>&#169;2021</span></p>
    //             </div>

const weatherResult = document.querySelector(".weather-results")
const city= document.querySelector(".city")
const country = document.querySelector(".country")
const mainTemperature = document.querySelector('.main-temp')
const temperatureIcon = document.querySelector('.temperature-icon')

const maxTemperature = document.querySelector(".max-temp")
const minTemperature = document.querySelector(".min-temp")
const weatherDescription = document.querySelector(".conditions")


// weatherResult.style.display = 'none'

// city.innerHTML = 'fuck'
// country.innerHTML = 'you'
// mainTemperature.innerHTML = ''
// temperatureIcon.innerHTML = `<img src="icons/${weather.iconId}.png">`
// maxTemperature.innerHTML = ''
// minTemperature.innerHTML = ''
// weatherDescription.innerHTML = ''

//temperatureIcon.style.display = 'none'

