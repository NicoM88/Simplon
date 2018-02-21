/**
 * Gestion avancée :
 * selecteur : document.querySelector(cssRule) et document.querySelectorAll(cssRule)
 * gestion classes :
 element.classList.add(className);
 element.classList.remove(className);
 element.classList.contains(className);
 element.classList.toggle(className)
 * gestion select : element.selectedIndex; element.options;
 */

// inputsText = document.querySelectorAll("form input[type='text']");

document.addEventListener("DOMContentLoaded", function(){

    // evenement keyup pour tous les input text
    // , sinon ajouter la classe "error" sur le input

    // récupérer le premier input
    const subscription_login_input =  document.getElementById("subscription_login")

   // console.log(subscription_login_input)
    // ajouter un event listner  "keyup"

    subscription_login_input.addEventListener("keyup", function (event) {
        // => si saisie entre 4 et 8 caractères
        const saisie = subscription_login_input.value;
        if (saisie.length >= 4 && saisie.length <= 8){
            //console.log("c'est good mec");
        // console.log('coucou') // écrit coucou dans la console
        // vérifier la longueur  de la saisie
       // console.log(subscription_login_input.value);
            // ajouter la class "success" sur le input
            subscription_login_input.classList.add("success");// valide le champs en vert
            subscription_login_input.classList.remove("error");
        } else {
            subscription_login_input.classList.add("error"); // valide le champs en rouge
            subscription_login_input.classList.remove("success");
           // console.log("c'est pas bon");
        }

    });
// récupérer le deuxieme input


        const subscription_password_input =  document.getElementById("subscription_password")

        subscription_password.addEventListener("keyup", function (event) {
            // => si saisie entre 4 et 8 caractères
            const saisie1 = subscription_password_input.value;
            if (saisie1.length >= 4 && saisie1.length <= 8) {
                //console.log("c'est good mec");
                // console.log('coucou') // écrit coucou dans la console
                // vérifier la longueur  de la saisie
                // console.log(subscription_password.value);
                // ajouter la class "success" sur le input
                subscription_password_input.classList.add("success");// valide le champs en vert
                subscription_password_input.classList.remove("error");
            } else {
                subscription_password_input.classList.add("error"); // valide le champs en rouge
                subscription_password_input.classList.remove("success");
                //console.log("c'est pas bon");
            }

        });











    // évènement à la soumission du formulaire
    // => supprimer toutes les div>div dans le formulaire
    // => vérifier que tous les champs sont renseignés
    // => vérifier que le login est différent du mot de passe
    // => vérifier que les mots de passe sont identiques
    // => vérifier que le login ne contient pas "admin","administrator","superadmin","chuck", "root", "postmaster"
    // => créer une div juste avant contenant le message d'erreur pour chaque erreur


});