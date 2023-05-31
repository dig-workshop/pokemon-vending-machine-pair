import styles from './HomeScreen.module.scss'
import Contents from '../../Contents'
import {useState} from "react";
import axios from "axios";


type PokeObj = {
    id: string,
    name: string,
    type: string,
}

export default function HomeScreen() {
    const [pokeObj, setPokeObj] = useState<PokeObj>({id: '', name: '', type: ''})

    function randomSelectPokemon() {
        setPokeObj({
            id: '',
            name: 'ピカチュウ',
            type: ''
        })
        //https://pokeapi.co/api/v2/pokemon/25
        fetchPokemon()
    }

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/25")
            .then((res) => setPokeObj({
                id: "#" + res.data.id,
                name: res.data.name,
                type: res.data.types[0].type.name
            }))

    }

    return (
        <Contents>
            <h1 className={styles.title}>Pokemon Vending Machine</h1>
            <p onClick={randomSelectPokemon}>ポケモンゲットだぜ！</p>
            <p>{pokeObj.id}</p>
            <p>{pokeObj.name}</p>
            <p>{pokeObj.type}</p>
        </Contents>
    )
}