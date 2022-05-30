<template>
  <div class="relative my-10 ml-20 h-[392px] w-[355px]">
    <div class="absolute left-[239px] top-[-1px] h-[369.81px] w-[115px] rounded-tr-[50px] rounded-br-[50px] bg-[#5f006f]/60"></div>
    <img class="absolute left-[-1px] top-[-1px] h-[369.81px] w-64 rounded-tl-lg rounded-bl-lg" src="src\components\icons\artic.png" />
    <p class="txt-vert absolute left-[290px] top-[20px] h-[337px] w-[23px] text-center text-4xl font-bold text-white">{{ date }}</p>
    <p class="absolute left-[25px] top-[309.08px] h-[36.75px] w-[206px] text-left text-3xl text-white">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    date: String,
  },
};
</script>

<style>
.txt-vert {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
</style>