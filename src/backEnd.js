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
}
