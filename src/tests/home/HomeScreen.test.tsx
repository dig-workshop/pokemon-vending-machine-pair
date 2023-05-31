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
        test('ボタンを押したらIDが表示されること', async () => {

            await renderApplication('/', (new AppPropsBuilder()).build())

            clickButton()

            await waitFor(() => {
                expect(screen.getByText('#25')).toBeInTheDocument()
            })
        })

        test('ボタンを押したら名前が表示されること', async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())

            clickButton()

            await waitFor(() => {
                expect(screen.getByText('ピカチュウ')).toBeInTheDocument()
            })
        })

        test('ボタンを押したらタイプが表示されること', async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())

            clickButton()

            await waitFor(() => {
                expect(screen.getByText('カミナリ')).toBeInTheDocument()
            })
        })
    })
})
