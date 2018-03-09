<?php
/**
 * Created by PhpStorm.
 * User: cci
 * Date: 09/03/18
 * Time: 11:44
 */

namespace Bibliotheque;

include ("livre.php");
include ("client.php");
include ("pret.php");

use Bibliotheque\pret;
use Bibliotheque\client;
use Bibliotheque\livre as listeLivre;
$listeLivre = new livre();
var_dump(get_class($livre));

//on instancie tous les objets dans init :







?>