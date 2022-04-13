/* Code map
/9/ Variables y constantes
/32/ Common functions
/208/ Admin functions
/278/ User functions
/328/ Run
*/

//Variables y constantes
const LOGOASCII =`
 SKyLab  __|__ Airlines
----o--o-=(▬)=-o--o----

`;
const SPACER =`***************************************\n`;
const BYEALERT = 'Adiós y gracias por tu visita';

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

//Common functions
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

function displayFlightsWithID (flightList){
    flightList.forEach(flightList => console.log(`ID: ${flightList.id} || Origen: ${flightList.from} || Destino: ${flightList.to} || Coste: ${flightList.cost}€ || ${flightList.scale? 'Con' : 'Sin'} escala.`));
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

function stringInputAndControl (stringRef){
    const INPUTALERT = `Parace que ha habido un problema al introducir tu último ${stringRef}, por favor vuelve a intentarlo`;
    let inpuRegistered = false;
    do {
        let txt = prompt(`Introduce un ${stringRef} nuevo:`,`${stringRef}`) 
        if (txt === null || txt === undefined || txt === ''){
            alert(INPUTALERT);
        } else {
            inpuRegistered = true;
            return txt;
        }
    } while( inpuRegistered === false);
}

function numberInputAndControl (numRef){
    const INPUTALERT = 'Parece que no has introducido nada, vuelve a intentarlo';
    const NUMTALERT = 'Parece que no has introducido un número, vuelve a intentarlo';
    let inpuRegistered = false;
    do {
        let num = prompt(`Introduce el ${numRef} deseado:`, 0);
        let newNum = Number(Number(num).toFixed());
        if (num === null || num === undefined || num === ''){
            alert(INPUTALERT);
        } else if (isNaN(newNum)) {
            alert(NUMTALERT);
        } else {
            inpuRegistered = true;
            return newNum;
        }
    } while (inpuRegistered === false); 
}

function hasLayOver (){
    const BADINPUTALERT = 'Este campo solo acepta \'Y\' o \'N\'';
    const NOINPUTALERT = 'Parace que no has introducido nada, vuelve a intentarlo.'
    let layOverRegistered = false;
    do{
        let inputlayOver = prompt('Este vuelo tiene escalas?','n');
        if ( inputlayOver === null || inputlayOver === undefined || inputlayOver === '') {
            alert(NOINPUTALERT);
        } else {
            let layOverUpperCase = inputlayOver.toUpperCase();
            let layOver;
            if ( Object.is(layOverUpperCase, "Y")) {
                layOverRegistered = true;
                layOver = true;
                return layOver;
            } else if ( Object.is(layOverUpperCase, "N")) {
                layOverRegistered = true;
                layOver = false;
                return layOver;
            } else { alert(BADINPUTALERT);}  
        }
    } while (layOverRegistered === false); 
}

function flightIdInputAndControl (flightList,idRef){
    const BADIDALERT = `Lo siento no puedes ${idRef} un vuelo con ese ID.`;
    let taskDone = false;
    do{
        let idMatch = false;
        let inputID = numberInputAndControl('ID');
        flightList.forEach(flightList => {
            if (flightList.id === inputID){
                idMatch = true;
            } 
        })
        switch (idRef){
            case 'añadir':
                if(idMatch === false){
                    taskDone = true;
                    return inputID;
                } else {
                    alert(BADIDALERT);
                }     
            break;
            case 'borrar':
                if(idMatch === true){
                    taskDone = true;
                    return inputID;
                } else {
                    alert(BADIDALERT);
                }   
            break;
            case 'comprar':
                if(idMatch === true){
                    taskDone = true;
                    return inputID;
                } else {
                    alert(BADIDALERT);
                }           
            break;
        }
                    
    } while( taskDone === false);
}

function getRole (name){
    const BADINPUTALERT = 'Este campo solo acepta \'USER\' o \'ADMIN\'';
    const NOINPUTALERT = 'Parace que no has introducido nada, vuelve a intentarlo.'
    let roleRegistered = false;

    do{
        let inputRole = prompt(name+', eres USER o ADMIN?');
        if ( inputRole === null || inputRole === undefined || inputRole === '') {
            alert(NOINPUTALERT);
        } else {
            const ROLE = inputRole.toUpperCase();
            if ( Object.is(ROLE, "USER") || Object.is(ROLE, "ADMIN")){
                roleRegistered = true;
                actionSwitcher (ROLE);
            } else { alert(BADINPUTALERT);}  
        }
    } while (roleRegistered === false); 
}

function actionSwitcher (role){
    switch (role) {
        case 'ADMIN':
            adminActions();
            break;
        case 'USER':
            userActions();
        break;
        default: console.log('Something went worng.');
    }
}

//Admin functions
function addFlights (){
    const CANTADDALERT = 'Lo siento, hay demasiados vuelos, para poder añadir nuevos vuelos primero hay que borrar alguno';
    const FLIGHTADDEDMESSAGE = 'Vuelo añadido correctamente. ¿Quieres añadir otro vuelo?';
    let keepAdding = false;

    do{
        if(flights.length < 15){
            let newFlight = {};
            newFlight.id = flightIdInputAndControl(flights,'añadir');
            newFlight.to = stringInputAndControl('destino');
            newFlight.from = stringInputAndControl('origen');
            newFlight.cost = numberInputAndControl('precio');
            newFlight.scale = hasLayOver();
            flights.push(newFlight);
            console.log(SPACER+'Aquí tienes todos los vuelos, incluído el que acabas de añadir')
            displayFlightsWithID (flights);
            console.log(SPACER);
            keepAdding = confirm (FLIGHTADDEDMESSAGE);
            } else {
                alert(CANTADDALERT);
                keepAdding = false;
            }
        } while (keepAdding === true);      
}

function deleteFlights (){
    const CANTDELETEALERT = 'No se pueden borrar más vuelos';
    const FLIGHTDELETEDMESSAGE = 'Vuelo borrado correctamente. ¿Quieres borrar otro vuelo?';
    let keepDeleting = false;

    do {
        let idToDelete = flightIdInputAndControl(flights,'borrar'); 
        if( flights.length === 1 ){
            keepDeleting = false;
            alert(CANTDELETEALERT);
        } else {
            let positionAux = 0;
            let position;
            flights.forEach( flights => {
                if( flights.id === idToDelete){
                    position = positionAux;
                }
                positionAux++;
            })

            flights.splice(position,1);
            console.log(SPACER+'Aquí tienes todos los vuelos restantes:')
            displayFlightsWithID (flights);
            console.log(SPACER);
            keepDeleting = confirm(FLIGHTDELETEDMESSAGE);
        }
    } while (keepDeleting === true);
    

}

function adminActions (){
    let adminFinished = false;

    do{
        let actionAdd = confirm('¿Quieres añadir un vuelo?');
        if( actionAdd === true){ addFlights();}
        let actionDelete = confirm('¿Quieres borrar algún vuelo?')
        if( actionDelete === true){ deleteFlights();}
        let actionExit = confirm('¿Quieres salir del programa?')
        if ( actionExit === true) { alert(BYEALERT); adminFinished = true;}
    } while((adminFinished === false))
}

//User functions
function userActions (){
    let userFinished = false;

    do{
        let actionSearch = confirm('¿Quieres buscar un vuelo por precio?');
        if( actionSearch === true){searchByPrice ();}
        let actionExit = confirm('¿Quieres salir del programa?')
        if ( actionExit === true) { alert(BYEALERT); userFinished = true;}
    } while(userFinished === false)
}

function searchByPrice (){
    const NOFLIGHTS = 'No se econtrarón vuelos a ese precio o más baratos';
    let keepSearching = false;

    do{
        let wantedPrice = numberInputAndControl('precio');
        let affordableFlights =[];
        flights.forEach(flights => {
            if (flights.cost <= wantedPrice) {
                affordableFlights.push(flights);
            }
        })
        if (affordableFlights.length === 0){
            alert(NOFLIGHTS);
            keepSearching = confirm('¿Quieres probar con otro precio?');
        } else {
            console.log(SPACER+'Estos son los vuelos disponibles para comprar por ese precio:')
           displayFlightsWithID(affordableFlights);
           console.log(SPACER);
           buyFlight(affordableFlights);
           keepSearching = false;
        }
    } while (keepSearching === true)
}

function buyFlight (flightList) {
    let idFlighttoBuy = flightIdInputAndControl(flightList,'comprar');
    let boughtFlight ={};
    flightList.forEach( flightList => {
        if( flightList.id === idFlighttoBuy){
            boughtFlight = flightList;
        }

    })
    console.log(`Has comprado por ${boughtFlight.cost}€ el vuelo con ID ${boughtFlight.id}, con origen ${boughtFlight.from} y destino ${boughtFlight.to}`);
    alert('Gracias por su compra, vuelva pronto.');
}

//Run
const NAME = getUserName();
console.log(`${SPACER+LOGOASCII+SPACER+NAME}, ¡Welcome to Skylab Airlines!`);
displayFlights();
console.log(`${SPACER}El precio medio de los vuelos es ${Number(mediumPrice().toFixed(2))}`);
console.log(`Hay un total de ${layOverCounter()} vuelos con escala.`)
lastFiveFlightsDestination();
getRole(NAME);