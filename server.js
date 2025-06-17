const express = require("express");
require("dotenv").config();
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const iconConversion = require("./helpers/iconConversion");
const app = express();
const favicon = require("serve-favicon");
let dttype = "dt";
let suntype = "sun";

app.use(cors());
app.use(favicon(path.join(__dirname, "client", "build", "planetTitle.png")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

/* Converts utc date to readable date, and formats for use */
const utcConvertor = (utc, offset, type) => {
  let tempDate;
  
  if(Math.sign(offset) === -1){
    tempDate = parseInt((utc * 1000) - Math.abs(offset));
  } else {
    tempDate = parseInt((utc * 1000) + Math.abs(offset));
  }
  var date = new Date(tempDate);
  var year = date.getFullYear();
  year = year.toString().slice(2);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var end = "";
  var tempHours;
  
  /* adds 0 to single number minutes */
  if(minutes < 10){
    minutes = "0" + minutes;
  }

  if(hours > 12){
    tempHours = hours - 12;
    end = "pm";
  } else if (hours === 12){
    end = "pm";
    tempHours = hours;
  } else if (hours === 0){
    tempHours = 12;
    end = "am";
  } else {
    end = "am";
    tempHours = hours
  }
  
  

  /* creates string for full date and time or just time for sunset/sunrise */
  if(type === "dt"){
    var dateTime = month + "/" + day + "/" + year + " " + tempHours + ":" + minutes + end;
    return dateTime;
  } else {
    var sunTime = tempHours + ":" + minutes + end;
    return sunTime;
  }
};

/* Converts metric pressure to inches */
const pressureConvertor = (pressure) => {
  let tempPress = pressure / 33.863886666667;
  tempPress = tempPress.toFixed(2);
  return tempPress;
};

/* converts meters to mi for visibility */
const distanceConvertor = (dist) => {
  let tempDist = dist / 1609.34;
  tempDist = tempDist.toFixed(2);
  return tempDist;
};

/* Finds weather class to use proper icon */
const findIcon = (data) => {
  let tempIcon;
  let tempData = data.toString();
  
  if(iconConversion.hasOwnProperty(tempData)){
    tempIcon = iconConversion[tempData] + " weather-icon";
    return tempIcon;
  } else {
    tempIcon = "wi wi-alien";
    return tempIcon;
  }
};

/* Creates weather obj to send to front end */
const formatData = (weatherData) => {
  let weatherObj = {
    "city": null,
    "datetime": null,
    "currenttemp": null,
    "lowtemp": null,
    "hightemp": null,
    "icon": null,
    "weather": null,
    "wind": null,
    "humidity": null,
    "pressure": null,
    "visibility": null,
    "sunrise": null,
    "sunset": null
  };

  weatherObj.city = weatherData.name;
  weatherObj.datetime = utcConvertor(weatherData.dt, weatherData.timezone, dttype);
  weatherObj.currenttemp = Math.trunc(weatherData.main.temp);
  weatherObj.lowtemp = Math.trunc(weatherData.main.temp_min);
  weatherObj.hightemp = Math.trunc(weatherData.main.temp_max);
  weatherObj.icon = findIcon(weatherData.weather[0].id);
  weatherObj.weather = weatherData.weather[0].main.toLowerCase();
  weatherObj.wind = weatherData.wind.speed;
  weatherObj.humidity = weatherData.main.humidity;
  weatherObj.pressure = pressureConvertor(weatherData.main.pressure);
  weatherObj.visibility = distanceConvertor(weatherData.visibility);
  weatherObj.sunrise = utcConvertor(weatherData.sys.sunrise, weatherData.timezone, suntype);
  weatherObj.sunset = utcConvertor(weatherData.sys.sunset, weatherData.timezone, suntype);
  return weatherObj;
}

/* creates forecast object to send to front end */
const forecastFormat = (forecastData) => {
  let forecastObj = [];
  let tempObj = {};
  forecastData.forEach((el) => {
    tempObj.date = utcConvertor(el.dt, 0, dttype);
    tempObj.temp = Math.trunc(el.main.temp);
    tempObj.icon = findIcon(el.weather[0].id);
    forecastObj.push(tempObj);
    tempObj = {};
  });
  return forecastObj;
};

/*Routes */

/* requests current weather data by city from search input*/
app.post ("/search" , (req, res) => {
  let tempCity = req.body.city;
  let zip = /^\d{5}$|^\d{5}-\d{4}$/;
  let cityUrl;

  if(tempCity.match(zip)){
    city_url = `http://api.openweathermap.org/data/2.5/weather?zip=${tempCity}&APPID=${process.env.WEATHER_KEY}&mode=json&lang=en&units=imperial`;
  } else {
    tempCity = tempCity.trim();
    city_url = `http://api.openweathermap.org/data/2.5/weather?q=${tempCity}&APPID=${process.env.WEATHER_KEY}&mode=json&lang=en&units=imperial`
  }
  
  axios.get(city_url)
  .then(res => {
    let searchObj = formatData(res.data);
    return searchObj;
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send("error");
  });
});

/* uses gelocation data to retrieve current weather on load */
app.post("/find", (req, res) => {
  var lat = req.body.lat;
  var lon = req.body.lon;
  const weather_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${process.env.WEATHER_KEY}&mode=json&lang=en&units=imperial`;
  axios.get(weather_url)
  .then(res => {
    var obj = formatData(res.data);
    return obj
  })
  .then((data) => {
    res.send(data);
  })
  .catch(err => console.log("error " + err));
});

/* requests forecast data from openweathermap */
app.post("/forecast", (req, res) => {
  let city = req.body.city;
  const forecast_url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${state_code}&APPID=${process.env.WEATHER_KEY}&mode=json&lang=en&units=imperial`;
axios.get(forecast_url)
.then(forecast => {
  let obj = forecastFormat(forecast.data.list);
  return obj;
})
.then(data => {
  res.send(data);
})
.catch(err => {
  console.log("error retrieving forecast ", err)
  res.send("Error retrieving forecast");
});
});


const port = process.env.PORT || 5004;
app.listen(port, () => {
  //console.log(`Server running on port ${port}`)
});