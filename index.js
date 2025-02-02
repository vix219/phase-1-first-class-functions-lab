// Code your solution in this file!

const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


function returnFirstTwoDrivers() {
  return arrayOfDrivers.slice(0, 2);
}


function returnLastTwoDrivers() {
  return arrayOfDrivers.slice(2);
}
console.log(returnFirstTwoDrivers()); 
console.log(returnLastTwoDrivers());  

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]
selectingDrivers[0, 1];





function createFareMultiplier() {
    return function(number) {
      return number * 5;
    };
  }


  function fareDoubler() {
    let number = 10
      return number * 2;
    };

 
    function fareTripler() {
        let number = 12
        return number * 3;
      };

     function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(); 
}

    