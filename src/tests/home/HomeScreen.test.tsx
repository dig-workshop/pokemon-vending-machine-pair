import {fireEvent, render, screen} from '@testing-library/react'
import renderApplication from '../RenderApplication'
import AppPropsBuilder from '../../AppPropsBuilder'
import HomeScreen from "../../pokemonVendingMachine/home/HomeScreen";

const mockNavigateSpy = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigateSpy,
}))

describe('', () => {
    test('購入画面のページタイトルが表示されている', async () => {
        await renderApplication('/', (new AppPropsBuilder()).build())


        expect(screen.getByText('Pokemon Vending Machine')).toBeInTheDocument()
    })



    test('全種類パッケージの名前と値段が表示されている', async () => {
        await renderApplication('/', (new AppPropsBuilder()).build())


        expect(screen.getByText('拡張パック 20th Anniversary 10枚入り')).toBeInTheDocument()
        expect(screen.getByText('neo 金,銀,新世界へ・・・')).toBeInTheDocument()
        expect(screen.getByText('さいはての攻防 拡張パック')).toBeInTheDocument()
        expect(screen.getByText('DP 時空の創造')).toBeInTheDocument()
        expect(screen.getByText('ブラックコレクション拡張パック')).toBeInTheDocument()
        expect(screen.getByText('ソード&シールド Vmax ライジング 強化拡張パック')).toBeInTheDocument()

        expect(screen.getByText('¥260')).toBeInTheDocument()
        expect(screen.getByText('¥180')).toBeInTheDocument()
        expect(screen.getByText('¥290')).toBeInTheDocument()
        expect(screen.getByText('¥310')).toBeInTheDocument()
        expect(screen.getByText('¥170')).toBeInTheDocument()
        expect(screen.getByText('¥410')).toBeInTheDocument()
    })

    test('全種類パッケージ写真のが表示されている', async () => {
        await renderApplication('/', (new AppPropsBuilder()).build())


        expect(screen.getByAltText('pack_ver1.png')).toBeInTheDocument()
        expect(screen.getByAltText('pack_ver2.jpg')).toBeInTheDocument()
        expect(screen.getByAltText('pack_ver3.jpeg')).toBeInTheDocument()
        expect(screen.getByAltText('pack_ver4.jpg')).toBeInTheDocument()
        expect(screen.getByAltText('pack_ver5.jpeg')).toBeInTheDocument()
        expect(screen.getByAltText('pack_ver6.png')).toBeInTheDocument()
    })

    test('任意のパック選択ボタンを押した時に開封画面が表示される', ()=> {
        render(<HomeScreen/>)

        fireEvent.click(screen.getByRole('button', {name: '¥260'}))

        expect(mockNavigateSpy).toHaveBeenCalledWith('/unpack')
    })
})
