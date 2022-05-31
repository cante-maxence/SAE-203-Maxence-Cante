  <template>
  <div class="container mx-auto my-10 px-20">
    <div class="relative rounded-lg border bg-cyan-900 bg-opacity-25 p-6 text-gray-100" style="cursor: auto">
      <div class="flex flex-wrap items-center">
        <div class="relative flex h-48 w-full md:h-64 lg:h-72">
          <div class="relative w-8/12 pr-4">
            <img :src="photo1" class="h-full w-full rounded-lg bg-white object-cover object-top" />
          </div>

          <div class="h-full w-4/12">
            <div class="flex h-full w-full flex-col">
              <div class="flex-1 pb-2">
                <div class="relative h-full w-full">
                  <img :src="photo2" class="absolute top-0 h-full w-full rounded-lg bg-white object-cover object-center" />
                </div>
              </div>

              <div class="flex-1 pt-2">
                <div class="relative h-full w-full">
                  <img src="/images/icons/plus.png" class="absolute top-0 h-full w-full rounded-lg bg-white object-cover object-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-full flex-col justify-between pt-8">
          <div>
            <h2 class="text-xl font-bold">{{ name }}</h2>

            <div class="mb-2 flex flex-wrap pt-4 text-center">
              <div class="mr-2 mb-2 rounded-full bg-red-400 px-3 py-1 text-xs text-black">{{ music1 }}</div>

              <div class="mr-2 mb-2 rounded-full bg-red-400 px-3 py-1 text-xs text-black">{{ music2 }}</div>

              <div class="mr-2 mb-2 rounded-full bg-red-400 px-3 py-1 text-xs text-black">{{ music3 }}</div>
            </div>

            <ul class="mt-4 list-inside list-disc text-xs leading-relaxed text-gray-50">
              <li>{{ type1 }}</li>

              <li>{{ type2 }}</li>

              <li>{{ type3 }}</li>
            </ul>
          </div>

          <div class="grid w-full grid-cols-2 gap-4 pt-6 sm:flex-1">
            <a
              href="https://accounts.spotify.com/fr/login"
              class="
                relative
                flex
                items-center
                justify-center
                rounded-lg
                bg-gray-200
                px-8
                py-3
                text-center text-sm
                font-bold
                text-gray-800
                shadow-lg
                hover:opacity-75 hover:shadow-none
              "
              >Spotify</a
            >

            <button
              x-on:click="pay('Essential')"
              class="
                relative
                block
                w-full
                rounded-lg
                bg-red-800
                px-4
                py-3
                text-center text-sm
                font-bold
                text-white
                shadow-lg
                hover:opacity-75 hover:shadow-none
              "
            >
              Page du groupe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    music1: String,
    music2: String,
    music3: String,
    photo1: String,
    photo2: String,

    type1: String,
    type2: String,
    type3: String,
  },
};
</script>

