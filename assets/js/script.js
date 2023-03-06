/*
-The weather dashboard page will utilize a weather API to 
dynamically pull info and display on page
-A search request will have to be sent to the api
-Below this search bar there must be a recent history of cities selected
we need

--a function to call the api 
---this function must also contain a button listener for the search button

--a handler to sort through the data

--a function to search for a specific city and pull that information
---into a div
---specifically getting these items from the JSON 
----City name
----Temp
----Humidity

--a function that saves the cities previously called into local storage
---then allows these city buttons to be clicked later and pull the 
current weather for that city
*/

//variables
var APIKey = '&appid=c72e3fbed3e580864d513d81340cda04';
var city = '';
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var AppId

//Jquery wrapper
$(function () {
  //Jquery handler function
  $(document).ready(function(){
    //Function that calls the openWeather API
    $('#searchBtn').click(function callAPI (){
      //Pulls text data and stores it in city variable
      city = $('#searchTxt').val();
      console.log(city);
      console.log(requestURL);
      //fetch openWeather API
      fetch(requestURL+city+APIKey)
      .then(response=>{
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log('API Call Successful')
        console.log(response);
      })
      .catch(error => {
        console.log('Error in response');
        console.error(error);
      });


    })
  });
});
