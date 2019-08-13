class Repository
{
    constructor(userName,fileName, descripOfRep, code)
    {
        this.usernamestr= userName;
        this.filenamestr= fileName;
        this.descripstr= descripOfRep;
        this.codestr= code;
    }
    printProps(){
        
        console.log(this.usernamestr);
        console.log(this.filenamestr);
        console.log(this.descripstr);
        console.log(this.codestr);
}

}
let myRepository = new Repository("jackbolton901","JavaScript", "Classwork","While loops");
myRepository.printProps();


// Problem 2
//  class Movies
//  {
//     constructor(movieName, rating, releaseYear,);
//
//
//  }