<template>
  <div class="bg-black">
    <h1 class="flex justify-center pt-6 text-center font-bree-serif text-4xl text-neutral-100">
      Un retour a nous faire parvenir <br />
      n’hésitez pas
    </h1>

    <form id="form" class="topBefore pb-10">
      <input id="name" type="text" placeholder="Pseudo" />
      <input id="email" type="text" placeholder="E-mail*" />
      <textarea id="message" type="text" placeholder="Objet"></textarea>
      <textarea id="message" type="text" placeholder="Votre Message"></textarea>
      <input id="submit" type="submit" value="GO!" />
    </form>
  </div>

  <h1 class="flex justify-center pt-6 text-center font-bree-serif text-4xl text-neutral-100">TEST Firebase Page 300</h1>

  <h5>Firebase - Se connecter</h5>
  <form @submit.prevent="onCnx()">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-dark">Email :</button>
      </div>
      <input class="form-control" type="text" v-model="user.email" required />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-dark">Mot de passe :</button>
      </div>
      <input class="form-control" type="password" v-model="user.password" required />
    </div>
    <div class="alert alert-warning mb-3 text-center" v-if="message != null">
      {{ message }}
    </div>
    <div>
      <button class="float-left" @click="onDcnx()">Deconnexion</button>
      <button variant="dark" class="float-right" type="submit">Connexion</button>
    </div>
  </form>
</template>

<script>

// Bibliothèques Firebase  : import des fonctions
//  signInWithEmailAndPassword : Authentification avec email et mot de passe
//  getAuth : Fonction générale d'authentification
//  signOut : Se deconnecter
//  onAuthStateChanged : connaitre le statut de l'utilisateur (connecté ou non)

import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Bibliothèque Firestore : import des fonctions


    export default {   
        data(){ // Données de la vue
            return{                
                user:{          // user se connectant
                    email:null,
                    password:null
                },
                message:null, // Message de connexion
                 }
        },

        mounted(){ 
          
        }

        methods:{
            onCnx(){                
                // Se connecter avec user et mot de passe           
                signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
                .then((response)=>{
                    // Connexion OK
                    console.log('user connecté', response.user);
                    this.user = response.user;
                    this.message = "User connecté : "+this.user.email;
                })
                .catch((error) =>{
                    // Erreur de connexion
                    console.log('Erreur connexion', error);
                    this.message = "Erreur d'authentification";
                })
            },
            onDcnx(){
                // Se déconnecter
                signOut(getAuth())
                .then(response =>{
                    this.user = getAuth().currentUser;
                    this.user = {
                        email:null,
                        password:null
                    };
                    console.log("user deconnecté ", this.user);        
                    this.message = 'user non connecté';
                })
                .catch(error=>{
                    console.log('erreur deconnexion ', error);
                })

            },
        }
    }

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap");

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #ffe1fa;
  font-size: 0.875em;
}

input:focus::-webkit-input-placeholder,
textarea:focus::-webkit-input-placeholder {
  color: #ffe1fa;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #ffe1fa;
  font-size: 0.875em;
}

input:focus::-moz-placeholder,
textarea:focus::-moz-placeholder {
  color: #bbb5af;
}

input::placeholder,
textarea::placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

input:focus::placeholder,
textarea::focus:placeholder {
  color: #bbb5af;
}

input::-ms-placeholder,
textarea::-ms-placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

input:focus::-ms-placeholder,
textarea:focus::-ms-placeholder {
  color: #ffe1fa;
}

/* on hover placeholder */

input:hover::-webkit-input-placeholder,
textarea:hover::-webkit-input-placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::-webkit-input-placeholder,
textarea:hover:focus::-webkit-input-placeholder {
  color: #000000;
}

input:hover::-moz-placeholder,
textarea:hover::-moz-placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::-moz-placeholder,
textarea:hover:focus::-moz-placeholder {
  color: #000000;
}

input:hover::placeholder,
textarea:hover::placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::placeholder,
textarea:hover:focus::placeholder {
  color: #000000;
}

input:hover::placeholder,
textarea:hover::placeholder {
  color: #000000;
  font-size: 0.875em;
}

input:hover:focus::-ms-placeholder,
textarea:hover::focus:-ms-placeholder {
  color: #000000;
}

body {
  font-family: "Bree Serif, sans-serif";
  background: #ffe1fa;
  color: #ffe1fa;
}

header {
  position: relative;
  margin: 100px 0 25px 0;
  font-size: 2.3em;
  text-align: center;
  letter-spacing: 7px;
}

#form {
  position: relative;
  width: 500px;
  margin: 50px auto 100px auto;
}

input {
  font-family: "Bree Serif", sans-serif;
  font-size: 0.875em;
  width: 470px;
  height: 50px;
  padding: 0px 15px 0px 15px;

  background: transparent;
  outline: none;
  color: #ffe1fa;

  border: solid 4px #ffe1fa;
  border-bottom: none;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

input:hover {
  background: #ffe1fa;
  color: #e2dedb;
}

textarea {
  width: 470px;
  max-width: 470px;
  height: 110px;
  max-height: 110px;
  padding: 15px;

  background: transparent;
  outline: none;

  color: #ffe1fa;
  font-family: "Bree Serif", sans-serif;

  border: solid 4px #ffe1fa;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

textarea:hover {
  background: #ffe1fa;
  color: #e2dedb;
}

#submit {
  width: 470px;

  padding: 0;
  margin: -5px 0px 0px 0px;

  font-family: "Bree Serif", sans-serif;
  font-size: 0.875em;
  color: #ffe1fa;

  outline: none;
  cursor: pointer;

  border: solid 4px #ffe1fa;
  border-top: none;
}

#submit:hover {
  color: #e2dedb;
}
</style>