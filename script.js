    alert("Welcome");//create popup that says welcome

    //prints "Welcome to the console" to the console
    //get to this by right clicking the webpage and choosing "Inspect Element"
    console.log("Welcome to the console");

    console.log("hi"+"!");//string concatenation

    console.log(5*3);//can use multiply, divide, add and subtract operators

    //booleans are wither true or false
    //below are examples of some expression that evaluate to booleans
    console.log(1 >= 0);
    console.log(!true);
    console.log(!(3 > 2));
    console.log("Laura" == "laura");

    //use var keyword to create a variable
    var name = "Kevin";

    console.log(name);//keyword is a stand in for the value it holds
    console.log(name);
    name = "Laura"; //can change the value of the variable
    console.log(name);
    console.log(name);

    var favorite_number = 3;//variables can be used with all datatypes

    console.log(favorite_number);

    var amIHungry = false;

    console.log("Is Laura hungry? " + amIHungry);

    //if statement runs the code only if the condition within if() is true
    if(amIHungry){
      console.log("eat!!!!!");
    }

    var age = 3;

    //more complicated conditional that runs only 1 of 3 output options
    if(age > 65){
      console.log("eat fiber");
    }else if(age < 5){
      console.log("eat animal crackers");
    }else{
      console.log("eat poptarts");
    }

    //create lists by adding comma separated values between []
    var myLuckNumbers = [4,8,15,16,23,42];

    console.log(myLuckNumbers);

    var myList = [];//create empty list with just []

    var yourMentors = ["Kevin", "Marina", "Casey"];

    console.log(yourMentors);

    yourMentors.push("Lucas");//add an item to the end of the list

    console.log(yourMentors);

    //can get just one element from a list using its index
    //just put index in [] after the list
    //counting starts at 0 (so use 0 to get the 1st element in a list)
    console.log(yourMentors[0]);
    console.log(yourMentors[1]);
    console.log(yourMentors.length);//gives the length of a list

    //while loop runs the code multiple times until condition is false
    var x = 0;
    while(x < 5){
      console.log(x);
      x = x+1;
    }

    //this for loop runs the code muliple times until i<5 is false
    //it also includes the starting value for i
    //and how much i increases by with each loop
    //(note: i++ is the same as x=x+1)
    for(var i=0; i<5; i++){
      console.log(i);
    }

    //for loops are the best way to do something with each element in a list
    //access each element the same way as above (but use the variable i this time)
    for(var i=0; i < yourMentors.length; i++){
      console.log(yourMentors[i]);
    }


    /*
    * functions allow us to define a behavior
    * they must have a unique name
    * they can take in parameters ( which are used inside the function)
    */

    //simple function that add a "kiwi" to any list that is passed in
    //ourList will represent any list we want to add a "kiwi" to
    function addKiwi(ourList){
      ourList.push("kiwi");
    }

    var fruits = [];

    addKiwi(fruits);
    addKiwi(fruits);
    addKiwi(fruits);
    addKiwi(fruits);

    console.log(fruits);

    //this function returns a value after the function is evaluated
    //double's input is a number
    //it's output is 2x that number
    function double(num){
      return 2*num;
    }

    var doubledNum = double(3);//can save output in a variable

    console.log(doubledNum);

    console.log(double(4)); //or just use the output immediately
