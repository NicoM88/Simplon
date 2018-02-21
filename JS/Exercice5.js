
/*gestion panier
( ajouter un produit, supprimer un produit, prix du panier, nombre d'élément du panier )
*/


const productList = [
    {code: "livre", name: "fondation foudroyée", price: 10, total: 0},
    {code: 'console', name: 'PS3', price: 200, total: 0 },
    {code: 'fleur', name: 'Orchidée', price: 20, total: 0 }
];

/*
* fonction pour ajouter un produit
*/
function addProduct(code) {

    for (let i = 0; i < productList.length; i++) {

        // je récupère le produit  i
        const product = productList[i];

        // est ce que le produit a le code demandé
        if (product.code === code) {
            if (product.total < 5){ // condition pas plus de 5 produits
            product.total++;
        }
        }

    }
    console.clear();
    console.table(productList);

    displayCaddie();
}

/**
 * fonction pour supprimer un produit
 */
function deleteProduct(code) {

    for (let i =  0; i < productList.length; i++) {

        // chercher l'objet correspondant à ce code
        const product = productList[i];

        // modifier la propriété total de cet objet
        if (product.code === code) {
            if (product.total > 0) {
                product.total--;
            }

        }
        // pour représenter le fait d'avoir un élément de moins sélectionné
    }
    console.clear();
    console.table(productList);
    displayCaddie();
}

/**
 * fonction pour afficher la liste des produits
 */
function displayCaddie() {
    let list = "";


        // je parcours tous les elements du panier
        for (let i =  0; i < productList.length; i++) {
            // je récupère le produit  i
            const product = productList[i];

            // si l'element courant a été ajouté au panier
            // alors on ajoute " X code," à la variable list

            if ( product.total > 0){
            list = list + product.total; // ou  list + = product.total + " " + product.name + ", ";
            list = list + " ";
            list = list + product.name;
            list = list + "," + "  ";
            }
        }

            document.getElementById("resultat").innerHTML = list;
}