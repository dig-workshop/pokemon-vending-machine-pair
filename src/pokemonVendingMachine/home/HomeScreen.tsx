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
            name: '',
            type: ''
        })
        // const randomNum = Math.floor(Math.random() * 1010) + 1
        const randomNum = Math.floor(Math.random())
        //https://pokeapi.co/api/v2/pokemon/25
        fetchPokemon(randomNum)
    }

    const fetchPokemon = (randomNum: number) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
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