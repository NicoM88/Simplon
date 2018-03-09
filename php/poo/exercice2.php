<?php
 session_start();
?>
<!--/**-->
<!-- * Jeux de sorciers et guerriers-->
<!-- * -->
<!-- * Le but du jeu est de créer des "personnages" qui vont se battre-->
<!-- * Ces "personnages" sont des "guerriers" et des "sorciers"-->
<!-- * -->
<!-- * Le "sorcier" peut "ensorceller" un autre "personnage"-->
<!-- * Lors d'une attaque de sorcier l'autre "personnage" perd 10 points de vie-->
<!-- * -->
<!-- * Le "guerrier" peut "attaquer" un autre "personnage"-->
<!-- * Lors d'une attaque de guerrier l'autre "personnage" perd 15 points de vie-->
<!-- * -->
<!-- * -->
<!-- * Faire un formulaire qui demande le nombre de sorciers et le nombre de guerriers-->
<!-- * Demander le nombre de point de vie et le  nom de chaque personnage-->
<!-- * -->
<!-- * -->
<!-- * Créer autant de personnage qu'indiqué dans le formulaire, parametrer leurs noms et point de vie-->
<!-- * et faite les se battre.-->
<!-- * -->
<!-- * Le jeu s'arrete quand il ne reste plus qu'un personnage.-->
<!-- * -->
<!-- * */-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jeu Guerriers Sorciers</title>
    <link rel="stylesheet" href="exercice2poo.css">

</head>
<body>

<?php
// je crée le formulaire:

    echo"<form method='post' name='jeu'  action=''>
        Nombre de Sorciers<input type='number'  name='Nombre_de_Sorciers'>
        Nombre de Guerriers<input type='number' name='Nombre_de_Guerriers'>
        <h1><input type='submit' name='Action' value='Envoyer1'></input></h1>
        </form>";


if (isset($_POST['Action'])){
    $_SESSION['Nombre_de_Sorciers'] = $_POST['Nombre_de_Sorciers'];
    $_SESSION['Nombre_de_Guerriers'] = $_POST['Nombre_de_Guerriers'];

        // je crée ma boucle en fonction du nombre de sorciers
    for ($i = 0; $i < $_SESSION['Nombre_de_Sorciers']; $i ++){
        echo "Nom du Sorcier :"."<input type='text' name='Score[]'>"."<br>";
        echo "Nombre de points de vie :"."<input type='text' name='Score[]'>"."<br>";
    }
        // je crée ma boucle en fonction du nombre de guerrierS
    for ($n = 0; $n < $_SESSION['Nombre_de_Guerriers']; $n ++){
        echo "Nom du Guerrier :"."<input type='text' name='Score[]'>"."<br>";
        echo "Nombre de points de vie :"."<input type='text' name='Score[]'>"."<br>";
    }
    echo "<br><input type='submit' name='Action2' value='Envoyer2'></input></br>";


}

?>

</body>
</html>


