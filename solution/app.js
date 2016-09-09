// 1. Find the character that appears the most time in a given string (ie "tomorrow" should return 'o')

function findMostRepeated(str){
  var mostAppearances = str[0];
  var numAppearances = 1;

  for (var i = 0; i < str.length; i++) {
    var currentChar = str[i];
    var currentCount = 0;
    for(var j = 0; j < str.length; j++){
      if(str[j] == currentChar){
          currentCount++;
      };
    };
    if(currentCount > numAppearances){
        numAppearances = currentCount;
        mostAppearances = currentChar;
    };
  };
  return mostAppearances;
};

// 2. An array is supposed to contain the numbers 1-100, but one number is missing. Find and return that number.

function compareNumbers(a, b){
  return a - b;
};

function missingFromOneHundred(array){
  array.sort(compareNumbers);
  var count = 1;
  for(var i = 0; i < array.length; i++){
      if(count != array[i]){
          return count;
      };
      count++;
  };
  return "No numbers missing";
};

//3. Write a method that finds the second highest number in an array of integers WITHOUT using a sort method.

function secondHighest(array){
    var highest = 0;
    var second = 0;

    for(var i = 0; i < array.length; i++){
        if(array[i] > highest){
            second = highest;
            highest = array[i];
        }else if(array[i] > second){
            second = array[i];
        }
    }
    return second;
}

// 4. Given a non-empty string and an integer n, return the string made starting with char 0, and then every nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

function everyNth(str, n) {
  var result = "";
  // Look at every nth char
  for (var i = 0; i < str.length; i += n) {
    result += str[i];
  };
  return result;
}

// 5. Given an array of integers, return the string "even" if there are more even elements in the array, or "odd" if there are more odd elements in the array. If there are the same ammount of each, return "neither"

function evenOrOdd(array){
  var evenCount = 0;
  var oddCount = 0;

  for (var i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0){
        evenCount++;
    }else{
        oddCount++;
    };
  };

  if(evenCount > oddCount)
      return "even";
  else if(oddCount > evenCount)
      return "odd";
  else
      return "neither";
};
