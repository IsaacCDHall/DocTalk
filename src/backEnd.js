export class DocOp {
  constructor() {

  }
  querySearch(firstName, lastName, query) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&query=${query}&location=or-portland&user_location=45.512%2C%20122.658&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
// export class DocTalker{
//   constructor(firstName, lastName, addy, digits, website, open){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.addy=addy;
//     this.digits=digits;
//     this.website=website;
//     this.open=open;
//   }
//
//   bustedNameMaker(){
//     const name= `${this.firstName} ` + this.lastName;
//     console.log(name)
//     return name;
//   }
//   nameMaker(firstName, lastName){
//     const name= `${firstName} ${lastName}`;
//     console.log(name)
//     return name;
//   }
//   eachInArr(arr, element){
//     arr.forEach(function(element){
//       console.log(element)
//     })
//   }
// }
//   let sQ = new DocTalker;
//   // let searchQuery = new DocTalker($("#firstNameInput, #lastNameInput, 'addy', 'digits', 'website', 'open'").val())
//   let firstName = $('#firstNameInput').val();
//   let lastName = $('#lastNameInput').val();
//   let query = $('#medIssueInput').val();
//   console.log(firstName);
//   let name = sQ.nameMaker(firstName, lastName);
//   console.log (name);
//   // const city = $('#location').val();
//   $('input').val("");
//
//   let request = new XMLHttpRequest();
//   const url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&query=${query}&location=or-portland&user_location=45.512%2C%20122.658&skip=0&limit=10&user_key=${process.env.apiKey}`;
//
//   request.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       console.log(response);
//       // sQ.eachInArr(response.data);
//       console.log(response.data[0].profile.bio);
//       console.log(response.data[1].profile.bio);
//       console.log(response.data[2].profile.bio);
//       console.log(response.data[3].profile.bio);
//       return response;
//     }
//   }
//   request.open("GET", url, true);
//   request.send();
// }




// const user = {
//     id: 101,
//     email: 'jack@dev.com',
//     personalInfo: {
//         name: 'Jack',
//         address: {
//             line1: 'westwish st',
//             line2: 'washmasher',
//             city: 'wallas',
//             state: 'WX'
//         }
//     }
// }
