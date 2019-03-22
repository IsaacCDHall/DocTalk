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
    console.log(firstName);
    let name = sQ.nameMaker(firstName, lastName);
    console.log (name);
   $('.result').show();
  });
});
