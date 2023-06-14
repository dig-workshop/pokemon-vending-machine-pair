import pack_image1 from '../images/pack_ver1.png'
import pack_image2 from '../images/pack_ver2.jpg'
import pack_image3 from '../images/pack_ver3.jpeg'
import pack_image4 from '../images/pack_ver4.jpg'
import pack_image5 from '../images/pack_ver5.jpeg'
import pack_image6 from '../images/pack_ver6.png'

interface CardPackage {
    id: number
    price: string,
    name: string,
    image: string
}

export const cardPackages : CardPackage[] = [
    {id: 1, price: '¥260', name: '拡張パック 20th Anniversary 10枚入り', image: pack_image1},
    {id: 2, price: '¥180', name: 'neo 金,銀,新世界へ・・・', image: pack_image2},
    {id: 3, price: '¥290', name: 'さいはての攻防 拡張パック', image: pack_image3},
    {id: 4, price: '¥310', name: 'DP 時空の創造', image: pack_image4},
    {id: 5, price: '¥170', name: 'ブラックコレクション拡張パック', image: pack_image5},
    {id: 6, price: '¥410', name: 'ソード&シールド Vmax ライジング 強化拡張パック', image: pack_image6},
]
