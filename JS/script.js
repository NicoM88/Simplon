// simple ligne de commentaire
/*
  commentaire multiligne
 */

// créer une variable
prenom = "yannick";
//console.log(prenom);

/* type de variable */
// variable simple
une_string = "yannick"; // chaine de caractère / string
un_entier = 2; // entier / int
un_nombre_flottant = 2.2; // nombre à virgule  / float
un_booleen = true; // booleen true ou false / boolean

// variable complexe
un_tableau = ["chat", "chien", "poisson", "dindon"]; // tableau / array
un_objet = {type: "chat", name: "fichelecamp", age: 6}; // object / object

/* opérations */
// types simples
// + - * / %
str = "bon" + "jour"; // concaténation

// types complexes
// array
premier_element = un_tableau[0]; // recupere le premier element du tableau un_tableau : chat
deuxieme_element = un_tableau[1]; // recupere le deuxième element du tableau un_tableau : chien

// object
propriete_type = un_objet.type; // récupère la propriété "type" de l'objet un_object : chat
propriete_type = un_objet["type"]; // récupère la propriété "type" de l'objet un_object : chat
propriete_name = un_objet.name; // récupère la propriété "name" de l'objet un_object : fichelecamp
propriete_name = un_objet["name"]; // récupère la propriété "name" de l'objet un_object : fichelecamp


/* les fonctions */
// déclaration
une_fonction = function (x, y) {
}; // x et y sont les noms des paramètres passés à la fonction
function une_fonction(x, y) {
};

// retourner un résultat
// mot clef "return";
une_fonction = function (x, y) {
    return 20;
};

// exécution les parenthèses sont requises, même quand il n'y a pas de paramètres
une_fonction(1, 2);
une_fonction(1, 2);

// affectation de la valeur de retour d'une fonction dans une variable
resultat = une_fonction(1, 2);




// function du langage

// alert(message) affiche une popup qui contient le paramètre "message"
// prompt(message) affiche le paramètre "message" et demande à l'internaute de saisir une données
// console.log(variable) affiche le contenu de la variable dans la console


/* exercices */


// créer une fonction qui affiche "bonjour" dans la console
// écrire bonjour et hello dans la console

// définir la fonction
une_fonction = function () {

    console.log("bonjour");
    console.log("Hello");

}

une_fonction()// écrire dans la console


// créer un tableau d'objets

const tableau_objets = [
    {nom: "MAR", prenom: "Nicolas", âge: "38"},
    {nom: "MAR", prenom: "Chris", âge: "30"}
];

console.log(tableau_objets[0]); // écrire dans la console la première ligne du tableau
console.log(tableau_objets[1]); // écrire dans la console la deuxième ligne du tableau


// créer un objet de tableaux

const objet_tableaux = [
    papa = {nom: "MAR", prenom: "Nicolas"},
    maman = {nom: "MAR", prenom: "Chris"}
];

console.log(objet_tableaux[0]);
console.log(objet_tableaux[1]);


// créer une fonction qui calcule le produit de deux nombres

function produit(x, y) { // on definit la fonction
    return x * y;
}

const multi = produit(10, 3);// on cré une const et on l'appelle multi et donne les valeurs
multi2 = produit(20, 5);

console.log(multi);// on demande d'écrire dans la console le résultat du produit multi
console.log(multi2);// et le résultat du produit multi2



//exercice supplementaire
//céer une fonction qui calcule la somme de 2 nombres

function somme(num3,num4) {//je definis la fonction
    const résultatsomme = (num3+num4);// je donne la fomule
    return résultatsomme
}
console.log(somme(10,8))
console.log(somme(8,8))
//fin de l'exercice

//erxercice supplemenetaire
// exemple de produit logique et simple
function multiplier (num1,num2){ // je définis la fonction et la nome
    const résultatmulti = (num1*num2); // je donne la formule
    return résultatmulti;

}
console.log(multiplier(5,3))// je donne les valeurs et je demande d'écrire le résultat
                                // dans la console
console.log(multiplier(10,2))
//fin de l'exercice


// créer une fonction qui demande le nom et prénom et qui l'affiche dans la console

function demander_nom_prenom() {

    const nom_prenom = prompt("quel est votre nom et prenom ?");

    console.log(nom_prenom);
}

//demander_nom_prenom();

// autre possibilité pour demander en 2 fenêtres

function demander_nom_prenom() {

    const nom = prompt ("quel est votre nom ?");
    const prenom = prompt ("quel est votre prénom ?");

    console.log(nom+" "+prenom);
}

//demander_nom_prenom();



//exercice supplementaire
// fonction demander code postal et ville dans fenetre popup
//je nomme et définis ma fonction
function demander_code_postal_et_ville() {
    //je donne ma formule, demande fenetre popup et donne le texte
    const code_postal = prompt("quel est votre code postal ?");// premiere fenetre popup
    const ville = prompt("quelle est votre ville ?");// deuxieme fenetre popup

//je demande a écrire la réponse dans la console avec un espace entre les 2 résultats
    console.log(code_postal+"  "+ville);
}

demander_code_postal_et_ville(); //je donne l'ordre d'ouvrir les fenetres popup
//fin de l'exercice

// créer une fonction qui demande nom + prénom + age + ville et qui l'affiche dans la console

function demander_nom_prenom_age_ville() {

    const nom = prompt ("quel est votre nom ?"); //prompt permet d'ouvrir une fenetre popup
    const prenom = prompt ("quel est votre prénom ?");
    const age = prompt ("quel est votre âge ?");
    const ville = prompt ("quel est votre ville ?");

    console.log(nom+" "+prenom+" "+age+" "+ville);
}

//demander_nom_prenom_age_ville();

// créer une fonction qui calcule pythagore(longueur,largeur) ( racine carrée de la somme des carrés ) avec Math.sqrt



// avancés :
// créer une fonction qui indique si un nombre est pair
// je definis la fonction
function est_ce_que_le_nombre_est_pair(nombre_a_verifier) {
    // si le nombre est paire on retourne true
    if (nombre_a_verifier % 2 === 0){
        return true
    }
    // sinon le nombre est impaire on retourne false
    else if (nombre_a_verifier % 2 === 1){
        return false
    }
}
const saisie = prompt("entrez votre chiffre")
const resultat1 = est_ce_que_le_nombre_est_pair(saisie)

console.log(resultat1)

/* créer un nombre aléatoire entre min et max */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

trouve_chiffre = function (min, max) {
    // 1) générer un chiffre entre min et max
    const a_trouver = getRandomInt(min,max);

    // 2) demander un chiffre à l'internaute
    const saisie =  prompt ("quel est votre chiffre ?");


    // 3) indiquer si la saisie est plus grande ou plus petite
    if (saisie > a_trouver){
        console.log("trop grand");
        chercher_chiffre(a_trouver);
    }else if (saisie < a_trouver){
        console.log("trop petit");
        chercher_chiffre(a_trouver);
    }else if (saisie == a_trouver){
    // 4) si la saisie est juste, finir la partie
        console.log("trouvé :)");
}
    // aide : pour convertir une chaine de caractère en nombre
    // 			=> parseInt(string)
}
trouve_chiffre(1, 100);


// créer une fonction qui indique si une chaîne de caractère à plus de 7 caractères
//donc: je définis ma fonction :
longueur_chaine = function(chaine){
    // 1)je calcule la longueur de la chaine
  const longueur = chaine.length

    // 2)si la longueur est superieure à 7, alors j'affiche " plus de 7 caractères "
     if (longueur > 7){
         console.log("plus de 7 caractères");
     }else{
         //3)si la longueur est inférieure à 7, alors j'affiche " moins de 7 caractères "
         console.log("pas plus de 7 caractères");
     }


}
longueur_chaine("BONJOUR")

// créer une fonction récursive qui calcule factorielle x
// créer une fonction qui prends un nombre illimité de paramètres et qui calcule la somme de tous ces paramètres

