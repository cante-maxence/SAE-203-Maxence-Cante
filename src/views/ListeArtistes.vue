<template>
  <div class>
    <h5 class="my-10 text-center font-bree-serif text-4xl text-white">Liste des artistes - Simple liste</h5>
  </div>
  <div v-for="artistes in listeArtistes" :key="artistes.id">
    <p>{{ artistes.nom }}</p>
  </div>
  <hr />
</template>


<script>
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      nom: null,
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
      const dbArtistes = collection(firestore, "artistes");
      const query = await getDocs(dbArtistes);
      query.forEach((doc) => {
        let artistes = {
          id: doc.id,
          nom: doc.data().nom,
        };
        this.listeArtistes.push(artistes);
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