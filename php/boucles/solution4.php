<?php

/**
* Créer un script qui compte le nombre de voyelle
* dans la variable $sentence
*
* 
* indice on peut parcourir une chaine avec for
* strlen()
* in_array()
*/

$sentence = "La formation simplon c'est genial, on va devenir des pros";


$voyelle = ['a','e','i','o','u','y'];
$nbVoyelle = 0;


for($i = 0;$i<strlen($sentence);$i++) {
    if(in_array($sentence[$i],$voyelle)) {
        $nbVoyelle++;
    }}

echo "il y a $nbVoyelle dans '$sentence'";