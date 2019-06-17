var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]; //
function dwarfRollCall(dwarves) {
 var newArray =[];
  for (var i = dwarves.length /2; i < dwarves.length ; i++) {
     newArray.push(`${i+1}. ${dwarves[i]} `);
      //newArray.push( i+1 + ". " + dwarves[i] )
  }
  return newArray.join("")
}
/* __________________________________________________________________________*/

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]; //given array
function summonCaptainPlanet(planeteerCalls){   //
  var newArray =[];
  for(var i = 0; i < planeteerCalls.length; i++ ) {
    newArray.push(planeteerCalls[i].toUpperCase() + "!");
}
  return newArray
  }
  /* __________________________________________________________________________*/
  var shortWords = ["wind", "fire"];
  var assortedWords = ["earth", "wind", "heart", "fire"];
  function longPlaneteerCalls(words) {
    for(var i = 0;i < words.length;i++) { //i = i + 1
      if (words[i].length > 4) {
        return true;
      }
    }
    return false //If the function reaches here that means the loop ended and we can simply return false
  }
/* __________________________________________________________________________*/

var snacks = ["crackers", "gouda", "thyme"];
var soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"];
var ingredients = ["garlic", "rosemary", "bread"];
function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] ===  'gouda'|| foods[i]===  'cheddar' || foods[i]==='camembert' || food[i] ==='swis') {
      return foods[i];
    }
  }
  return 'no cheese!'
}








var words = ['banana', 'cherry', 'milk'];
function wordsThatStartWithB(words){
  var newArray = [];
  for(var i = 0; i < words.length; i++) {
    if(words[i].startsWith('b')) {
      newArray.push(words[i])
    }
  }
  return newArray
}

"eric".startWith("b") // false
"brian".startWith("b") // true

wordsThatStartWithB(['banana', 'cherry', 'milk']) // ['banana']
wordsThatStartWithB(['brian', 'bob', 'james']) // ['brian', 'bob']
wordsThatStartWithB(['charlie', 'prince', 'eric']) // []
