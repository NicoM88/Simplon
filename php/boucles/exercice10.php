<?php
  session_start();
?>
<!---->
<!---->
<!--* Created by PhpStorm.-->
<!-- * User: cci-->
<!-- * Date: 16/02/18-->
<!-- * Time: 16:10-->
<!--créer un formulaire: nom prenom sexe (select) nombre de match-->
<!---->
<!--deuxième étape :en php (1er submit)-->
<!--afficher une fiche avec le nom le prenom le sexe-->
<!--suivant le sexe : la fiche est rose ou bleue-->
<!--afficher autant de champs input ( points marqués) qu'il y a de match-->
<!--mettre les informations en session-->
<!---->
<!--troisième étape: (2ème submit)-->
<!--aaficher les données de la première partie et afficher le nombre total de points marqués-->
<!---->
<!---->
<!--donc Session_start()-->
<!--    $_SESSION-->
<!--    for ()-->
<!--    if()-->
<!--    echo-->
<!--*/-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Formulaire Match</title>
    <link rel="stylesheet" href="exercice10.css">

</head>
<body>


<?php
// je crée <option value='Homme'></option>le formulaire
    echo"<form method='post' name='' action=''>
    
        Nom <input type='text' name='Nom'><br></br>
        Prenom <input type='text' name='Prenom'><br></br>
        Sexe <select name='Sexe' id='Sexe'>
                <option value='Homme'>Homme</option>
                <option value='Femme'>Femme</option></select><br></br>
        Nombre de match <input type='number' name='Nombre_de_match'>
        <h1><input type='submit' name='Action' value='Envoyer1'></input></h1>
    </form>";


    //je vérifie que le formulaire est bien posté


//    if (isset($_POST['Action'])){
//            if ($_POST['Nom']==""){
//                echo "vous devez specifier le Nom !";
//            }
//            if ($_POST['Prenom']==""){
//                echo "vous devez specifier le Prénom !";
//            }
//            if ($_POST['Sex']==""){
//                echo "vous devez specifier le Sexe !";
//            }
//            if ($_POST['Nombre de match']==""){
//                echo "vous devez specifier le nombre de match !";
//            }
//    }



if (isset($_POST['Action'])) {
    $_SESSION['Nom'] = $_POST['Nom'];
    $_SESSION['Prenom'] = $_POST['Prenom'];
    $_SESSION['Sexe'] = $_POST['Sexe'];
    $_SESSION['Nombre_de_match'] = $_POST['Nombre_de_match'];

    if ($_SESSION['Sexe'] == 'Homme'){
        echo "<div class='bleue'>"; // je crée une class bleue pour homme
    }
    else {
        echo "<div class='rose'>"; // je crée une class rose pour femme
    }

    echo "<form method='post' action=''>";

    echo '<br></br> Votre Nom est : ' . $_SESSION['Nom'];
    echo '<br></br> Votre Prenom est : ' . $_SESSION['Prenom'];
    echo '<br></br> Votre Sexe est : ' . $_SESSION['Sexe'];
    echo '<br></br> Votre Nombre de match est : ' . $_SESSION['Nombre_de_match']."<br>";

        // je crée ma boucle en fonction du nombre de match saisi dans le formulaire


   for ($i = 0; $i < $_SESSION['Nombre_de_match']; $i ++){
        //  on écrit dans le formulaire en fonction nombre X d'input saisi au début
       echo "Vos points marqués match :"."<input type='text' name='Score[]'>"."<br>";
   }

    echo "<br><input type='submit' name='Action2' value='Envoyer2'></input></br>";


    echo "</form>";
    echo "</div>";
}

if (isset($_POST['Score'])) {
    $_SESSION['Score'] = $_POST['Score'];
}

if (isset($_POST['Action2'])) {

    $total = 0;

    if ($_SESSION['Sexe'] == 'Homme'){
        echo "<div class='bleue'>"; // je crée une class bleue pour homme
    }
    else {
        echo "<div class='rose'>"; // je crée une class rose pour femme
    }


    echo '<br></br> Votre Nom est : ' . $_SESSION['Nom'];
    echo '<br></br> Votre Prenom est : ' . $_SESSION['Prenom'];
    echo '<br></br> Votre Sexe est : ' . $_SESSION['Sexe'];

    foreach ($_SESSION['Score'] as $valeur) {
        $total = $total + $valeur;

    }
    echo '<br></br> Score = ' . $total;

    echo "</div>";
}

?>


</body>
</html>

