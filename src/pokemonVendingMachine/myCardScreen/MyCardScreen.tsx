import styles from './MyCardScreen.module.scss'
import Contents from "../../Contents";

export default function MyCardScreen() {
    return (
        <Contents>
            <h1 className={styles.myCardListTitle}>マイカードリスト</h1>
        </Contents>
    )
}