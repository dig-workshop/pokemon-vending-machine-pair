import pack_image1 from '../images/pack_ver1.png'
import pack_image2 from '../images/pack_ver2.jpg'
import pack_image3 from '../images/pack_ver3.jpeg'
import pack_image4 from '../images/pack_ver4.jpg'
import pack_image5 from '../images/pack_ver5.jpeg'
import pack_image6 from '../images/pack_ver6.png'

interface CardPackage {
    id: number
    namePrice: string,
    image: string
}

export const cardPackages : CardPackage[] = [
    {id: 1, namePrice: '拡張パック 20th Anniversary 10枚入り (¥260)', image: pack_image1},
    {id: 2, namePrice: 'neo 金,銀,新世界へ・・・ (¥180)', image: pack_image2},
    {id: 3, namePrice: 'さいはての攻防 拡張パック (¥290)', image: pack_image3},
    {id: 4, namePrice: 'DP 時空の創造 (¥310)', image: pack_image4},
    {id: 5, namePrice: 'ブラックコレクション拡張パック (¥170)', image: pack_image5},
    {id: 6, namePrice: 'ソード&シールド Vmax ライジング 強化拡張パック (¥410)', image: pack_image6},
]