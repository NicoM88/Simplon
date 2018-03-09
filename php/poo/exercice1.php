<?php

/**
* Créer des classes Dog et et Cat étendant Pet et implémentant l'interface Animal
* 
* Methode de Animal : 
*   - Cry() // Affiche le nom du crie de l'animal
*   - Run() // Affiche la vitesse a laquelle l'animal court
* Propriété de Animal :
*    - $speed
*    - $cryName
* 
* Methode de Pet
*   - Sleep() // Affiche le temps d'une sieste d'un animal
* Proprieté de Pet
*   - SleepTime
*
* Il faut passer les paramètres $sleepTime, $speed, $cryName dans le constructeur
* 
* 
* Créer ensuite 3 chats et 2 chiens, les mettres dans un tableau
* Parcourir le tableau et afficher soit le cri, la vitesse ou son temps de sieste.
*/

 // on determine une class " Pet " qui contient l'ensemble des variables et de(s) fonction(s)
Class Pet {
 // on declare les variables:
   public $run;
   public $cry;
   public $sleeptime;
   //on determine une fonction constructeur
    public function __construct($cry,$run,$sleeptime){
        $this -> cry = $cry;
        $this -> run = $run;
        $this -> sleeptime = $sleeptime;
    }
    public function getcry(){
        return $this->cry;
    }
    public function getrun(){
        return $this->run;
    }
    public function getsleeptime(){
        return $this->sleeptime;
    }
}
// on determine les 2 class qui vont s'étendre à la class " Pet "
Class Dog extends Pet {

}
Class Cat extends Pet {

}

$obj1=new Dog("wouaf","35km/h","8h");
$obj2=new Cat("miaou","10km/h","20h");

echo $obj1->getrun()." ".$obj1->getcry()." ".$obj1->getsleeptime()." ";
echo $obj2->getrun()." ".$obj2->getcry()." ".$obj2->getsleeptime();

// je déclare mes variables 2 Dog et 3 Cat
    $Dog1 = "Dog1";
    $Dog2 = "Dog2";
    $Cat1 = "Cat1";
    $Cat2 = "Cat2";
    $Cat3 = "Cat3";

 // modulo affiche une action en fonction de la clef soit modulo %3
// je crée un tableau qui s'appelle " tableauPet ":
$tableauPet = ["Dog1","Dog2","Cat1","Cat2", "Cat3"];

// je parcours le tableau avec foreach as
foreach ($tableauPet as $key){

        if ($key %3 == 0){
            //$value = $;
            echo $key;
    }
}

//je crée mon tableau
//$a = ["getrun", "getcry", "getrun"];
//
//foreach ($a as $key) {
//
//    $rand = rand(0, 2);
//    $action = $a[$rand];
//    $value->{$action}();
//
//    if ($key == $valeur){
//
//    }
//}

?>