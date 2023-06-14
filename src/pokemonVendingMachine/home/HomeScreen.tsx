import styles from './HomeScreen.module.scss'
import Contents from '../../Contents'
import {cardPackages} from './CardPackages'
import {useNavigate} from "react-router-dom";

export default function HomeScreen() {
    const navigate = useNavigate()
    return (
        <Contents>
            <h1 className={styles.title}>Pokemon Vending Machine</h1>

            {cardPackages.map(element => {
                return (
                    <div key={element.id}>
                        <p>{element.name}</p>
                        <button
                            className={styles.title}
                            onClick={e => {
                                navigate('/unpack')
                            }}
                        >{element.price}</button>
                        <img src={element.image}
                             alt={element.image}/>
                    </div>
                )
            })
            }
        </Contents>
    )
}
