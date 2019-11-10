#  Weather App
#  This is a simple Single Page Application that is also a Progressive Web App. 
[Weather App](https://warm-cliffs-12741.herokuapp.com/)

On load, if the client has allowed for geolocation services, the app will send geolocation data to openweather and retieve the local conditions. If not the client is alerted that geolocation is blocked. 

The client can also click on the forecast button and the app will send a request for the forecast and load it. 

The Open weather Api doesn't allow for requests of current conditions and forecast, I decided to only request forcast if the client wants it so it will have a quicker initial load time. 

Assets needed for loading the page are cached by a workbox serviceworker and can be loaded while offline. The client will be alerted if they may be offline.

I realize that weather changes by the minute, so at this time the app doesn't cache any weather data.

###  This app uses the following:
*  HTML
*  CSS/Bootstrap
*  React/ES6
*  Redux
*  Workbox
*  [Open Weather](https://openweathermap.org/api) Map Api

### This is a work in progress. Items still being worked on
*  Adding testing
*  Saving a few forecasts for caching
