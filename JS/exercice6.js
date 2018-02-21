//


recettes = [
    {name:'ratatouille', ingredients: [
            {name: "tomate", count: 4},
            {name: "poivron", count: 4},
            {name: "aubergine", count: 4},
            {name: "oignon", count: 4},
            {name: "courgette", count: 4}
        ]},
    {name:'velouté de tomate', ingredients: [
            {name: "tomate", count: 10},
            {name: "poivron", count: 0},
            {name: "aubergine", count: 0},
            {name: "oignon", count: 2},
            {name: "courgette", count: 0}
        ]},
    {name:'légume farci', ingredients: [
            {name: "tomate", count: 6},
            {name: "poivron", count: 6},
            {name: "aubergine", count: 0},
            {name: "oignon", count: 0},
            {name: "courgette", count: 6}
        ]}
];

selected=[];

// ajouter la liste des ingredients d'une recette à la liste des recettes selectionnées @param recipe


function add( recipe ){
     for (var i = 0; i < recettes.length; i++){
         const recette = recettes [i];
         //est ce que c'est la bonne recette ?
         if (recette.name === recipe){
             // ajout des ingredients à la liste des recettes sélectionnées
             const ingredients = recette.ingredients;
             selected.push(ingredients);
         }
     }


     console.clear();
     console.table(selected);

    display();

}


// afficher la liste des ingrédients des recettes sélectionnées

function display(){

    list="";
    document.getElementById("resultat").innerHTML = list;
}
