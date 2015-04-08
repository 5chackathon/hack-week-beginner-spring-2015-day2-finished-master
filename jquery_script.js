$(document).ready(function(){
//this line of code makes the script wait until the html document
//is loaded before running

	/*
	* The $ is the jquery selector
	* It lets you choose some html elements
	* This selector: $(documents) chooses the whole page
	* $('a') would choose all links and $('div') would select all divs.
	* We then say "." and some function name to do something to that
	* html object
	*/

	//fades out all divs after 1000ms
	//uncomment to see behavior
	//$('div').fadeOut(1000);

	//can select by class and id too (use . for class and # for id)
	//uncomment to see behavior
	//$('#left').fadeOut(1500);

	//create a function that hides 'h2' elements
	//when any 'h2' element is clicked on
	$('h2').click(function(clickEvent){
		$('h2').hide();
	});

	// The * is a wildcard
	// This says that whenever any item is clicked on
	// we can get the target of the clickEvent (i.e. the html element that was clicked on)
	// and hide that element
	$('*').click(function(clickEvent){
		$(clickEvent.target).hide();
	});

	//use .css to add css elements to some html elements
	$('h2').css("color","red");

	//use attr to add some html attributes (like class, id, data-type, etc)
	//to some html elements
	$('li').attr("class", "bold-li");

	/*
	* We can create new html elements by using $('<someHTML>') 
	* the "<>" create a new element of the given type
	* instead of selecting an existing one
	*/
	var new_li = $('<li>');//can save this element within a variable

	//add some text to the currently empty li
	//append adds a new subelement as the last subelement
	new_li.append("pizza!");

	//append the new li to every unordered list on the page
	$('ol').append(new_li);

	var foodList = ["cheese sticks", "grapes",
		 "apples", "brains", "owls"];

    //append a new li with each food from the foodList
	for(i=0; i < foodList.length; i++){
		var li = $('<li>');
		li.append(foodList[i]);
		$('ol').append(li);
	}

});