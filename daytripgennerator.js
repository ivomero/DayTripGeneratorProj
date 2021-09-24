/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
// randomly selected destination

function randomDestination(destinationArr) {
  let destination = destinationArr[Math.floor(Math.random() * destinationArr.length)];
  return destination;
}

let myDestinations = ['United States', 'Canada', 'Mexico', 'Korea', 'China'];

let myFinalDestination = randomDestination(myDestinations);
console.log(myFinalDestination);

function randomRestaurant(restaurantArr) {
  let restaurant = restaurantArr[Math.floor(Math.random() * restaurantArr.length)];
  return restaurant;
}

let myRestaurants = ['McDonald\'s', 'Taco Bell', 'Burger King', 'Wendy\'s', 'Roberto\'s'];

let myFinalRestaurant = randomRestaurant(myRestaurants);
console.log(myFinalRestaurant);

function randomModeOfTransportation(modeOfTransportationArr) {
  let modeOfTransportation = modeOfTransportationArr[Math.floor(Math.random() * modeOfTransportationArr.length)];
  return modeOfTransportation;
}

let myModesOfTransportation = ['Bus', 'Train', 'Plane'];

let myFinalModeOfTransportation = randomModeOfTransportation(myModesOfTransportation);
console.log(myFinalModeOfTransportation);

function randomEntertainment(entertainmentArr) {
  let entertainment = entertainmentArr[Math.floor(Math.random() * entertainmentArr.length)];
  return entertainment;
}

let myEntertainment = ['Coding', 'Video Games', 'Concerts', 'Bowling'];

let myFinalEntertainment = randomEntertainment(myEntertainment);
console.log(myFinalEntertainment);

function vacationChange(vacationChangeArr, allDestinations, allEntertainments, allTransportations, allRestaurants) {
  let vacationDecision;
  let newDestination;
  let newEntertainment;
  let newTransportation;
  let newRestaurant;

  while (vacationDecision !== 'yes') {
    vacationDecision = prompt('Are you happy with this vacation?');
    if (vacationDecision === 'yes') {
      return vacationChangeArr;
    }
    newDestination = randomDestination(allDestinations);
    newEntertainment = randomEntertainment(allEntertainments);
    newTransportation = randomModeOfTransportation(allTransportations);
    newRestaurant = randomRestaurant(allRestaurants);
    console.log(newDestination, newEntertainment, newTransportation, newRestaurant);
  }
  return [newDestination, newEntertainment, newTransportation, newRestaurant];
}

let myVacation = [myFinalDestination, myEntertainment, myFinalModeOfTransportation, myFinalRestaurant];
// ['Canada', "Coding", "Bus", "Taco Bell"]

let dayTripGenerator = vacationChange(myVacation, myDestinations, myEntertainment, myModesOfTransportation, myRestaurants);
console.log(dayTripGenerator);
