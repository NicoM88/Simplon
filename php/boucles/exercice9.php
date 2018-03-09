<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>dessiner</title>
    <link rel="stylesheet" href="exercice9.css">

</head>


<body>
    <?php
    /*
    * Creer un script permettant de creer plusieurs rectangles de tailles differentes
    * et placer y des ronds a l'interieur de couleur differentes.
    * Creer un formulaire demandant le nombre de carre ainsi que le nombre de rond par carre.
    */
        echo"<form method='post' name=''>
    
    <p>Nombre de carre <input type='text' name='nombre de carre'></p>
    <p>Nombre de rond par carre <input type='text' name='nombre_de_rond'></p>
    <h1><input type='submit' name='Action' value='Dessiner'></input></h1>
</form>";

        /*on vérifie que le formulaire est posté */

        if (isset($_POST['Action'])) {
            if ($_POST['nombre_de_carre']==""){
                echo "vous devez specifier le nombre de carre !";
            }

            if ($_POST['nombre_de_rond']==""){
                echo "vous devez specifier le nombre de rond !";
            }


            $nombre_de_carre = $_POST['nombre_de_carre'];
            $nombre_de_rond = $_POST['nombre_de_rond'];
            $taille_carre = ['petit', 'moyen', 'grand'];
            $couleur_cercle = ['jaune', 'bleu', 'rouge'];
            $taille_cercle = ['petitcercle', 'moyencercle', 'grandcercle'];

            for ($i = 0; $i < $nombre_de_carre; $i++) {
                $aleatoire = rand(0, 2);
                $taille_carre_aleatoire = $taille_carre[$aleatoire];
                echo "<div class='$taille_carre_aleatoire carre'>";

                for ($n = 0; $n < $nombre_de_rond; $n++) {
                    $aleatoire2 = rand(0, 2);
                    $aleatoire3 = rand(0, 2);
                    $couleur_cercle_aleatoire = $couleur_cercle[$aleatoire2];
                    $taille_cercle_aleatoire = $taille_cercle[$aleatoire3];
                    echo "<div class='$couleur_cercle_aleatoire $taille_cercle_aleatoire moncercle'></div>";
                }

                echo "</div>";
            }
        }
    ?>



</body>
</html>

















