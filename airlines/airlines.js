function getUserName(){
    const INPUTALERT = 'Parece que no has introducido nada, vuelve a intentarlo';
    let nameRegistered = false;
    do {
        const USERNAME = prompt('Please enter your name', 'User');
        if( USERNAME === null || USERNAME === undefined || USERNAME == ''){
            alert(INPUTALERT);
        } else{
            nameRegistered = true;
            return USERNAME;
        }
    } while (nameRegistered === false);
}

function displayFlights (){
    console.log('Aquí tienes información de todos los vuelos disponibles:');
    flights.forEach(flights => console.log(`
    El vuelo con origen: ${flights.from}, y destino: ${flights.to}, 
    tiene un coste de ${flights.cost}€ y ${flights.scale? 'realiza alguna' : 'no realiza ninguna'} escala.`));
}

function mediumPrice (){
    let sumOfPrices = 0;
    for (i = 0; i < flights.length; i++){
         sumOfPrices += flights[i].cost;
    }
    return sumOfPrices/flights.length;
}

function layOverCounter(){
    let counter = 0;
    for (i = 0; i < flights.length; i++){
        flights[i].scale === true? counter += 1:counter;
    }
    return counter;
}

function lastFiveFlightsDestination(){
    console.log('Los últimos 5 vuelos tienen como destino:');
    let lastFlights = flights.slice(-5);
    lastFlights.forEach( lastFlights => console.log(lastFlights.to));
}

let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

console.log(`\n***************************************\n${getUserName()} welcome to Skylab Airlines! ✈️\n***************************************`)
displayFlights();
console.log(`\n***************************************\nEl precio medio de los vuelos es ${Number(mediumPrice().toFixed(2))}`);
console.log(`Hay un total de ${layOverCounter()} vuelos con escala.`)
lastFiveFlightsDestination();