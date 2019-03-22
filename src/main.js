import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
// import './backEnd.js';
import $ from 'jquery';

import {DocTalker} from "./backEnd.js";

$(document).ready(function() {

  $("#ageForm").submit(function(event) {
    event.preventDefault();
    let sQ = new DocTalker;
    // let searchQuery = new DocTalker($("#firstNameInput, #lastNameInput, 'addy', 'digits', 'website', 'open'").val())
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let query = $('#medIssueInput').val();
    console.log(firstName);
    let name = sQ.nameMaker(firstName, lastName);
    console.log (name);
    // const city = $('#location').val();
    $('input').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&query=${query}&location=or-portland&user_location=45.512%2C%20122.658&skip=0&limit=10&user_key=${process.env.apiKey}`;

    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.apiKey}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
      }
    }

    request.open("GET", url, true);
    request.send();
    // console.log(response);
    // const getElements = function(response) {
    //   $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //   $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    // }
   $('.result').show();
  });
});
