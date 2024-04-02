const maxTemp = document.getElementById('hero-banner');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.95&units=imperial&appid=710bb94f8ac1a0695f7197b282e4ba48";

/* getMaxTemp is a function that fetches the weather 
data and displays the max temperature */
const getMaxTemp = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()
            displayMaxTemp(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
}

/* roundToWhole is a function that takes a number and 
returns the number rounded to the nearest whole number */
const roundToWhole = (number) => {
    return Math.round(number);
}

/* displayMaxTemp is a function that takes the weather 
data and displays the max temperature */
const displayMaxTemp = (data) => {
    if (data.main.temp_max !== undefined) {
        let temp = data.main.temp_max;
        maxTemp.innerHTML = `Highest Temperature Today: ${roundToWhole(temp)}&deg;F`;
    }
    else {
        console.error("Max Temperature: N/A");
    }
}

/* call the getMaxTemp function */
getMaxTemp();