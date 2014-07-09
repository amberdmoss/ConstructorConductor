//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore paramters and set them appropriatly

  var User = function (){
  	this.name = name;
  	this.email = email;
  	this.password = password;
  	this.totalScore = totalScore;

  }


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty paramters

 var Question = function(){
 	this.title = title;
 	this.answersArray = answersArray;
 	this.rightAnswer = rightAnswer;
 	this.difficulty = difficulty;
}

//Create a users Array which is going to hold all of our users.

 var users = [];


//Let's say three people signed up for our service, create 3 intances of User and add each to the users Array

var Mike = new User ('mike','mike@gmail', 'dfkds', '53');
var Sally = new User ('sally','sal@gmail', 'yoyo', '28');
var Jenny = new User ('jenny','jen10@gmail', 'cool', '32');

users.push(Mike);
users.push(Sally);
users.push(Jenny);


//Create a questions Array which is going to hold all of our questions

  var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  var Proques = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?');
  var Scripting = new Question('T/F: JavaScript is just a scripting version of Java');
  var Check = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value");

//Now push all of your instances of Question into the questions Array

  questions.push(Proques);
  questions.push(Scripting);
  questions.push(Check);


console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

 for (var i=0; i < users.length; i++){
 	console.log(users[i]);
 }

 for (var i=0; i < questions.length; i++){
 	console.log(questions[i]);
 }

