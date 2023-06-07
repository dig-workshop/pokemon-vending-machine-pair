import styles from './HomeScreen.module.scss'
import Contents from '../../Contents'
import {cardPackages} from './CardPackages'

export default function HomeScreen() {
    return (
        <Contents>
            <h1 className={styles.title}>Pokemon Vending Machine</h1>

            {cardPackages.map(element => {
                return (
                    <div key={element.id}>
                        <p className={styles.title}>{element.namePrice}</p>
                        <img src={element.image}
                             alt={element.image}/>
                    </div>
                )
            })
            }
        </Contents>
    )
}