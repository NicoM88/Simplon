/**
 * Création d'une image point par point, chaque point est représenté par une DIV
 * Utiliser une double boucle for ( boucles imbriquées )
 * il faut placer les divs en positionnement absolu
 */
// est ce que le fichier est bien chargé
console.log('fichier js bien chargé');

// code executé lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", function (event) {
        console.log('execution du code js');

    var picture = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0],
        [0, 0, 3, 3, 2, 0, 3, 3, 0, 2, 3, 3, 0, 0],
        [0, 0, 3, 3, 2, 0, 3, 3, 0, 2, 3, 3, 0, 0],
        [0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0],
        [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0],
        [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0],
        [0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0],
        [0, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0],
        [0, 0, 0, 0, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    var colors = [
        "#ffffff", // blanc 0
        "#ffdf04", // jaune 1
        "#808080", // gris 2
        "#000000", // noir 3
        "#0026ff", // bleu 4
    ];

    var colors2 = [
        "#ffffff", // blanc 0
        "#ffdf04", // jaune 1
        "#808080", // gris 2
        "#000000", // noir 3
        "#ff272a", // rouge 4
    ];

    // créer une boucle qui va parcourir toutes les lignes du tableau


    const drawMinion = function (new_color) {

        for (var i = 0; i < picture.length; i++) {
            var line = picture[i];
            //console.table(line);
            // créer une boucle à l'intérieur de cette boucle pour
            // parcourir chaque élément de la ligne du tableau
            for (var j = 0; j < line.length; j++) {
                var colorIndex = line[j];

                //console.log(i, j, colorIndex);  // i correspond aux lignes
                                                //  j correspond aux colones
                                                // colorIndex correspond aux couleurs du pixel dans la ligne te la colone demandée


                // chaque élément du tableau correspond à l'indice d'une couleur
                // il faut récupérer la couleur correspondante
                const color = new_color[colorIndex];
                //console.log(color);


                // créer une div dont la couleur de fond sera cette couleur
                var newDiv1 = document.createElement("div");
                newDiv1.style.backgroundColor = color;

                // spécifier la position de cette div avec "top" et "left" grâce à div.style
                newDiv1.style.top = (i*20)+'px';
                //console.log(i*20+'px');
                newDiv1.style.left = (j*20)+'px';
                // et ajouter cette div à #picture1
                const picture1 = document.getElementById("picture1");
                picture1.appendChild(newDiv1);
            }

        }
    }

    drawMinion(colors2);

    document.addEventListener('keydown', function () {
        drawMinion(colors);
    });

    document.addEventListener('keyup', function () {
        drawMinion(colors2);
    });

});