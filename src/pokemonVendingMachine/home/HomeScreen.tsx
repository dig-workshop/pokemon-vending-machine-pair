import styles from './HomeScreen.module.scss'
import Contents from '../../Contents'
import pack_image1 from '../images/pack_ver1.png'
import pack_image2 from '../images/pack_ver2.jpg'
import pack_image3 from '../images/pack_ver3.jpeg'
import pack_image4 from '../images/pack_ver4.jpg'
import pack_image5 from '../images/pack_ver5.jpeg'
import pack_image6 from '../images/pack_ver6.png'

export default function HomeScreen() {
    return (
        <Contents>
            <h1 className={styles.title}>Pokemon Vending Machine</h1>
            <img src={pack_image1}
                 alt={pack_image1}/>
            <p className={styles.title}> 拡張パック 20th Anniversary 10枚入り (¥260)</p>
            <img src={pack_image2}
                 alt={pack_image2}/>
            <p className={styles.title}>neo 金,銀,新世界へ・・・ (¥180)</p>
            <img src={pack_image3}
                 alt={pack_image3}/>
            <p className={styles.title}>さいはての攻防 拡張パック (¥290)</p>
            <img src={pack_image4}
                 alt={pack_image4}/>
            <p className={styles.title}>DP 時空の創造 (¥310)</p>
            <img src={pack_image5}
                 alt={pack_image5}/>
            <p className={styles.title}>ブラックコレクション拡張パック (¥170)</p>
            <img src={pack_image6}
                 alt={pack_image6}/>
            <p className={styles.title}>ソード&シールド Vmax ライジング 強化拡張パック (¥410)</p>

        </Contents>
    )
}