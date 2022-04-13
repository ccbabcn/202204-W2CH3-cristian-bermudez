const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function getUserName(userName) {
  const inputAlert = "Parece que no has introducido nada, vuelve a intentarlo";

  if (userName === null || userName === undefined || userName === "") {
    return inputAlert;
  }

  return userName;
}

function displayFlights() {
  const flightsDisplay = [];
  flights.forEach((flight) => {
    flightsDisplay[flight.id] = `El vuelo con origen: ${
      flight.from
    }, y destino: ${flight.to}, 
    tiene un coste de ${flight.cost}€ y ${
      flight.scale ? "realiza alguna" : "no realiza ninguna"
    } escala.`;
  });
}

function mediumPrice() {
  let sumOfPrices = 0;
  for (let i = 0; i < flights.length; i++) {
    sumOfPrices += flights[i].cost;
  }
  return sumOfPrices / flights.length;
}

function layOverCounter() {
  let counter = 0;
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      counter += 1;
    }
  }
  return counter;
}

function lastFiveFlightsDestination() {
  const lastFlightsText = "Los últimos 5 vuelos tienen como destino: ";
  const lastFlightsDestinations = [];
  const lastFlights = flights.slice(-5);
  lastFlights.forEach((lastFlight) =>
    lastFlightsDestinations.push(lastFlight.to)
  );
  return lastFlightsText + lastFlightsDestinations.join("");
}

function initialGreeting() {
  const initialMessage = `\n***************************************\n${getUserName()} welcome to Skylab Airlines! ✈️\n***************************************`;
  displayFlights();
  const mediumPriceMessage = `\n***************************************\nEl precio medio de los vuelos es ${Number(
    mediumPrice().toFixed(2)
  )}`;

  const totalLayOver = `Hay un total de ${layOverCounter()} vuelos con escala.`;
  return initialMessage + mediumPriceMessage + totalLayOver;
}

initialGreeting();
lastFiveFlightsDestination();
