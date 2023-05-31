import styles from './HomeScreen.module.scss'
import Contents from '../../Contents'
import {useState} from "react";


type PokeObj = {
    id: string,
    name: string,
    type: string,
}

export default function HomeScreen() {
    const [pokeObj, setPokeObj] = useState<PokeObj>({id: '', name: '', type: ''})

    function randomSelectPokemon() {
        setPokeObj({
            id: '#25',
            name: 'ピカチュウ',
            type: 'カミナリ'
        })
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