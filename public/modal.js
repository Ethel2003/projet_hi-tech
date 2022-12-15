 //récupération de la section permettant de faire la modale
 let getModal = document.getElementById('login');

 //récupération de l'élément permettant de faire apparaître la modale
 let getModalAppear = document.getElementById('modal');

 //récupération de la span permettant de fermer la modale
 let closeRegister = document.getElementById('closeRegister');
 let closeLogin = document.getElementById('closeLogin');

 //récupération des formulaires
 let getFormConnexion = document.getElementById("connexion");
 let getFormRegister = document.getElementById("register");
 
 //récupération du lien create_account et have_account
 let getCreateAccount = document.getElementById("create_acount");
 let getHaveAccount = document.getElementById("have_account");


//   afichage du modale
  getModalAppear.addEventListener("click",function (event) {
    event.preventDefault();
    getModal.classList.remove("none_form");
    getModal.classList.add("appear");

    if (getFormConnexion.classList.contains('disappear')) {
        getFormConnexion.classList.remove('disappear');
    }

    if (getFormRegister.classList.contains('appear')) {
        getFormRegister.classList.remove('appear');
    }

    console.log("apparition modal");
})

 //Mise en place d'un écouteur sur closeLogin
 closeLogin.addEventListener("click",function (event) {
     event.preventDefault();
     getFormConnexion.classList.add("disappear");

     getModal.classList.remove("appear");
     getModal.classList.add("none_form");
 })

 //Mise en place d'un écouteur sur closeRegister
 closeRegister.addEventListener("click",function (event) {
     event.preventDefault();

     console.log(getModal);
     getFormRegister.classList.add("disappear");

     getModal.classList.remove("appear");
     getModal.classList.add("none_form");
 })

//  Mise en place d'un écouteur sur le lien create_account
 getCreateAccount.addEventListener("click",function (event) {
     event.preventDefault();
     getFormRegister.classList.remove("disappear");
     getFormRegister.classList.add("appear");

     getFormConnexion.classList.add("disappear");
     console.log("Apparition du formlaire d'inscription");
 })

 //Mise en place d'un écouteur sur le lien have_account
 getHaveAccount.addEventListener("click",function (event) {
     event.preventDefault();
     getFormRegister.classList.add("none_form");
     getFormRegister.classList.remove("appear");

     getFormConnexion.classList.remove("none_form");
     getFormConnexion.classList.add("appear");
     console.log("Apparition du formlaire de connexion");
 })


