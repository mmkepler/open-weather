const express = require('express');
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client", "build")));

//let weather_url = `http://api.openweathermap.org/data/2.5/forecast??lat=${lat}&lon=${lon}&APPID=${process.env.WEATHER_KEY}&mode=json`;

app.post('/api/find', (req, res) => {
  console.log(req.body);
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});