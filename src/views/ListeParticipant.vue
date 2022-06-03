<template>
  <div class="m-auto mb-20 grid w-96">
    <h1 class="my-4 text-center text-3xl text-white">Liste participant Synchro</h1>
    <input placeholder="Nom du participant" type="text" v-model="Nom" required class="p-1" />
    <button class="mx-2 mt-2 items-center border-2 p-3 text-white" type="button" @click="createparticipant()" title="Créé">Créé</button>
    <input type="text" v-model="filter" class="mx-5 mt-2 border-2 p-3 text-black" placeholder="Filtre" />
    <button class="mx-5 mt-2 border-2 p-3 text-white" type="button" title="Filtrage">filtrage</button>
    <form class="w-full" v-for="participant in filterByName" :key="participant.id">
      <div>
        <input type="text" v-model="participant.nom" required class="mx-5 mt-2 w-full border-2 p-3" />
        <button class="mx-5 mt-2 border-2 p-3 text-white" type="button" @click="updateparticipant(participant)" title="Modification">
          Modifier
        </button>
        <button class="mx-5 border-2 p-3 text-white" type="button" @click="deleteparticipant(participant)" title="Suppression">
          Supprimer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
      nom: null,
      listeparticipantSynchro: [],
      filter: "",
    };
  },
  computed: {
    orderByName: function () {
      return this.listeparticipantSynchro.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },
    filterByName: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByName.filter(function (participant) {
          return participant.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByName;
      }
    },
  },

  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "User déjà connecté : " + this.user.email;
    } else {
      this.message = "User non connecté : " + this.user.email;
    }

    this.getparticipantSynchro();
  },

  methods: {
    async getparticipantSynchro() {
      const firestore = getFirestore();
      const dbparticipant = collection(firestore, "participant");
      const query = await onSnapshot(dbparticipant, (snapshot) => {
        this.listeparticipantSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    async createparticipant() {
      const firestore = getFirestore();
      const dbparticipant = collection(firestore, "participant");
      const docRef = await addDoc(dbparticipant, {
        nom: this.nom,
      });
      //console.log('document créé avec le id : ', docRef.id);
    },

    async updateparticipant(participant) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "participant", participant.id);
      await updateDoc(docRef, {
        nom: participant.nom,
      });
    },

    async deleteparticipant(participant) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "participant", participant.id);
      await deleteDoc(docRef);
    },
  },
};
</script>

