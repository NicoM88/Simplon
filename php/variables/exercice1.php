<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exercice1</title>

</head>

<body>
    <form method="POST">

        <input type="text" name="username">
        <input type="password" name="password">
        <input type="submit" name="envoyer">

    </form>

<?php

/**
*
* Créer un formulaire qui demande un login et un mot de passe
* puis une fois le formulaire validé, afficher :
* 
* - Le login
* - Le mot de passe
* - L'adresse ip du client
*/

if (count($_POST)>0){
    echo "Le nom d'utilisateur est ".$_POST['username']."<br>";
    echo "Le mot de passe est ".$_POST['password']."<br>";
    echo "L'adresse IP est ".$_SERVER['REMOTE_ADDR'];
};

?>

</body>

</html>
