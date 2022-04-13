/*
El bingo de 90 bolas es el que se juega en más partes del mundo.
En esta versión el bombo tiene 90 bolas numeradas del 1 al 90.
Los cartones tienen 15 números que debes marcar.
Estos números se encuentran distribuidos en 3 filas diferentes, con 9 columnas cada una, habiendo un total de 5 números por fila.
Los números están mezclados con espacios en blanco.
Aquí se pueden ganar premios de 3 formas diferentes, la primera de ellas es cuando consigues marcar todos los números que existen en cualquiera de las 3 líneas de un cartón. 
Este premio es llamado "línea". En algunos sitios se premia también al jugador que consiga marcar dos líneas de su cartón, pero no se hace en todos los lugares. 
Por último el premio más importante es cuando se canta bingo, que consiste en haber tachado todos los números de un cartón.
*/ 

// VARIABLES Y CONSTANTES
let currentNumber = 0;
let isALine = false;
let names =[];
const NO_INPUT_ALERT = 'Por favor introduce algo para poder continuar';
const BAD_TYPE_INPUT_ALERT = 'Este campo no acepta datos del tipo ';
const BAD_STRING_INPUT_ALERT = 'Este campo solo acepta el texto ';
const GAME_RULES = `\n Estas son las reglas del juego:\n
- Primero se mostrarán cartones aletorios hasta que te guste uno.
- Antes de empezar cada turno se te preguntará si quires continuar.
- De seguir jugando, se te mostrará el siguiente número cantado.
- De tenerlo en tu cartón, este número se marcará como una "X".
- Te avisaremos cuando consigas completar tu primera línea.
- Ganarás cuando todos los números de tu cartón estén marcados como "X".
- La puntucación máxima es de 100 y se obtiene si acabas en 15 turnos.`
const biggestNum = 20; // (mínimo 15) 20 para comprobaciones pero debería ser 90 para un bingo realista
const usedNumbersArray = [];
const bingoArray = [[],[],[]];
const currentBingoCardArr =[[],[],[],[],[],[],[],];
const playersArray =[];
const top10playersArr = [];

//FABRICA DE OBJETO
const playerFactory = (name, score) => {
    return {
        name: name,
        score : score
    }
}

//FUNCCIONES
function totalPoints (turns){
    return (15/turns)*100;
}

function inputNotEmptyCheck (input) {
    if (!input){
        alert(NO_INPUT_ALERT);
    } else return input;
}

function inputNotNumberCheck (input) {
    if (input*0 === 0){
        alert(BAD_TYPE_INPUT_ALERT + typeof Number(input));
    } else return input;
}

function inputYesCheck (input) {
    if (input.toUpperCase() === 'YES') {
        return true;
    } else {
        alert(BAD_STRING_INPUT_ALERT+'"YES"');
        return false;
    }
}

function getYes(){
    const saidYes = prompt ('Si te gusta este cartón, y quieres empezar a jugar escribe: "Yes"')
    if (!saidYes || saidYes ==='' || saidYes === undefined) {
        
        return false;
    } else {
        return (inputYesCheck(saidYes));
    } 
    
}

function getName() {
    const playerName = prompt('♠ ♥ B i n g o ♦ ♣\n¡Por favor introduce tu nombre para jugar!')
    if( !inputNotEmptyCheck(playerName) || !inputNotNumberCheck(playerName) ){
        return getName();
    }
    return playerName;
}

function newNumber (){
    currentNumber = randomNumGenerator(biggestNum);
    if ( usedNumbersArray.length === biggestNum) {
        alert ('Ya no quedan nuevos número para jugar.');
    } else if ( !usedNumbersArray.includes(currentNumber)) {
        alert (`Ahora juagmos con el numero ${currentNumber}`);
        usedNumbersArray.push(currentNumber);  
        return currentNumber;
    } else {
        return newNumber();
    }
}

function randomNumGenerator (maxNum){
    return Math.floor(Math.random()*maxNum)+1;
}

function bingoFiller (){
    for (let i = 0; i < 3; i++) {bingoArray[i].splice(0);} //reset of bingo array
    for (let i = 0; i < 3; i++) {
        for(let j = 0; j<5;){
            currentNumber = randomNumGenerator(biggestNum);
            if(!bingoArray[0].includes(currentNumber) && !bingoArray[1].includes(currentNumber) && !bingoArray[2].includes(currentNumber)){
                bingoArray[i][j]= currentNumber;
                j++;
            } 
        }
    }
}

function numberMatch (num){
    for(let k = 3; k < 6; k++){
        for (let l = 0; l < 9; l++){
            if (currentBingoCardArr[k][l] === num){
                currentBingoCardArr[k][l] = "X";
            }
        }
    }
    for (let i = 0; i < bingoArray.length; i++){
        for (let j = 0; j < bingoArray[i].length; j++){
            if (bingoArray[i][j] === num) {
                bingoArray[i][j] = "X";
                return true;
            }
        }
    }
    
}

function isLine () {
    const linechecker = (a) => a === "X";
    for ( let i = 0; i < 3; i++){
        if(isALine = bingoArray[i].every(linechecker)){
            return isALine;
        }
    }
    
}

function allIsX () {
    const linechecker = (a) => a === "X";
    if (bingoArray[0].every(linechecker) && bingoArray[1].every(linechecker) && bingoArray[2].every(linechecker)) {
        return true;
    }
}

function bingoCardGenerator(){ // El cartón del bingo tendra una parte fija y una al azar con los números

    let header ='▒▒\t▒▒\t▒▒\t▒▒\t▒▒\t▒▒\t▒▒\t▒▒\t▒▒\t';
    let title =`▀▄\t♣\tB\tI\tN\tG\tO\t♠\t▄▀\t`;
    let topline =`▀▀\t▀▀\t▀▀\t▀▀\t▀▀\t▀▀\t▀▀\t▀▀\t▀▀\t`;
    let bottomLine =`▄▄\t▄▄\t▄▄\t▄▄\t▄▄\t▄▄\t▄▄\t▄▄\t▄▄\t`;
    let block =`██`;

    for (let i = 3; i < 6; i++) { //reinicio del carton
        currentBingoCardArr[i].splice(0);
    }

    currentBingoCardArr[0] = header;
    currentBingoCardArr[1] = title;
    currentBingoCardArr[2] = topline;
    currentBingoCardArr[6] = bottomLine;

    for (let i = 3; i < 6 ; i++){ //Cada línea del bingo tiene 5 números y 4 bloques ordenados al azar
        let numcounter = 0;
        let blockcounter = 0;
        let randNumber = randomNumGenerator (2);
        for (let j = 0; j < 9;){
            switch (randNumber){
                case 1:
                    if (numcounter < 5){
                        currentBingoCardArr[i][j]=(bingoArray[i-3][numcounter]);
                        randNumber = 2;
                        numcounter++;
                        j++;
                    }
                break;
                case 2:
                    if (blockcounter < 4){
                        currentBingoCardArr[i][j]=(block);
                        randNumber = 1;
                        blockcounter++;
                        j++;
                    } else if (blockcounter === 4 && numcounter < 5){
                        randNumber = 1;
                    }
                break;
            }
        }
       
    }
}

function bingoCardDrawer () {
    let bingoCardString='';
    for (let i = 3; i < 6; i++){
        for (j = 0; j < currentBingoCardArr[i].length; j++){
            bingoCardString = bingoCardString + currentBingoCardArr[i][j] + '\t';
        } 
        bingoCardString = bingoCardString + '\n';
    }
    console.log('\n'+currentBingoCardArr[0]+'\n'+
    currentBingoCardArr[1]+'\n'+
    currentBingoCardArr[2]+'\n'+
    bingoCardString+
    currentBingoCardArr[6]);
}

function arrayReset (arr){
    arr.splice(0);
}

function getRoundNum (num){
    return Number(Math.round(num));
}

function aproveBingoCard () {
    let aprrovedBingoCard = false;
    do {
        bingoFiller();
        bingoCardGenerator();
        bingoCardDrawer();
        aprrovedBingoCard = getYes();
    } while ( aprrovedBingoCard === false);
}

function setPlayersNames (){
    names = [
        'John',
        'Neo',
        'Zara',
        'Smith',
        'Paco',
        'Jesús',
        'Roger',
        'Fran',
        'Aitor',
        'Esvetlana',
        'Silvia',
        'Gebac',
        'Cristian',
        'Ezequiel',
        'Eduardo',
        'Menchu',
        'Gerard',
        'David',
        'Blaskovich',
        'Nathan',
        'Chaikovski',
    ];
}

function playersMaker (){
    for (let i = 0; i < names.length; i++) {
        names[i] = playerFactory(names[i],randomNumGenerator(100));
        playersArray.push(names[i]);
    }
}

function topTenPlayers () {
    playersArray.sort(function (a, b) {
        if (a.score > b.score) {
          return -1;
        }
        if (a.score < b.score) {
          return 1;
        }
        return 0;
      });
    for (let i = 0; i < 10; i++){
        top10playersArr.push(playersArray[i]); 
    }
}

function topPlayersTable (uName, uTurns){
        let userScore = totalPoints(uTurns);
        playersMaker();
        let playerUser = playerFactory('(Tú) '+uName, getRoundNum(userScore));
        playersArray.push(playerUser);
        topTenPlayers()
        alert(`Has completado el bingo en ${uTurns} turnos y tu puntuación es ${getRoundNum(userScore)} puntos`);
        console.log('Aquí tienes los top 10 jugadores:');
        console.table(top10playersArr);
}

function bingoGameMaster (uName) {
    let keepPlaying = true;
    let turnCounter = 0;
    let lineCounter = 0;
    do {
        currentNumber = newNumber();
        if (numberMatch(currentNumber)){
            if (allIsX()){
                bingoCardDrawer();
                alert ('¡¡¡BINGO!!!')
                keepPlaying = false;
                turnCounter++;
                topPlayersTable(uName, turnCounter);
            } else if(isLine() && lineCounter === 0) {
                bingoCardDrawer();
                alert ('LÍNEA!');
                lineCounter++;
                turnCounter++;
                keepPlaying = confirm('¡Estás en racha! ¿Seguimos?');
            }else {
                bingoCardDrawer();
                alert ('¡Genial, ténias ese número!')
                turnCounter++;
                keepPlaying = confirm('Quieres seguir jugando?');
            }
        } else {
            bingoCardDrawer();
            turnCounter++;
            keepPlaying = confirm('Vaya, no tenías el número. ¿Quieres seguir jugando?');
        }
    
    } while (keepPlaying === true);
    
}

function bingo (){
    const USER_NAME = getName();
    alert(`Hola ${USER_NAME}! ${GAME_RULES}`);
    let playAgain = false;
    do {
        aproveBingoCard();
        setPlayersNames();
        bingoGameMaster(USER_NAME);
        playAgain = confirm('Quieres empezar un nuevo Bingo?');
        arrayReset(usedNumbersArray);
        arrayReset(top10playersArr);
        arrayReset(playersArray);
        arrayReset(names);
    } while(playAgain === true)
    if (playAgain === false) {
        alert ('Adiós y gracias por jugar! :)');
    }
}

//JUGAMOS
bingo();