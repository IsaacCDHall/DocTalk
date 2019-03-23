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
      if (legible.meta.count === 0) {
        $(".result").append("There are no results for this search");
      }else {
        // console.log(legible.data[1].profile.bio);
        legible.data.forEach(function(index){
          console.log(index);
          docsBio.push(index.profile.bio);
          $(".result").append(`<h3>${index.profile.first_name} ${index.profile.last_name}</h3>`);
          index.practices.forEach(function(locations){
            console.log(locations.website);
            if (locations.accepts_new_patients == true) {
              console.log(locations.website);

              $(".result").append(`${locations.visit_address.street}, ${locations.visit_address.city}, ${locations.visit_address.state}  ${locations.visit_address.zip} <br>${locations.phones[0].number}`);
            }else {
              $(".result").append("This doctor is not currently accepting new patients");
            }
            if (locations.website !=undefined) {
              $(".result").append(`<br>${locations.website}<br>`);
            } 
          });
          console.log(index.practices.website);

          $(".result").append(`<br><i>${index.profile.bio}</i> <br><br>`)
          // console.log(index.practices)

        });
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
   $('.result').show();
  });
});
