<?php
/**
 * Created by PhpStorm.
 * User: cci
 * Date: 22/02/18
 * Time: 12:05
 */

echo "*** lecture base.php<br></<br>";
try
{

    echo 'Connexion à la BD PLACE en cours :';

        $bdd = new PDO ('mysql:host=localhost;dbname=Place;charset=utf8', 'root', 'simplonformation');
        $bdd->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        echo "  Bien joué, t'es connecté   !!!<br></br>";
}
catch (PDOException $ex)
{
    die('Erreur :' . $ex->getMessage());
}

//Requête de sélection de l'ID du cours du 22/02/2018



$requete = $bdd->query("SELECT idCours FROM Cours WHERE dateCours = '2018-02-22'");

$donnees = $requete->fetch();

$idcours = $donnees['idCours'];

echo "Cours n° ".$donnees['idCours']." du 22/02/2018<br>";

$requete->closeCursor();



//Requête de sélection de l'ID du cours du 22/02/2018



$requete = $bdd->query("SELECT Place.idEtudiant, Place.NumeroPlace, Etudiant.prenom FROM Place INNER JOIN Etudiant ON Etudiant.idEtudiant = Place.idEtudiant WHERE Place.idCours = 1;");



//On affiche chaque entrée une à une



while ($donnees = $requete->fetch()) {

    ?>

    <p>

        <strong>Etudiant</strong> : <?php echo $donnees['prenom']; ?>, place n° <?php echo $donnees['NumeroPlace']; ?><br>

    </p>

    <?php

}



$requete->closeCursor();









// 1 - script PHP  faire delete : dans cours et place  (pour place dans ma table : Place.Place)
// = dans mon exercice Place je veux la table Place
//echo "*** delete place.php</br></br>";
//
//try
//{
//    $req_del_place = $bdd->exec("DELETE FROM Place");
//
//    echo "Suppression effectuée</br></br>";
//}
//
//catch (PDOException $ex)
//{
//    die('Erreur : ' . $ex->getMessage());
//}



// 2 - script PHP faire insert : dans cours et palce



// 3 - select idCours -> Cours
// s'il existe alors afficher les places
// si il n'existe pas alors je crée le nouveau cours

$requete = $bdd->query("SELECT idCours FROM Cours WHERE dateCours = '2018-02-22'");
$donnees = $requete->fetch();
$idcours = $donnees['idCours'];


echo "Place n° ".$donnees['NumeroPlace']." du 22/02/2018<br>";

$requete->closeCursor();

// 4 - génère le placement aléatoire des etudiants

// 5 - je les enregistre dans Place


?>