import {act, screen, waitFor} from '@testing-library/react'
import renderApplication from '../RenderApplication'
import AppPropsBuilder from '../../AppPropsBuilder'
import userEvent from "@testing-library/user-event";

describe('', () => {
    test('購入画面のページタイトルが表示されている', async () => {
        await renderApplication('/', (new AppPropsBuilder()).build())


        expect(screen.getByText('Pokemon Vending Machine')).toBeInTheDocument()
    })

    test('ポケモンをゲットするボタンがあること', async () => {
        await renderApplication('/', (new AppPropsBuilder()).build())

        expect(screen.getByText('ポケモンゲットだぜ！')).toBeInTheDocument()
    })

    describe('ボタンを押した時', () => {
        const clickButton = () => {
            const buttonElement = screen.getByText('ポケモンゲットだぜ！')
            userEvent.click(buttonElement)

        }

        test('ボタンを押したらapiから取得した名前の情報を表示すること', async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())

            clickButton()

            await waitFor(() => {
                expect(screen.getByText("pikachu")).toBeInTheDocument()
            })
        })

        test('ボタンを押したらapiから取得したidの情報を表示すること', async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())

            clickButton()

            await waitFor(() => {
                expect(screen.getByText("#25")).toBeInTheDocument()
            })
        })

        test('ボタンを押したらapiから取得したTypeの情報を表示すること', async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())

            clickButton()

            await waitFor(() => {
                expect(screen.getByText("electric")).toBeInTheDocument()
            })
        })
    })
})
