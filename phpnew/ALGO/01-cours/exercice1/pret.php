<?php
/**
 * Created by PhpStorm.
 * User: cci
 * Date: 09/03/18
 * Time: 11:43
 */

namespace Bibliotheque;


class pret
{
    public $client;
    public $livre;
    public $datePret;
    public $dateRetour;

    /**
     * @return mixed
     */
    public function getClient()
    {
        return $this->client;
    }

    /**
     * @param mixed $client
     */
    public function setClient($client)
    {
        $this->client = $client;
    }

    /**
     * @return mixed
     */
    public function getLivre()
    {
        return $this->livre;
    }

    /**
     * @param mixed $livre
     */
    public function setLivre($livre)
    {
        $this->livre = $livre;
    }

    /**
     * @return mixed
     */
    public function getDatePret()
    {
        return $this->datePret;
    }

    /**
     * @param mixed $datePret
     */
    public function setDatePret($datePret)
    {
        $this->datePret = $datePret;
    }

    /**
     * @return mixed
     */
    public function getDateRetour()
    {
        return $this->dateRetour;
    }

    /**
     * @param mixed $dateRetour
     */
    public function setDateRetour($dateRetour)
    {
        $this->dateRetour = $dateRetour;
    }


}

