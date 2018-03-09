<?php
/**
* Créer une fonction qui test qu'une valeur existe dans un tableau
* ne pas utiliser la fonction in_array
 * créer une fonction sans utiliser isset
 * le but : vérifier dans le tableau qu'une valeur existe
*/
    // je crée un tableau qui s'appelle prenom:
$prenom = ["Nico","Greg","Dorra","Manu"];

    // je déclare ma fonction:
function verify ($tableau, $valeur){

    // je déclare une variable:
    $resultat = "non";

    // je parcours mon tableau avec "foreach as" et détermine une clé qui correspond à toutes
    // les valeurs qui se trouvent dans le tableau
    foreach ($tableau as $key){
        // je donne ma condition si une de mes clés dans le tableau correspond à une
        // valeur du tableau alors le résultat est égal à oui
        if ($key == $valeur){
            $resultat = "oui";
            break;
        }
    }
    // je renvoie le résultat
return $resultat;
}
// j'appelle la fonction:
echo verify($prenom, "Manu");

?>

