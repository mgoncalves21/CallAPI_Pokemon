<template>
  <div>
    <h1>Pokemons</h1>

    <table>
      <thead>
      <tr>
        <th>Nom</th>
      </tr>
      </thead>
      <body>
      <tr v-for="(pokemon, index) in pokemons" v-bind:key="index">
        <td>
          {{ index }}
        </td>
        <td>
          {{ pokemon.name }}
        </td>
        <td>
          <button v-on:click="onPokemonClicked(pokemon)">Choisir</button>
        </td>
      </tr>

      </body>
    </table>
    <PokemonComponent
        v-if="selectedPokemon != undefined"
        v-bind:pokemonUrl="selectedPokemon.url">
    </PokemonComponent>

  </div>
</template>


<script>


import PokemonComponent from "@/components/Pokemon.vue"
import PokemonService from "@/services/PokemonService";

export default {
  name: "Pokemons",
  components: {
    PokemonComponent
  },

  data() {
    return {
      PokemonService: undefined,
      pokemons: [],
      selectedPokemon: undefined

    }
  },
  mounted() {
    this.PokemonService = new PokemonService();
    this.PokemonService.getPokemons().then((pokemons)=>{
      this.pokemons=pokemons
    })

  },
  methods: {
    onPokemonClicked(pokemon) {
      console.log(pokemon.name)
      this.selectedPokemon = pokemon;
    }
  }
}
</script>


<style scoped>

</style>