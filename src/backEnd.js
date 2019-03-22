export class DocTalker{
  constructor(firstName, lastName, addy, digits, website, open){
    this.firstName=firstName;
    this.lastName=lastName;
    this.addy=addy;
    this.digits=digits;
    this.website=website;
    this.open=open;
  }

  bustedNameMaker(){
    const name= `${this.firstName} ` + this.lastName;
    console.log(name)
    return name;
  }
  nameMaker(firstName, lastName){
    const name= `${firstName} ${lastName}`;
    console.log(name)
    return name;
  }
  eachInArr(arr, element){
    arr.forEach(function(element){
      console.log(element)
    })
  }

}




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
