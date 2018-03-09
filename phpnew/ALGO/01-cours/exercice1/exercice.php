<?php
//recuperer les infos de la liste de livres dans la Base de données
try
{

    echo 'Connexion à la BD Bibliotheque en cours :';

    $bdd = new PDO ('mysql:host=localhost;dbname=Bibliotheque;charset=utf8', 'root', 'simplonformation');
    $bdd->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    echo "  Bien joué, t'es connecté   !!!<br></br>";
}
catch (PDOException $ex)
{
    die('Erreur :' . $ex->getMessage());
}


//algorithme pret de livre

$listeLivres =[];
// on parcours le tableau avec la liste de livres
foreach ($listeLivres as $livre){
    // on recupere la liste si livre est dispo ou pas  boolean true or false
    if ($livre->getIndisponible()==false){
        $selectedLivre=$livre;
    }
    // on instancie un objet pret et ( associe un client à un livre )
    $pret=new Pret ($client,$selectedLivre);
    $selectedLivre->setIndisponible(); // ou setDisponible(false);
}



?>