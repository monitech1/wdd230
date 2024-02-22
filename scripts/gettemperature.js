const temperature = document.getElementById("temperature");
let infoList = [];

const getTemperature = async () => {
    try {
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/brugg%20aargau%20switzerland?unitGroup=us&key=TL4E7JG8UXWJPWVKL7GVJ29U2&contentType=json")
        infoList = await response.json()
        displayTemperature(infoList)
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
};

const displayTemperature = (infoList) => {
    if (infoList && infoList.days && infoList.days.length > 0) {
        const currentDay = infoList.days[0];
        const currenttemperature = currentDay.temp;
        document.getElementById("temperature").innerHTML = `Temperature: ${currenttemperature}°F`
    } else {
        document.getElementById("temperature").innerHTML = "Temperature: N/A"
    }
};

getTemperature();