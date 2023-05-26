import {AppProps, PokemonRepo} from './App'
import NetworkPokemonRepo from './pokemonVendingMachine/repo/NetworkPokemonRepo'

export default class AppPropsBuilder {
    private pokemonRepo: PokemonRepo

    constructor() {
        this.pokemonRepo = new NetworkPokemonRepo()
    }

    withPokemonRepo(newValue: PokemonRepo): AppPropsBuilder {
        this.pokemonRepo = newValue
        return this
    }

    build(): AppProps {
        return {
            pokemonRepo: this.pokemonRepo,
        }
    }
}