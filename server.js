const express = require('express');
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const iconConversion = require('./helpers/iconConversion');
const app = express();
let dttype = 'dt';
let suntype = 'sun';


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client", "build")));




const utcConvertor = (utc, offset, type) => {
  let tempDate;
  if(Math.sign(offset) === -1){
    tempDate = parseInt((utc * 1000) + Math.abs(offset));
  } else {
    tempDate = parseInt((utc * 1000) - Math.abs(offset));
  }
  var date = new Date(tempDate);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var end = '';
  var tempHours;
  //console.log('hours ', hours);
  
  if(minutes < 10){
    minutes = '0' + minutes;
  }

  if(hours > 12){
    tempHours = hours - 12;
    end = 'pm';
  } else if (hours === 12){
    end = 'pm';
    tempHours = hours;
  } else {
    end = 'am';
    tempHours = hours
  }

  if(type === 'dt'){
    var dateTime = month + '/' + day + '/' + year + ' ' + tempHours + ':' + minutes + ' ' + end;
    console.log('hours at time ', tempHours);
    return dateTime;
  } else {
    console.log('hours at sun', tempHours)
    var sunTime = tempHours + ':' + minutes + ' ' + end;
    return sunTime;
  }
};

const pressureConvertor = (pressure) => {
  let tempPress = pressure / 33.863886666667;
  tempPress = tempPress.toFixed(2);
  return tempPress;
};

const distanceConvertor = (dist) => {
  let tempDist = dist / 1609.34;
  tempDist = tempDist.toFixed(2);
  return tempDist;

};

const findIcon = (data) => {
  let tempIcon;
  let tempData = data.toString();
  
  if(iconConversion.hasOwnProperty(tempData)){
    tempIcon = iconConversion[tempData];
    return tempIcon;
  } else {
    tempIcon = 'wi wi-alien';
    return tempIcon;
  }
};

const formatData = (weatherData) => {
  
  let weatherObj = {
    'city': null,
    'datetime': null,
    'currenttemp': null,
    'lowtemp': null,
    'hightemp': null,
    'icon': null,
    'weather': null,
    'wind': null,
    'humidity': null,
    'pressure': null,
    'visibility': null,
    'sunrise': null,
    'sunset': null
  };

  weatherObj.city = weatherData.name;
  weatherObj.datetime = utcConvertor(weatherData.dt, weatherData.timezone, dttype);
  weatherObj.currenttemp = Math.trunc(weatherData.main.temp);
  weatherObj.lowtemp = Math.trunc(weatherData.main.temp_min);
  weatherObj.hightemp = Math.trunc(weatherData.main.temp_max);
  weatherObj.icon = findIcon(weatherData.weather[0].id);
  weatherObj.weather = weatherData.weather[0].main;
  weatherObj.wind = weatherData.wind.speed;
  weatherObj.humidity = weatherData.main.humidity;
  weatherObj.pressure = pressureConvertor(weatherData.main.pressure);
  weatherObj.visibility = distanceConvertor(weatherData.visibility);
  weatherObj.sunrise = utcConvertor(weatherData.sys.sunrise, weatherData.timezone, suntype);
  weatherObj.sunset = utcConvertor(weatherData.sys.sunset, weatherData.timezone, suntype);

  console.log("weather Obj", weatherObj);
  return weatherObj;
}




app.post ('/api/search' , (req, res) => {
  console.log('search ', req.body);
});

app.post('/api/find', (req, res) => {
  var lat = req.body.lat;
  var lon = req.body.lon;
  const weather_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${process.env.WEATHER_KEY}&mode=json&lang=en&units=imperial`;
  //console.log(weather_url);
  axios.get(weather_url)
  .then(res => {
    var obj = formatData(res.data);
    return obj
  })
  .then((data) => {
    res.send(data);
  })
  .catch(err => console.log('error ' + err));

});

const port = process.env.PORT || 5004;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});