<template>
  <div class="grid grid-cols-3 text-white">
    <cardExtract name="Artic Monkeys" date="Vendredi" photo="src\components\icons\artic.png" />
    <cardExtract name="The OffSpring" date="Vendredi" photo="src\components\icons\offSpring.png" />
    <cardExtract name="ACDC" date="Samedi" photo="src\components\icons\acdc.png" />
    <cardExtract name="Three Days Grace" date="Samedi" photo="src\components\icons\threedays.png" />
    <cardExtract name="Fallout Boy" date="Dimanche" photo="src\components\icons\fall.png" />
    <cardExtract name="Courtney Cox" date="Dimanche" photo="src\components\icons\courtney.png" />
  </div>

  <button class="m-auto mb-16 flex rounded-lg bg-white">
    <div class="relative flex flex-col items-center justify-center gap-2.5 rounded-lg bg-white px-[27px] py-[31px]">
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-shrink-0 flex-grow-0"
        preserveAspectRatio="none"
      >
        <path d="M25.6297 41L16.8467 16.8466L41 25.6297L30.0212 30.0212L25.6297 41Z" fill="black"></path>
        <path
          d="M30.0212 30.0212L25.6297 41L16.8467 16.8466L41 25.6297L30.0212 30.0212ZM30.0212 30.0212L41 41M12.8685 2L14.5734 8.36283M8.36281 14.5734L2 12.8685M27.715 5.97821L23.0571 10.6361M10.6363 23.057L5.97839 27.7149"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <p class="w-[299px] flex-shrink-0 flex-grow-0 text-center text-2xl text-black">Retrouvez tous vos artistes préférez juste ici :</p>
    </div>
  </button>

  <button class="m-auto mb-16 flex rounded-lg bg-white">
    <div class="relative flex flex-col items-center justify-center gap-0.5 rounded-lg bg-white px-[61px] py-[22px]">
      <svg
        width="57"
        height="44"
        viewBox="0 0 57 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-shrink-0 flex-grow-0"
        preserveAspectRatio="none"
      >
        <path
          d="M55.5 16V17C56.0523 17 56.5 16.5523 56.5 16H55.5ZM55.5 28H56.5C56.5 27.4477 56.0523 27 55.5 27V28ZM1.5 28V27C0.947715 27 0.5 27.4477 0.5 28H1.5ZM1.5 16H0.5C0.5 16.5523 0.947715 17 1.5 17L1.5 16ZM38.5 1C38.5 0.447715 38.0523 0 37.5 0C36.9477 0 36.5 0.447715 36.5 1H38.5ZM36.5 7C36.5 7.55228 36.9477 8 37.5 8C38.0523 8 38.5 7.55228 38.5 7H36.5ZM38.5 19C38.5 18.4477 38.0523 18 37.5 18C36.9477 18 36.5 18.4477 36.5 19H38.5ZM36.5 25C36.5 25.5523 36.9477 26 37.5 26C38.0523 26 38.5 25.5523 38.5 25H36.5ZM38.5 37C38.5 36.4477 38.0523 36 37.5 36C36.9477 36 36.5 36.4477 36.5 37H38.5ZM36.5 43C36.5 43.5523 36.9477 44 37.5 44C38.0523 44 38.5 43.5523 38.5 43H36.5ZM7.5 0C3.63401 0 0.5 3.13401 0.5 7H2.5C2.5 4.23858 4.73858 2 7.5 2V0ZM49.5 0H7.5V2H49.5V0ZM56.5 7C56.5 3.13401 53.366 0 49.5 0V2C52.2614 2 54.5 4.23858 54.5 7H56.5ZM56.5 16V7H54.5V16H56.5ZM50.5 22C50.5 19.2386 52.7386 17 55.5 17V15C51.634 15 48.5 18.134 48.5 22H50.5ZM55.5 27C52.7386 27 50.5 24.7614 50.5 22H48.5C48.5 25.866 51.634 29 55.5 29V27ZM56.5 37V28H54.5V37H56.5ZM49.5 44C53.366 44 56.5 40.866 56.5 37H54.5C54.5 39.7614 52.2614 42 49.5 42V44ZM7.5 44H49.5V42H7.5V44ZM0.5 37C0.5 40.866 3.63401 44 7.5 44V42C4.73858 42 2.5 39.7614 2.5 37H0.5ZM0.5 28V37H2.5V28H0.5ZM6.5 22C6.5 24.7614 4.26142 27 1.5 27V29C5.36599 29 8.5 25.866 8.5 22H6.5ZM1.5 17C4.26142 17 6.5 19.2386 6.5 22H8.5C8.5 18.134 5.36599 15 1.5 15V17ZM0.5 7V16H2.5V7H0.5ZM36.5 1V7H38.5V1H36.5ZM36.5 19V25H38.5V19H36.5ZM36.5 37V43H38.5V37H36.5Z"
          fill="#111827"
        ></path>
      </svg>
      <p class="h-[57px] w-[233px] flex-shrink-0 flex-grow-0 text-center text-xl text-black">Réservez vos Tickets</p>
    </div>
  </button>
</template>

<script>
import CardExtract from "../components/cardExtract.vue";
export default {
  components: { CardExtract },
};
</script>

