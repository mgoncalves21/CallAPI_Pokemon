<template>
  <div>
  </div>
</template>
<script>

import axios from 'axios'
import {Pokemon} from "@/models/Pokemon";

export default {
  name: "Pokemon",
  props: {
    pokemonUrl: undefined
  },
  mounted() {
    this.fetchPokemon()
  },
  data() {
    return {
      pokemon: undefined
    }
  },

  watch: {
    pokemonUrl: function () {
      console.log(this.pokemonUrl)
      this.fetchPokemon()
    }
  },
  methods: {
    fetchPokemon() {
      this.pokemon = undefined
      axios.get(this.pokemonUrl).then((resp) => {
        const p = resp.data;
        this.pokemon = new Pokemon(p.name)
        this.pokemon.height = p.height
        this.pokemon.weight = p.weight
        this.pokemon.image = p.sprites.font_default

      })

    }
  }
}
</script>
<style scoped>
</style>