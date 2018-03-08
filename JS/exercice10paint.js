/**
 créer un paint qui permet en utilisant uniquement les listes déroulantes et des classes,
 - Au clic de la souris, créer :
 => une forme ( rond, carré, losange )
 => de la couleur sélectionnée ( bleu, jaune , rouge, vert ),
 => et du rayon sélectionné ( 10, 50, 100, 200 ) .
 - Bonus:
 1) rajouter des triangles,
 2) faire en sorte de voir la forme se déplacer sous la souris avant de cliquer,
 3) faire en sorte d'avoir plus de choix de couleur et de ne plus utiliser de classe .
 4) correction des coordonnées pour que le milieu de la forme soit à la position du clic
 **/
console.log("script ok");

document.addEventListener("DOMContentLoaded", function (event) {
    console.log('execution du code js');
// récupération des éléments
    board = document.getElementById("board");
    select_shape = document.getElementById("select_shape");
    select_color = document.getElementById("select_color");
    select_size = document.getElementById("select_size");

// fonction de création d'un élément
    const shape_creation = function (event) {

        // récupération des valeurs des selects // var ou const
        const shape = select_shape.value;
        //console.log(shape);
        const color = select_color.value;
        //console.log(color);
        const size = select_size.value;
        //console.log(size);
        console.log(shape, color, size, "execution valeurs selects ok");
        //console.log("execution des valeurs selects ok ;)");


        // création d'un nouvel élément
        const newDiv = document.createElement("div");

        // ajout des classes correspondantes
        newDiv.classList.add(shape);

        if (shape === 'triangle') {
            console.log('toto');
            newDiv.style.backgroundColor = 'transparent';
            //newDiv.style.borderWidth = '0 5px 10px 5px';
            console.log('0 ' + (size/2) + 'px ' + (size) + 'px ' + (size/2) + 'px');
            newDiv.style.borderWidth = '0 '  + (size/2) + 'px ' + (size) + 'px ' + (size/2) + 'px';
            newDiv.style.borderColor = 'transparent transparent ' + color + ' tranparent';
        } else {
            newDiv.style.width = size + 'px';
            newDiv.style.height = size + 'px';
            newDiv.style.backgroundColor = color;
        }


        // récupération de la position du clic
        // function souris(event) {
        //     const x = event.clientX;
        //     const y = event.clientY;
        //     document.getElementById('coordonnesxy').value = x + ', ' + y;
        // }
        // console.log(event);
        //const position_x = event.offsetX;
        // const position_y = event.offsetY;
        const size_from_class = parseInt(size.replace('w', ''));
        const position_x = event.offsetX - size_from_class / 2;
        const position_y = event.offsetY - size_from_class / 2;
        // ajout de la position de l'élément
        newDiv.style.top = position_y + 'px';
        newDiv.style.left = position_x + 'px';
        console.log(position_x + ' X ' + 'px', position_y + ' Y ' + 'px');


        // ajout du nouvel élément dans le tableau
        board.appendChild(newDiv);
    }

// ajout du listener
    board.addEventListener("click", shape_creation);

    //1) rajouter les triangles
    // voir ajout css .triangle / triangles couleurs / triangles tailles
    // et ajouter la div <triangle> dans html

    //2) faire en sorte de voir la forme se déplacer sous la souris avant de cliquer,

    //3) faire en sorte d'avoir plus de choix de couleur et de ne plus utiliser de classe
    // voir html input èà la place du select color
    // et ajouter newDiv.style.backgroundColor = color; dans ajout des class correspondantes

});