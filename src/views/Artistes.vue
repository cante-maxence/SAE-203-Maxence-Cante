
  <template>
  <p class="my-10 mx-10 flex justify-center font-bree-serif text-3xl text-white">Bienvenue sur la page artistes !</p>

  <cardArtistes
    name="ACDC"
    photo1="../images/icons/ACDCartistes.png"
    photo2="../images/icons/acdc.png"
    type1="Métal"
    type2="Connu"
    type3="80's"
    music1="Rock or bust"
    music2="Back in Black"
    music3="ThunderStuck"
  />

  <cardArtistes
    name="BECK"
    photo1="../images/icons/beckArtistes.png"
    photo2="../images/icons/beck.png"
    type1="Rock Indépendant"
    type2="Solo"
    type3="90's"
    music1="Loser"
    music2="Wow"
    music3="Saw Lightning"
  />

  <cardArtistes
    name="Three Days Grace"
    photo1="../images/icons/threedays.png"
    photo2="../images/icons/troisdays.jpg"
    type1="Rock Indépendant"
    type2="Métal"
    type3="Groupe"
    music1="I hate everything about you"
    music2="So Called Life"
    music3="Animal i have become"
  />

  <cardArtistes
    name="Courtney Love"
    photo1="../images/icons/cortneyArtistes.png"
    photo2="./images/icons/courtneylove.jpg"
    type1="Rock Indépendant"
    type2="Solo"
    type3="Femme"
    music1="You Know my Name "
    music2="Doll Parts "
    music3="Violet"
  />

  <button class="m-20 rounded bg-red-700 px-3 py-2 text-white outline-none">Afficher plus</button>
</template>



<script>
import cardArtistes from "../components/cardArtistes.vue";

export default {
  components: { cardArtistes },
};
</script>
