/*créer fonction qui calcule si un nombre est premier
( un nombre est premier si il n'est pas divisible par un nombre plus petit )*/

// je définis une fonction qui calcule, pour savoir si un nombre est premier

function nombre_premier (x){
    for (i = 2; i < x; i++){
        if (x % i == 0){
            console.log(x + " n'est pas premier");
            return false;
        }

        else {
            console.log(x + " est premier");
            return  true;
        }
    }

}
nombre_premier(5);
nombre_premier(8);
nombre_premier(10);
nombre_premier(15);
nombre_premier(18);

