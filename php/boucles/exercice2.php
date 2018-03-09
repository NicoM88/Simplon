<?php

/**
 * Afficher le nombre pair de 1 à 20 avec :
 * for
 * do
 * while
 */

for ($i = 1; $i <= 20; $i++) {
    if ($i % 2 == 0) {
        echo $i;
    }

}


$a = 0;
echo "bonjour";
while ($a <= 20) {
    if ($a % 2 == 0) {
        echo $a;
    }
    $a++; //  $a = $a + 1 permet de monter de 1 dans la boucle
}
echo "fin";

?>