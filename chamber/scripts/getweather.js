
const currentTemp = document.getElementById("temperature");
const weatherIcon = document.getElementById("weather-icon");
const weatherDesc = document.querySelector("figcaption");

const weatherThreeDays = document.querySelector(".weather-threeDays");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=47.48&lon=8.21&units=imperial&appid=710bb94f8ac1a0695f7197b282e4ba48";

const threeDaysUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=47.48&lon=8.21&units=imperial&&appid=710bb94f8ac1a0695f7197b282e4ba48"

/* Using the classic url for the weather API */
/* getWeather is a function that fetches the weather data and displays 
the current temperature and weather description */
const getWeather = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
};

/* capitalize is a function that takes a string and returns the 
string with the first letter of each word capitalized */
const capitalize = (string) => {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

/* roundToWhole is a function that takes a number and returns the
number rounded to the nearest whole number */
const roundToWhole = (number) => {
    return Math.round(number);
}

/* displayWeather is a function that takes the weather data and
displays the current temperature, weather description, and weather icon */
function displayWeather(data) {
    if (data.main.temp !== undefined) {
        let temp = data.main.temp;
        let desc = data.weather[0].description;
        let icon = data.weather[0].icon;

        currentTemp.innerHTML = `${roundToWhole(temp)}&deg;F -- `;
        weatherDesc.innerHTML = `- ${capitalize(desc)}`;
        weatherIcon.setAttribute('alt', desc);
        weatherIcon.setAttribute('loading', 'lazy');
        weatherIcon.src = `http://openweathermap.org/img/wn/${icon}.png`;
    }
    else {
        console.error("Temperature: N/A");
    }
}

/* Using the classic url for the weather API */
/* getThreeDayForecast is a function that fetches the weather data and displays
the three day forecast */
const getThreeDayForecast = async () => {
    try {
        const response = await fetch(threeDaysUrl);

        if (response.ok) {
            const data = await response.json()
            displayThreeDayForecast(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
}

/* displayThreeDayForecast is a function that takes the weather data and
displays the three day forecast */
function displayThreeDayForecast(data) {
    // create the elements
    let dayOne = document.createElement('p');
    let dayTwo = document.createElement('p');
    let dayThree = document.createElement('p');

    // get the date for the next three days
    let dayPlusOne = data.list[8];
    let dayPlusTwo = data.list[16];
    let dayPlusThree = data.list[24];

    // format the date for the D+1
    let dayPlusOneDay = dayPlusOne.dt_txt;
    let date = new Date(dayPlusOneDay);
    let dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let formattedDate = `${dayOfWeek} ${month}/${day}`;

    // format the date for the D+2
    let dayPlusTwoDay = dayPlusTwo.dt_txt;
    let date2 = new Date(dayPlusTwoDay);
    let dayOfWeek2 = date2.toLocaleString('en-US', { weekday: 'long' });
    let month2 = date2.getMonth() + 1;
    let day2 = date2.getDate();
    let formattedDate2 = `${dayOfWeek2} ${month2}/${day2}`;

    // format the date for the D+3
    let dayPlusThreeDay = dayPlusThree.dt_txt;
    let date3 = new Date(dayPlusThreeDay);
    let dayOfWeek3 = date3.toLocaleString('en-US', { weekday: 'long' });
    let month3 = date3.getMonth() + 1;
    let day3 = date3.getDate();
    let formattedDate3 = `${dayOfWeek3} ${month3}/${day3}`;

    // get the temperature for the next three days
    let dayPlusOneTemp = roundToWhole(dayPlusOne.main.temp);
    let dayPlusTwoTemp = roundToWhole(dayPlusTwo.main.temp);
    let dayPlusThreeTemp = roundToWhole(dayPlusThree.main.temp);

    // set the text content for the elements
    dayOne.innerHTML = `<strong>${formattedDate}</strong>: ${dayPlusOneTemp}&deg;F`;
    dayTwo.innerHTML = `<strong>${formattedDate2}</strong>: ${dayPlusTwoTemp}&deg;F`;
    dayThree.innerHTML = `<strong>${formattedDate3}</strong>: ${dayPlusThreeTemp}&deg;F`;

    // append the elements to the weatherThreeDays
    weatherThreeDays.appendChild(dayOne);
    weatherThreeDays.appendChild(dayTwo);
    weatherThreeDays.appendChild(dayThree);
};

// call the getWeather and getThreeDayForecast functions
getWeather();
getThreeDayForecast();
