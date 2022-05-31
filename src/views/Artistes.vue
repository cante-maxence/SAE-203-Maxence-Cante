
  <template>
  <p class="my-10 flex justify-center font-bree-serif text-3xl text-white">Bienvenue sur la page artistes !</p>

  <cardArtistes
    name="ACDC"
    photo1="src\components\icons\ACDCartistes.png"
    photo2="src\components\icons\acdc.png"
    type1="Métal"
    type2="Connu"
    type3="80's"
    music1="Rock or bust"
    music2="Back in Black"
    music3="ThunderStuck"
  />

  <cardArtistes
    name="BECK"
    photo1="src\components\icons\beckArtistes.png"
    photo2="src\components\icons\beck.png"
    type1="Rock Indépendant"
    type2="Solo"
    type3="90's"
    music1="Loser"
    music2="Wow"
    music3="Saw Lightning"
  />

  <cardArtistes
    name="Courtney Love"
    photo1="src\components\icons\beckArtistes.png"
    photo2="src\components\icons\beck.png"
    type1="Rock Indépendant"
    type2="Solo"
    type3="90's"
    music1="Loser"
    music2="Wow"
    music3="Saw Lightning"
  />
</template>



<script>
import cardArtistes from "../components/cardArtistes.vue";

export default {
  components: { cardArtistes },
};
</script>
