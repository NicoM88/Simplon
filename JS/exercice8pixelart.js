/**
 * Création d'une image point par point, chaque point est représenté par une DIV de 20px par 20px
 * Utiliser une boucle for
 */

// est ce que le fichier est bien chargé
console.log('fichier js bien chargé');

// code executé lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", function (event) {
    console.log('execution du code js');

    var picture = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                 , 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0
                 , 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0
                 , 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0
                 , 0, 0, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 0, 0
                 , 0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0
                 , 0, 0, 3, 3, 2, 0, 3, 3, 0, 2, 3, 3, 0, 0
                 , 0, 0, 3, 3, 2, 0, 3, 3, 0, 2, 3, 3, 0, 0
                 , 0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0
                 , 0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0, 0
                 , 0, 0, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 0, 0
                 , 0, 0, 1, 1, 1, 3, 6, 6, 3, 1, 1, 1, 0, 0
                 , 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0
                 , 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0
                 , 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0
                 , 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0
                 , 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0
                 , 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0
                 , 0, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 0
                 , 0, 0, 5, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0, 0
                 , 0, 0, 0, 0, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0
                 , 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0
                 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var colors = [
        "#ffffff", // blanc 0
        "#ffdf04", // jaune 1
        "#808080", // gris 2
        "#000000", // noir 3
        "#0026ff", // bleu 4
        "#ff99c1", // rose 5
        "#ff1f15", // rouge 6
    ];


    // créer une boucle qui va parcourir tous les éléments du tableau
    // création de la boucle avec itar  tab -> for (...)
    for (var i = 0; i < picture.length; i++) {
        // je définis ma variable que je nomme colorIndex
        var colorIndex = picture[i];
        //console.log(colorIndex); // on affiche dans la console toutes les valeurs du tableau

        // chaque élément du tableau correspond à l'indice d'une couleur

        // il faut récupérer la couleur correspondante
        const color = colors[colorIndex];
        console.log(color); //on affiche pour verifier que la valeur correspond au code couleur

        //céer une div
        var newDiv = document.createElement("div");

        //  dont la couleur de fond sera cette couleur
        // on appelle la div et on lui dit quel style on veut
        newDiv.style.backgroundColor = color;

        // et ajouter cette div à #picture1
        const picture1 = document.getElementById("picture1");
        picture1.appendChild(newDiv);
    }


});