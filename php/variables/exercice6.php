<?php
    $a = 1;
    $b = 2;
    $c = $a + $b;
    $d = $a * $b;
    $e = $a / $b;

    echo "Le resultat de l'addition est : ".$c."<br>";
    echo "Le resultat de la multiplication est : ".$d."<br>";
    echo "Le resultat de la division est : ".$e."<br>";

    $a2 = "Bonjour";
    $b2 = "Nico";
    echo $a2." ".$b2."<br>";


/**
*
* Créer un tableau
*/

    $t = ["Nico","Paul","Dorra"];
    echo $t[1]."<br>";

    $t2 = ["prenom"=>"Nico","nom"=>"Blaudez"];
    echo $t2["prenom"]." ".$t2["nom"]."<br>";


/**
*
* Créer une constante
*/

    const CONSTANTE = "Test :)";
    echo "ceci est un test : ".CONSTANTE;


?>