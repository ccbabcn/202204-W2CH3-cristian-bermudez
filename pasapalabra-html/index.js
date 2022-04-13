const questionsA = [
  { letter: "a", answer: "abducir", status: 0, question: "CON LA 'A'. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
  { letter: "b", answer: "bingo", status: 0, question: "CON LA 'B'. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
  { letter: "c", answer: "churumbel", status: 0, question: "CON LA 'C'. Niño, crío, bebé"},
  { letter: "d", answer: "diarrea", status: 0, question: "CON LA 'D'. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
  { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA 'E'. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
  { letter: "f", answer: "facil", status: 0, question: "CON LA 'F'. Que no requiere gran esfuerzo, capacidad o dificultad"},
  { letter: "g", answer: "galaxia", status: 0, question: "CON LA 'G'. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
  { letter: "h", answer: "harakiri", status: 0, question: "CON LA 'H'. Suicidio ritual japonés por desentrañamiento"},
  { letter: "i", answer: "iglesia", status: 0, question: "CON LA 'I'. Templo cristiano"},
  { letter: "j", answer: "jabali", status: 0, question: "CON LA 'J'. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
  { letter: "k", answer: "kamikaze", status: 0, question: "CON LA 'K'. Persona que se juega la vida realizando una acción temeraria"},
  { letter: "l", answer: "licantropo", status: 0, question: "CON LA 'L'. Hombre lobo"},
  { letter: "m", answer: "misantropo", status: 0, question: "CON LA 'M'. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
  { letter: "n", answer: "necedad", status: 0, question: "CON LA 'N'. Demostración de poca inteligencia"},
  { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA 'Ñ'. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
  { letter: "o", answer: "orco", status: 0, question: "CON LA 'O'. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
  { letter: "p", answer: "protoss", status: 0, question: "CON LA 'P'. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
  { letter: "q", answer: "queso", status: 0, question: "CON LA 'Q'. Producto obtenido por la maduración de la cuajada de la leche"},
  { letter: "r", answer: "raton", status: 0, question: "CON LA 'R'. Roedor"},
  { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA 'S'. Comunidad salvadora de todo desarrollador informático"},
  { letter: "t", answer: "terminator", status: 0, question: "CON LA 'T'. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
  { letter: "u", answer: "unamuno", status: 0, question: "CON LA 'U'. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
  { letter: "v", answer: "vikingos", status: 0, question: "CON LA 'V'. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
  { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA 'W'. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
  { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA 'X'. Toxina bacteriana utilizada en cirujía estética"},
  { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA 'Y'. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
  { letter: "z", answer: "zen", status: 0, question: "CON LA 'Z'. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}
];
const questionsB = [
  { letter: "a", answer: "array", status: 0, question: "CON LA 'A'. Tipo de objeto de JavaScript que permite la construcción de listas de alto nivel."},
  { letter: "b", answer: "boolean", status: 0, question: "CON LA 'B'. Tipo de valor primitivo en JavaScript que admite los valores 'true' y 'false'."},
  { letter: "c", answer: "const", status: 0, question: "CON LA 'C'. Instrucción usada para declarar una variable el valor de la cual no puede cambiarse a través de la reasignación."},
  { letter: "d", answer: "debugger", status: 0, question: "CON LA 'D'. El mejor amigo de todo coder, sentencia que ayuda a detectar posibles errores invocando cualquier funcionalidad de depuración disponible."},
  { letter: "e", answer: "ECMA", status: 0, question: "CON LA 'E'. Acrónimo de 4 letras que identifica a una organización internacional que vela por promover y facilitar el uso correcto de los estándares."},
  { letter: "f", answer: "function", status: 0, question: "CON LA 'F'. Bloque de instrucciones que realizan una tarea específica."},
  { letter: "g", answer: "Great", status: 0, question: "CON LA 'G'. Dado let myArr = [['Good', 'Green'],['Gas', 'Great']]; El resultado de hacer console.log(myArr[1][1]);"},
  { letter: "h", answer: "html", status: 0, question: "CON LA 'H'. Siglas en ingles que hacen referencia al lenguaje de marcado para la elaboración de páginas web"},
  { letter: "i", answer: "iterar", status: 0, question: "CON LA 'I'. Acción de repetir varias veces un proceso con la intención de alcanzar una meta deseada"},
  { letter: "j", answer: "JavaScript", status: 0, question: "CON LA 'J'. El lenguaje de programación más usado por los estudiantes del pre-curso."},
  { letter: "k", answer: "keys", status: 0, question: "CON LA 'K'. Método que devuelve como string las propiedades enumerables de un objeto"},
  { letter: "l", answer: "regulares", status: 0, question: "CONTIENE LA 'L'. Se dice de las expresiones que son patrones y se utilizan para hacer coincidir combinaciones de caracteres en cadenas"},
  { letter: "m", answer: "map", status: 0, question: "CON LA 'M'. Método de arrays que crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos"},
  { letter: "n", answer: "new", status: 0, question: "CON LA 'N'. El operador que permite crear una instancia de un tipo de objeto"},
  { letter: "ñ", answer: "caña", status: 0, question: "CONTIENE LA 'Ñ'. Hace falta dar mucha para pasar el curso con éxito y aprovecharlo al máximo"},
  { letter: "o", answer: "objeto", status: 0, question: "CON LA 'O'. Entidad independiente con propiedades y tipos"},
  { letter: "p", answer: "propiedades", status: 0, question: "CON LA 'P'. Definen las características de un objeto"},
  { letter: "q", answer: "quotes", status: 0, question: "CON LA 'Q'. Simples o dobles, se usan para asignar valores del tipo texto"},
  { letter: "r", answer: "return", status: 0, question: "CON LA 'R'. La sentencia que finaliza la ejecución de la función y un valor para ser devuelto"},
  { letter: "s", answer: "switch", status: 0, question: "CON LA 'S'. Declaración  útil para evaluar el valor de una variable cuando se conocen los posibles valores que puede tener"},
  { letter: "t", answer: "throw", status: 0, question: "CON LA 'T'. Sentencia que lanza una excepcion definida por el usuario"},
  { letter: "u", answer: "undefined", status: 0, question: "CON LA 'U'. Propiedad del objeto global que se asigna por defecto cuando no se ha asignado valor, o no se ha declarado en absoluto"},
  { letter: "v", answer: "var", status: 0, question: "CON LA 'V'. Antes de Let, era la unica sentencia para declarar una variable."},
  { letter: "w", answer: "while", status: 0, question: "CON LA 'W'. Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera"},
  { letter: "x", answer: "SyntaxError", status: 0, question: "CONTIENE LA 'X'. Se genera con partes de código que no forman parte de la sintatxis del lenguaje al momento analizar el código"},
  { letter: "y", answer: "Symbol", status: 0, question: "CONTIENE LA 'Y'. Tipo de datos cuyos valores son únicos e immutables."},
  { letter: "z", answer: "z", status: 0, question: "CON LA 'Z'. U+007A en UniCode."}
];
const questionsC = [
  { letter: "a", answer: "Alternador", status: 0, question: "CON LA 'A'. Máquina eléctrica, capaz de transformar energía mecánica en energía eléctrica"},
  { letter: "b", answer: "Brendan Eich", status: 0, question: "CON LA 'B'. Programador estadounidense conocido por inventar el lenguaje de programación JavaScript"},
  { letter: "c", answer: "Criptomoneda", status: 0, question: "CON LA 'C'. Activo digital que emplea un cifrado criptográfico para garantizar su titularidad y asegurar la integridad de las transacciones"},
  { letter: "d", answer: "Dioniso", status: 0, question: "CON LA 'D'. Dios griego de la fertilidad y el vino"},
  { letter: "e", answer: "estupor", status: 0, question: "CON LA 'E'. Asombro o sorpresa exagerada que impide a una persona hablar o reaccionar."},
  { letter: "f", answer: "FRB", status: 0, question: "CON LA 'F'. De tres siglas, fenómeno astrofísico de gran energía de origen desconocido que se manifiesta como un pulso de radio fugaz que dura en promedio unos pocos milisegundos"},
  { letter: "g", answer: "Grease", status: 0, question: "CON LA 'G'. Película musical de 1978 ambientada en los años 50 dirigida por Randal Kleiser y protagonizada por John Travolta y Olivia Newton-John."},
  { letter: "h", answer: "Holodomor", status: 0, question: "CON LA 'H'. Nombre atribuido a la hambruna que devastó el territorio de la República Socialista Soviética de Ucrania, Kubán, Ucrania Amarilla y otras regiones de la URSS durante los años de 1932-1933"},
  { letter: "i", answer: "Isótopo", status: 0, question: "CON LA 'I'. Átomo de un mismo elemento, cuyo núcleo tiene una cantidad diferente de neutrones, y por lo tanto, difiere en número másico"},
  { letter: "j", answer: "Jainismo", status: 0, question: "CON LA 'J'. Doctrina originada en la India, que surge en el siglo VI a.C. por Majavira y pregona una vía salvadora filosófica no centrada en el culto de ningún dios."},
  { letter: "k", answer: "Kéfir", status: 0, question: "CON LA 'K'. Producto lácteo parecido al yogur líquido, fermentado a través de la acción de un conjunto de levaduras y bacterias."},
  { letter: "l", answer: "Lusofonía", status: 0, question: "CON LA 'L'. Se dice del conjunto de países que tienen como lengua oficial el portugués"},
  { letter: "m", answer: "mojigato", status: 0, question: "CON LA 'M'. Que se escandaliza con facilidad o muestra una moralidad exagerada o afectada."},
  { letter: "n", answer: "Neutrón", status: 0, question: "CON LA 'N'. Partícula subatómica, un nucleón, sin carga neta"},
  { letter: "ñ", answer: "Ñoqui", status: 0, question: "CON LA 'Ñ'. Tipo de pasta italiana. Se elabora con patata, harina y queso de ricota."},
  { letter: "o", answer: "Orto", status: 0, question: "CON LA 'O'. Momento en que un astro aparece por el horizonte, en el caso del Sol, conocido también como amanecer, alba o aurora"},
  { letter: "p", answer: "Pozol", status: 0, question: "CON LA 'P'. Bebida espesa, a base de cacao y maíz de origen mesoamericano que sigue siendo consumida y muy popular al sur de México"},
  { letter: "q", answer: "Queen", status: 0, question: "CON LA 'Q'.  Banda británica de rock formada en 1970 en Londres por el cantante y pianista Freddie Mercury"},
  { letter: "r", answer: "Rumba", status: 0, question: "CON LA 'R'. Género de música tradicional que se originó en Cuba durante el siglo XIX"},
  { letter: "s", answer: "Samoyedo", status: 0, question: "CON LA 'S'. Una de las razas de perro más antiguas y que toma su nombre de los pueblos homónimos del norte de Rusia."},
  { letter: "t", answer: "tamarindo", status: 0, question: "CON LA 'T'. Fruto tropical originario de la India, también es conocido como ‘Dátil de la India’"},
  { letter: "u", answer: "Umbra", status: 0, question: "CON LA 'U'.  La parte más oscura y recóndita de una sombra"},
  { letter: "v", answer: "vehemente", status: 0, question: "CON LA 'V'. Que se manifiesta con ímpetu, viveza o pasión."},
  { letter: "w", answer: "Wolverine", status: 0, question: "CON LA 'W'. Superhéroe ficticio de la franquicia X-Men"},
  { letter: "x", answer: "Xenofióforos", status: 0, question: "CON LA 'X'. Grupo de protistas unicelulares gigantes presentes en gran número en los fondos abisales a gran profundidad."},
  { letter: "y", answer: "Yoga", status: 0, question: "CON LA 'Y'. Disciplina tradicional espiritual, física y mental originada en la India"},
  { letter: "z", answer: "Zeus", status: 0, question: "CON LA 'Z'. Divinidad a la que, dentro de la mitología griega, se denomina a veces con el título de padre de los dioses y los hombres"}
];



let timer;
let time;
let currentQuestions = [];
let currentIndex = '';
let nextQuestion = '';
let msg = new SpeechSynthesisUtterance();
let userInput ='';
let corretAnswers;

const lvlOne = document.querySelector("#lvl1");
lvlOne.addEventListener("click", levelChanger);
const lvlTwo = document.querySelector("#lvl2");
lvlTwo.addEventListener("click", levelChanger);
const lvlThree = document.querySelector("#lvl3");
lvlThree.addEventListener("click", levelChanger);
const playersNames = ['John', 'Neo', 'Zara', 'Smith','Paco','Jesús','Roger','Fran','Aitor','Esvetlana','Silvia','Gebac','Cristian','Ezequiel','Eduardo','Menchu','Gerard','David','Blaskovich','Nathan','Chaikovski'];
const playersArray =[];
const top10playersArr = [];

function enableGameButtons (){
    const resertButton = document.querySelector("#end");
    resertButton.addEventListener("click", gameReset);
    const enterButton = document.querySelector("#enter");
    enterButton.addEventListener("click", getUserInput);
    const passButton = document.querySelector("#pass");
    passButton.addEventListener("click", getUserInput);
}
  
const keyboardListenners = () => {
    document.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') { 
          if (document.querySelector("#text-input").textContent.length > 0){
            userInput = document.querySelector("#text-input").textContent;
            getUserInput();
          }  
        }
        if (event.key === ' ') { 
            if (document.querySelector("#text-input").textContent.length <= 1){
              userInput = 'pasapalabra';
              getUserInput();
            }  
        }
    }); 
};
  
function inputActivation(){
  document.querySelector("#text-input").textContent = '';
  document.querySelector("#text-input").focus();
}
  
function startMyTimer () {
  timer = setInterval(myTimer, 1000);
  time = 240;
}
function myTimer() {
 time--;
 document.querySelector("#timer").textContent = time+"s";
 if (time === 0){
 clearInterval(timer);
 endGame();
 }
}
function levelChanger () {
 switch (this.id) {
   case 'lvl1':
     currentQuestions = questionsA;
     break;
   case 'lvl2':
     currentQuestions = questionsB;
     break;
   case 'lvl3':
     currentQuestions = questionsC;
     break;
 }
 keyboardListenners();
 contentChanger();
 enableGameButtons ();
 pasaPalabra();
 startMyTimer();
}

function checkIfComplete(){ 
  if (currentIndex === -1){
    clearInterval(timer);
    endGame();
  } else {
    return false;
  }
}

function gameReset () {
  window.speechSynthesis.cancel();
  location.reload();
}

function pasaPalabra (){
  currentIndex = nextIndex();
  if(checkIfComplete() === false){

    inputActivation();
    askQuestion(currentIndex);
    askVoice();
    
    
    
  }
}

function colorStatus (){
  let status = currentQuestions[currentIndex].status;
  let currentLetter = currentQuestions[currentIndex].letter;
  let letterCircle = document.querySelector(`#${currentLetter}`);
  switch (status) {
    case 0:
      letterCircle.setAttribute("class","circulitos actual");
      break;
    case 1:
      letterCircle.setAttribute("class","circulitos correct");
      break;
    case 2:
      letterCircle.setAttribute("class","circulitos wrong");
    break;
    case 3:
      letterCircle.setAttribute("class","circulitos paused");
    break;
  }
}

function answerResult(){
  let timeout;
  if(timeout){clearTimeout(timeout);}
  let status = currentQuestions[currentIndex].status;
  let currentAnswer = currentQuestions[currentIndex].answer;
  const answerDisplay = document.querySelector('#text-display');
  
  switch(status){
    case 1:
      answerDisplay.textContent = '¡Respuesta correcta!'
      timeout = setTimeout(clearDisplay, 1000);
      break;
    case 2:
      answerDisplay.textContent = `Fallo, la respuesta correcta era: ${currentAnswer}`;
      timeout = setTimeout(clearDisplay, 2000);
      break;
    case 3:
     answerDisplay.textContent = 'Pasamos palabra';
     timeout = setTimeout(clearDisplay, 1000);
     break;
  }
  
  function clearDisplay() {
    clearTimeout(timeout);
    pasaPalabra();
 }
  
}

function getUserInput (){
  if (this.id === 'pass' || userInput === 'pasapalabra') {
    userInput = 'pasapalabra';
  } else {
    userInput  = document.querySelector("#text-input").textContent;
  }
  checkAnswer();
  userInput = '';
}

function checkAnswer () {
  if (userInput.length > 0){ 
    if (userInput === 'end'){
      gameReset();
    } else if ( userInput === 'pasapalabra' ) {
      currentQuestions[currentIndex].status = 3;
    } else {
      
      let isCorret =stringComparator(userInput,currentQuestions[currentIndex].answer);
      if (isCorret === true){
        currentQuestions[currentIndex].status = 1;
      } else if ( isCorret === false) {
        currentQuestions[currentIndex].status = 2;
      }
    }
    colorStatus();
    answerResult();
    countCorrectAnswers();
  }
}

function countCorrectAnswers (){
  corretAnswers=0;
  currentQuestions.forEach(e => { if(e.status === 1) { corretAnswers++;}
    document.querySelector('#correct-answers').textContent = corretAnswers;
  });
}

function contentChanger () {
  const gameContent = document.querySelector("#game-content");
  gameContent.innerHTML = `
  <div class="text-container">
    <p>Introduce tu respuesta:</p>
    <p id="text-input" class="text-input" role="textbox" contenteditable></p>
  </div>
  <div class="controls-container">
      <menu>
          <li id="pass">Pasapalabra</li>
          <li id="enter" class ="middle-item">Responder</li>
          <li id="end">Reiniciar</li>
      </menu>
  </div>`;
}

function endGame () {
  window.speechSynthesis.cancel();
  topPlayersTable ()
  let endReason = '';
  let wrongAnswers = 0;
  let totalCorrect = document.querySelector('#correct-answers').textContent;
  let topTenString = '';

  top10playersArr.forEach(player => {topTenString += player.name+' - '+player.score+' aciertos. '});
  currentQuestions.forEach(element => { if (element.status === 2) { wrongAnswers++;}
    
  });
  if (currentIndex === -1){
    endReason = '¡Has respondido todas las preguntas!'
  }
  if (time === 0) {
    endReason = '¡Se acabó el tiempo!'
  }
  const gameContent = document.querySelector("#game-content");
  gameContent.innerHTML = `
  <div class="text-container">
    <h2>${endReason}</h2>
    <p>Has conseguido un total de ${totalCorrect} respuestas correctas y ${wrongAnswers} fallo(s)<p>
    <p class ="top-players">Los mejores 10 jugadores son: ${topTenString}</p>
  </div>
  <div class="controls-container">
      <menu>
          <li class="hidden"></li>
          <li id="end">Volver a jugar</li>
          <li class="hidden"></li>
      </menu>
  </div>`;
  const resertButton = document.querySelector("#end");
    resertButton.addEventListener("click", gameReset);
}

const playerFactory = (name, score) => {
  return {
      name: name,
      score : score
  }
}

function randomNumGenerator (maxNum){
  return Math.floor(Math.random()*maxNum)+1;
}

function playersMaker (){
  playersNames.forEach( name => playersArray.push(playerFactory(name,randomNumGenerator(27))));
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

function topPlayersTable (){
  let userScore = document.querySelector('#correct-answers').textContent;
  playersMaker();
  let playerUser = playerFactory('(Tú)', userScore);
  playersArray.push(playerUser);
  topTenPlayers()
}

function nextIndex(){
  const notAsked = (e) => e.status === 0;
  const passed = (e) => e.status === 3;
  let nextNotAsked = currentQuestions.findIndex(notAsked);
  if (nextNotAsked === -1){
    let nextPassed = currentQuestions.findIndex(passed);
    return nextPassed;
  } else {
    return nextNotAsked;
  }
}

function askQuestion (num) {
  colorStatus();
  nextQuestion = currentQuestions[num].question;
  const quenstionText = document.querySelector("#text-display");
  quenstionText.textContent = nextQuestion;
}

function askVoice(){
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    msg.text = nextQuestion;
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1.25; // From 0.1 to 10
    msg.pitch = 0.5; // From 0 to 2
    msg.lang = 'es';
    window.speechSynthesis.speak(msg);
   }
}

function stringComparator (stringA,stringB) {
  if (stringA.localeCompare(stringB, 'es', { sensitivity: 'base' })===0) {
      return true;
  } 
  return false;
}

