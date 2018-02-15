/*sondage ( demander un chiffre et afficher la moyenne de tous
les chiffres demandés précédemment )
 */

// 1- demander nombre de notes ? prompt ("")
// 2- demander X notes
// 3- afficher la moyenne


demander_nombre_de_notes = prompt("nombre de notes ?") // demander nombre de notes
    console.log(demander_nombre_de_notes) // afficher dans la console

var tableau_de_notes = [];


for (i=0; i<demander_nombre_de_notes; i++){ // ma formule de boucle

    demander_saisir_les_notes = prompt("saisir les notes" + (i+1)) // demander saisir les notes
    console.log(demander_saisir_les_notes)
    tableau_de_notes.push(demander_saisir_les_notes)/* les notes sont sotckées dans
                                                        mon tableau de notes*/
    console.log(tableau_de_notes.join(","));
}

var somme=0;
for (t=0; t<tableau_de_notes.length; t++){
    somme = somme + (t)
    console.log(somme)
}


