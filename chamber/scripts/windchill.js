
let infoList = [];

/* function to calculate windchill is a function that takes the temperature and 
the windspeed as parameters
It calculates the windchill using the given formula
It returns the windchill rounded to 2 decimal places
*/
function calculateWindchill(temperature, windspeed) {
    const windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
    return windchill.toFixed(2);
}

/* getWeather is a function that fetches asynchronusly the weather data
for Brugg, AG, Switzerland  from an API
It also calls the displayTemperature and the displayWindchill functions
to display them in the website
If there is an error fetching the data, it will be logged in the console
*/
const getWeather= async () => {
    try {
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/brugg%20aargau%20switzerland?unitGroup=us&key=TL4E7JG8UXWJPWVKL7GVJ29U2&contentType=json")
        infoList = await response.json()
        // displayTemperature(infoList)
        displayWindchill(infoList)
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
};

/* displayTemperature is a function that displays the temperature
It takes the infoList as a parameter and checks if it is not empty
If it is not empty, it will display the temperature of the current day  
If it is empty, it will display "N/A"
*/
const displayTemperature = (infoList) => {
    if (infoList && infoList.days && infoList.days.length > 0) {
        const currentDay = infoList.days[0];
        document.getElementById("temperature").innerHTML = `Temperature: ${currentDay.temp}°F`
    } else {
        document.getElementById("temperature").innerHTML = "Temperature: N/A"
    }
}

/* displayWindchill is a function that displays the windchill
It takes the infoList as a parameter and checks if it is not empty
If it is not empty, it will display the windchill of the current day
If it is empty, it will display "N/A"
*/
const displayWindchill= (infoList) => {
    if (infoList && infoList.days && infoList.days.length > 0) {
        const currentDay = infoList.days[0];
        const temperature = currentDay.temp
        const windspeed = currentDay.windspeed
        const windchill = calculateWindchill(temperature, windspeed)
        document.getElementById("windchill").innerHTML = `Windchill: ${windchill}°F`
    } else {
        document.getElementById("windchill").innerHTML = "Windchill: N/A"
    }
};

/* Call the getWeather function to fetch the weather data */
getWeather();
