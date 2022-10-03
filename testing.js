
//Usman Nawaz
// Section: Lahore @ 2:00pm -6:00 pm

// Exercise 2:

let personsName = "Usman";

console.log("Hello ", personsName);

//Exercise 3:

console.log("Lower Case: ",personsName.toLowerCase());
console.log("Upper Case: ",personsName.toUpperCase());
console.log("Title Case: ",personsName);

//Exercise 4:

let favQuote = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
console.log("Nelson Mandela once said \"", favQuote ,"\"" );

//Exercise 5: 

let famous_name = "Nelson Mandela";
let message; 
message = famous_name;
message+=" once said \" ";
message+= favQuote;
message+="\"";
console.log(message);

//Exercise 6:
let name = "\t U\ts\t na \nw \t ";
console.log(name);

//Exercise 7,8:
console.log(6+2);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//Exercise 9

var favNum = 48;
message = "My favorite Number is "+ favNum;
console.log(message);

//Excersise 11

const friendsName = ["Waleed " , "Ali " , "Hassan" ,  "Daniyal"];
 
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);

//Exercise 12
for(let i = 0 ; i<4 ; i++){
    console.log("Good Morning " , friendsName[i]);
}

//Exercise 13
const myArray = [
                    "I would like to own BMW",
                    "My favorite bike is Honda motercycle",
                    "Toyota cars are more durable"
                ];

                console.log(myArray[0]);
                console.log(myArray[1]);
                console.log(myArray[2]);
 
//Exercise 14
const myList = ["Ahmad ", "Rehan " , "Faisal "];

                console.log("Hello " , myList[0] , "I would like you to invite at my place for dinner");
                console.log("Hello ", myList[1], "I would like you to invite at my place for dinner");
                console.log("Hello ", myList[2], "I would like you to invite at my place for dinner");


//Exercise 15

                console.log("unfortunately it seems " ,myList[1] , " couldn't make to the dinner.");

                myList[1] = "Arsalan";
                console.log("Hello ", myList[0], "I would like you to invite at my place for dinner");
                console.log("Hello ", myList[1], "I would like you to invite at my place for dinner");
                console.log("Hello ", myList[2], "I would like you to invite at my place for dinner");


            
//Exercise 16

                console.log("Hurrayyy it seems like i got a bigger table so was planning to invite few more guests");

                myList.unshift("Asim");
                myList.push("Mustafa");
                myList.splice(2,0,"Saad");

                console.log("Hello ", myList[0], "I would like you to invite at my place for dinner");
                console.log("Hello ", myList[1], "I would like you to invite at my place for dinner");
                console.log("Hello ", myList[2], "I would like you to invite at my place for dinner");
                console.log("Hello ", myList[3], "I would like you to invite at my place for dinner");
                console.log("Hello ", myList[4], "I would like you to invite at my place for dinner");
                console.log("Hello ", myList[5], "I would like you to invite at my place for dinner");

//Exercise 17

                console.log("Due to some reason I can't invite more then two people\n");

            var index = 5;

            for(let i=5 ; i>1 ;i-- ){
                
                console.log("Sorry " , myList[i] , "you are not invited for the dinner");
                myList.pop();

            }

            console.log(myList[0], " you are still invited for the dinner");
            console.log(myList[1], " you are still invited for the dinner");
            var length = myList.length;
            myList.pop();
            myList.pop();

    for(let i = 0 ; i < 5; i++){
        console.log(myList[i]);
    }

    //Exercise 18
    const favPlaces = ["Paris" , "Germany" , "Turkey" , "Spain" , "London"];
    const favPlaces2 = favPlaces;

    console.log("Array in original ordder\n")
    for(let i = 0 ; i <5 ; i++){
        console.log(favPlaces[i]);
    }



    favPlaces.sort();
    console.log("\nAlphabetical order without modifying the actual list.\n");

    for (let i = 0; i < 5; i++) {
        console.log(favPlaces[i]);
    }

    favPlaces.reverse();

    console.log("\nReverse the order of array\n")
    for (let i = 0; i < 5; i++) {
        console.log(favPlaces[i]);
    }

//Exercise 19
    console.log("The number of guest I have invited are " , length);

//Exercise 20  , 21

const langArr = ["Urdu " , "English ", "French" ,  "Hindi" , "Latin"];

//Exersise 23

let fruit = "apple";

console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

let country = "USA";

console.log("Is country == 'USA'? I predict True.");
console.log(country == 'USA');


let place = "Badshah Mosque";

console.log("Is place == 'Badshah Mosque'? I predict True.");
console.log(place == 'Badshah Mosque');

let vacation = "Singapore";

console.log("Is vacation == 'Singapore'? I predict True.");
console.log(vacation == 'Singapore');

let language = "JavaScript";

console.log("Is language == 'JavaScript'? I predict True.");
console.log(language == 'JavaScript');

console.log("Is fruit == 'apple'? I predict False.");
console.log(fruit != 'apple');


console.log("Is country == 'USA'? I predict False.");
console.log(country != 'USA');




console.log("Is place == 'Badshah Mosque'? I predict False.");
console.log(place != 'Badshah Mosque');



console.log("Is vacation == 'Singapore'? I predict False.");
console.log(vacation != 'Singapore');



console.log("Is language == 'JavaScript'? I predict False.");
console.log(language != 'JavaScript');


//Exercise 24

console.log("happy == 'sad'? I predict it is False ");
console.log("happy" == "sad");

let city = "LAHORE";

console.log("LAHORE == lahore I predict it is false");
console.log(city == city.toLowerCase());

//Exercise 25

let allin_color = "green";

    if (allin_color == "green"){
        console.log("You earned 5 points");
    }

    allin_color = "red";

    if (allin_color == "green") {
        console.log("You earned 5 points");
    }
    else{
        console.log("You earned 10 points");
    }

    if (allin_color == "green") {
        console.log("You earned 5 points");
    }
   
    else if (allin_color == "red"){
        console.log("You earned 15 points")
    }

    else{
        console.log("You earned 10 points");
    }

    //Exercise 28

    let age = 23;

    if (age <2 ){
        console.log("You are a small baby");
    }

    else if( age >=2 && age < 4){
        console.log("You are a toodler");
    }

    else if(age >= 4 && age < 13){
        console.log("You are a kid");
    }
    else if(age>=13 && age < 20){
        console.log("You are a teenager");
    }

    else if(age>= 20 && age < 65){
        console.log("You are adult");
    }

    else{
        console.log("You are elder");
    }       

//Exercise 29
    const favFruit = ["apple" , "orange","banana","peach", "mango"];

    for(var i = 0 ; i <6 ; i++){
        if (favFruit[i] == "mango")
            console.log("You really like ", favFruit[i]);
        else if (favFruit[i] =="banana")    
            console.log("You really like ", favFruit[i]);
        
        else if (favFruit[i] == "peach")
        console.log("You really like ", favFruit[i]);

        else if(favFruit[i] == "orange")
        console.log("You really like ", favFruit[i]);

        else if (favFruit[i] == "apple")
            console.log("You really like ", favFruit[i]);


    }

    //Exercise 30

const usernames = ["usman_nawaz" , "abc" , "admin" , "cybro" , "meta_world"];

    for (let i = 0 ; i <5 ; i++){
        if (usernames[i] == "admin")
            console.log("Hello Admin, would you like to see a status report");
        else
            console.log("Hello " ,usernames[i], "thankyou for logging in again.");
            
    }
    //Exercise 31

    for(let i = 0 ; i < 5 ; i++){
        usernames.pop();
    }

    if (usernames[0] == undefined){
        console.log("We need to add more users");
    }

    //Exercise 32

    const current_users = ["John_xe" , "nawazu" , "abc", "123"];
    const new_users = ["Michal" , "ABC" , "harry" , "123"];

    for (let i = 0 ; i <4 ; i ++){

        for(let j = 0 ; j< 4 ; j++){

            if (new_users[i].toUpperCase == current_users[j].toUpperCase) {
                console.log("Sorry this user ", current_users[j]," has already been taken.")
            }
        }
    }

    //Exercise 33

  var numArr = [1,2,3,4,5,6,7,8,9];

  for (let i=0 ; i <8; i++){

        if (numArr[i] > 3)
            console.log(numArr[i],"th");
        
        else if (numArr[i] == 1)
            console.log(numArr[i] ,"st");
        
        else if (numArr[i]==2)
            console.log(numArr[i],"nd");
        
        else if (numArr[i] ==3)
            console.log(numArr[i],"rd");
  }

  //Exercise 34

  const pizzaName = ["Fajita" , "Chicken Tikka" , "Chicken Supreme"];

  for (let i = 0 ;i < 3 ; i++) {

    console.log("I like ", pizzaName[i] , " pizza!!");

  }

  console.log("Pizza is my favorite dish for dinner");


  //Exercise 35

  const animal = ["dog", "cat","rabbit"];

  for (let i = 0 ; i < 3; i++){

    if (i == 0)
        console.log(animal[i] , " makes a great pet.");
    
    else if (i == 1)
        console.log(animal[i] , " is my fav pet");

    else 
        console.log(animal[i], " are snoogy");
        
  }

  console.log(" Dogs, Cat and Rabbit could be a friendly pets. ")

  //Exercise 36 / 37

  function make_shirt(size , text ){
      
    if (size == "L " || size =='M')
        console.log("I love JavaScript");
    
    else{
        console.log("Size is ", size, " Message is:' ", text, "'");

    }
  }

  make_shirt("L" , "There is no tommorow. Its all about now");
  make_shirt("S", "For tomorrow’s people");
  

  //Exercise 38

    function describe_city(city , country){
        console.log( city , " is in " , country);
    }

   //Exercise 39

    describe_city("Lahore" , "Pakistan");
    describe_city("Mumbai", "India");
    describe_city("Chicago", "USA");


    function city_country(city , country){

        return "'" + city+","+ country+"'";
    }

    var sentence = city_country("Newyork" , "USA");

    console.log(sentence);

    //Exercise 40

    function make_album(artist_name , album_title){

        const music = {artistName: artist_name , albumTitle: album_title};

        return music;
    }

let music = make_album("Marvin Gaye ", "Soul");

    console.log(music);
    music = make_album("Weekend" , "After Hours");
    console.log(music);
    music = make_album("Drake" ,"Take Care" );
    console.log(music);

    //Exercise 41

    function show_magician(magicianArray){

        for (let i = 0 ; i < 3 ; i++){
            console.log(magicianArray[i]);
        }

    }
//Exercise 42 , 43

function make_great(magicainArray){
        var magicianArray2 = [].concat(magicainArray);

        for (let i =0 ; i < 3; i++){
            magicianArray2[i]+= " The Great";
        }

        return magicianArray2;
}

var magicianArray = [ "Dynamo" , "Apollo Robbins" , "David Blaine." ];
var magicianArray2 = [];
    show_magician(magicianArray);

    magicianArray2 = make_great(magicianArray);
    show_magician(magicianArray2);
    console.log("Original list is");
    show_magician(magicianArray);

// Exercise 44


    function sandwich(items){
        console.log("The customer needs these topping in there sandwich:")
        for (let i = 0 ; i< arguments.length ; i++){
            console.log(arguments[i]);
        }
    }

    sandwich("Chicken" , "Olives","Onion", "Cheese");
    sandwich("Tofu" , "Cheese");



//Exercise 45
 
   function car (manufacturer, model){

    const carDetails = {manufacturer_name : manufacturer , model_year : model , color:arguments[2] , feature:arguments[3]};
    return carDetails;
   }
   
   var carDetails = car("Toyota" , 2019 , "White" , "Sunroof");

   console.log(carDetails);

   carDetails = car("Honda" , 2017 , "Black" , "Heated seats");
   console.log(carDetails);

    