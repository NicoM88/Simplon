
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

        // est ce que le produit à le code demandé
        if (product.code === code) {
            product.total++;
        }

    }

    console.log(productList);


    displayCaddie();
}

/**
 * fonction pour supprimer un produit
 */
function deleteProduct(code) {

    // chercher l'objet correspondant à ce code

    // modifier la propriété nombre de cet objet
    // pour représenter le fait d'avoir un élément de moins sélectionné

    displayCaddie();
}

/**
 * fonction pour afficher la liste des produits
 */
function displayCaddie() {
    let list = "";

    document.getElementById("resultat").innerHTML = list;
}