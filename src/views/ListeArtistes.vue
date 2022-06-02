<template>
  <div class>
    <h5 class="text-center font-bree-serif text-4xl text-white">Liste des Artistes - Simple liste</h5>
  </div>
  <div class="my-10 text-center font-bree-serif text-2xl text-white" v-for="Artistes in listeArtistes" :key="Artistes.id">
    <p>{{ Artistes.Nom }}</p>
  </div>
  <hr />
</template>



<script>
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      Nom: null,
      message: null,
      listeArtistes: [],
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "Artistes");
      const query = await getDocs(dbArtistes);
      query.forEach((doc) => {
        let Artistes = {
          id: doc.id,
          Nom: doc.data().Nom,
        };
        this.listeArtistes.push(Artistes);
      });
    },
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
h4 {
  font-weight: bold;
}
</style>