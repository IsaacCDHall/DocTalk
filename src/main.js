import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
// import './backEnd.js';
import $ from 'jquery';

import {DocTalker} from "./backEnd.js";
import {DocOp} from "./backEnd.js";

$(document).ready(function() {

  $("#ageForm").submit(function(event) {
    event.preventDefault();
    let sQ = new DocTalker;
    let sQuery = new DocOp;
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let query = $('#medIssueInput').val();
    const docsBio = [];
    const docsContact = [];
    const findDocs = sQuery.querySearch(firstName, lastName, query);
    // let name = sQ.nameMaker(firstName, lastName);
    // console.log (name);
    $('input').val("");

    findDocs.then(function(response) {
      let legible = JSON.parse(response);
      console.log(legible.meta.count);
      if (legible.meta.count === 0) {
        $(".result").append("There are no results for this search");
      }else {
        // console.log(legible.data[1].profile.bio);
        legible.data.forEach(function(index){
          // console.log(index);
          docsBio.push(index.profile.bio);
          $(".result").append(`${index.profile.first_name} ${index.profile.last_name}<br>`);
          console.log(index.practices);
          index.practices.forEach(function(locations){
            console.log(locations.accepts_new_patients);
            if (locations.accepts_new_patients == true) {
              console.log("true");
              console.log(locations.visit_address);

              $(".result").append(`${locations.visit_address.street}, ${locations.visit_address.city}, ${locations.visit_address.state}  ${locations.visit_address.zip} <br> `);
            }else {

              console.log("false")
            }
          });


          $(".result").append(`${index.profile.bio} <br><br>`);
          console.log(index.practices);

        });

      }
      // console.log(docsBio);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });






    // let request = new XMLHttpRequest();
    // const url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&query=${query}&location=or-portland&user_location=45.512%2C%20122.658&skip=0&limit=10&user_key=${process.env.apiKey}`;
    //
    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const response = JSON.parse(this.responseText);
    //     console.log(response);
    //     // sQ.eachInArr(response.data);
    //     console.log(response.data[0].profile.bio);
    //     console.log(response.data[1].profile.bio);
    //     console.log(response.data[2].profile.bio);
    //     console.log(response.data[3].profile.bio);
    //     return response;
    //   }
    // }
    // request.open("GET", url, true);
    // request.send();

    // ui show
    // console.log(response);
    // const getElements = function(response) {
    //   $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //   $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    // }
   $('.result').show();
  });
});
