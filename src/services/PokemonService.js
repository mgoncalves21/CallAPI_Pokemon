import axios from "axios";
import {Pokemon} from "@/models/Pokemon";

export default class PokemonService{
    getPokemons(){
        return new Promise((resolve) =>{
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=25').then((resp) => {

                const pokemons = [];
                resp.data.results.forEach((pokemon) => {
                    const p = new Pokemon(pokemon.name);
                    p.url = pokemon.url;
                    pokemons.push(p);
                })
                resolve(pokemons)
            })

        })

    }
}