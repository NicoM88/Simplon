<?php
/**
 * Created by PhpStorm.
 * User: cci
 * Date: 09/03/18
 * Time: 11:42
 */

namespace Bibliotheque;


class client
{
    public $Idclient;
    public $nom;
    public $adresse;

    // function get set

    /**
     * @return mixed
     */
    public function getIdclient()
    {
        return $this->Idclient;
    }

    /**
     * @param mixed $Idclient
     */
    public function setIdclient($Idclient)
    {
        $this->Idclient = $Idclient;
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    /**
     * @return mixed
     */
    public function getAdresse()
    {
        return $this->adresse;
    }

    /**
     * @param mixed $adresse
     */
    public function setAdresse($adresse)
    {
        $this->adresse = $adresse;
    }
}