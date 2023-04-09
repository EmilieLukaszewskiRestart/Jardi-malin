// Définition d'une constante pour les légumes disponibles dans la devinette
const vegetables = ['betterave', 'fenouil', 'courgette', 'topinambour', 'haricot', 'radis', 'asperge', 'concombre', 'rutabaga', 'céleri', 'aubergine', 'navet'];

// Définition d'une variable pour obtenir un légume aléatoire pour la devinette depuis la constante précédente
let randomVegetable = vegetables[Math.floor(Math.random() * vegetables.length)];

// Création d'une chaine de caractères
// Création d'une boucle pour afficher la première lettre du légume en majuscule et les autres caractères sous la forme de tirets
let hiddenName = "";
for (let i = 0; i < randomVegetable.length; i++) {
    if (i === 0) {
        hiddenName += randomVegetable[i].toUpperCase() + " ";
    } else {
        hiddenName += "_ ";
    }
}

// Sélectionner les éléments DOM
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const newQuestionButton = document.getElementById('new-question');
const questionText = document.getElementById('question');
const resultText = document.getElementById('result');

// Fonction permettant d'ajouter le mot à trous stocké dans la variable "HiddenName" à l'HTML "quel est ce légume"
function displayHiddenName() {
    const questionText = document.getElementById('question');
    questionText.innerHTML = "Quel est ce légume ? " + hiddenName;
}

// Fonction permettant d'afficher le mot à trous
displayHiddenName();

//Initialisation de la variable qui compte le nombre de bonnes réponses
let successfulanswer=0;

// Fonction permettant de mettre en relation la réponse de l'utilisateur et la variable 'randomVegetable'
function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase();
    if (userAnswer === randomVegetable) {
        resultText.innerHTML = "Bravo ! Vous avez deviné le légume.";
        successfulanswer++;
    } else {
        resultText.innerHTML = "Désolé, la réponse était " + randomVegetable + ". Pas de panique, le jeu n'est pas fini...";
    }
    // Vérification des réponses (Fin de jeu après 5 bonnes réponses sinon le jeu continue)
    if (successfulanswer === 5) {
        questionText.innerHTML = "Félicitations ! Vous avez trouvé 5 bonnes réponses. Vous êtes un expert en jardinage !";
        resultText.innerHTML = "";
        answerInput.disabled = true;
        submitButton.disabled = true;
        newQuestionButton.disabled = true;
    }
}

// Écouter l'évènement de clic sur le bouton Soumettre
submitButton.addEventListener('click', checkAnswer);

// Fonction pour générer une nouvelle devinette
function newQuestion() {
    randomVegetable = vegetables[Math.floor(Math.random() * vegetables.length)];
    hiddenName = "";
    for (let i = 0; i < randomVegetable.length; i++) {
        if (i === 0) {
            hiddenName += randomVegetable[i].toUpperCase() + " ";
        } else {
            hiddenName += "_ ";
        }
    }
    displayHiddenName();
    answerInput.value = "";
    resultText.innerHTML = "";
}

// Écouter l'évènement de clic sur le bouton Question suivante
newQuestionButton.addEventListener('click', newQuestion);

// Modification du style en js de l'outil de réponse à la devinette
answerInput.style.color = 'green' ;
answerInput.style.padding = '15px' ;
answerInput.style.fontSize = '18px' ;

// Ajout d'une classe en JS pour modifier le style de 'resultText'

resultText.classList.add("selected");


