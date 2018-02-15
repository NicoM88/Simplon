/*  créer une boucle qui va itérer 20 fois. A chaque itération, il faut afficher
dans la console : "le nombre X est pair", ou "le nombre X est impair"
 */
// source Front Rocks 08 Java script structures :


for(i=0; i<20; i++){ // ma formule de boucle

    if (i % 2 === 0){ // ma condition paire
        console.log("paire");
    }
    else if (i % 2 === 1){ // ma condition impaire
        console.log("impaire");
    }
}

