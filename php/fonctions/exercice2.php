<?php

/**
* Créer une fonction qui compte le nombre de caractere dans une chaine
* 
* ne pas utiliser la fonction strlen
*/


// je crée  ma fonction countstring:

function countString ($chaine){
    $count = true;
    //je déclare ma variable i:
    $i = 0;

 // je définis ma boucle ( tant que )
    while ($count == true ){
        // je définis ma condition
        if (!isset($chaine[$i])){
            $count = false;
        }
        else{
            $i++;
        }
    

    }
    return $i;
}
    // on teste l'exercice avec une chaine de caracteres :
    // on ecrit
echo countString( "Bonjour Simplon");



?>