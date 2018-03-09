<?php
/**
 * Created by PhpStorm.
 * User: cci
 * Date: 09/03/18
 * Time: 11:42
 */

namespace Bibliotheque;


class livre
{
    public $Idlivre;
    public $disponible;
    public $indisponible;
    public $titre;

    // fonctions get et set
    public function getIdlivre() // get = prend ( une variable ) je récupère la valeur
    {
        return $this->Idlivre;
    }
    /**
     * @param mixed $Idlivre
     */
    public function setIdlivre($Idlivre)
    {
        $this->Idlivre = $Idlivre;
    }
    /**
     * @return mixed
     */
    public function getDisponible()
    {
        return $this->disponible;
    }
    /**
     * @param mixed $disponible
     */
    public function setDisponible($disponible)
    {
        $this->disponible = $disponible;
    }
    /**
     * @return mixed
     */
    public function getIndisponible()
    {
        return $this->indisponible;
    }
    /**
     * @param mixed $indisponible
     */
    public function setIndisponible($indisponible)
    {
        $this->indisponible = $indisponible;
    }
    /**
     * @return mixed
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * @param mixed $titre
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;
    }
}



