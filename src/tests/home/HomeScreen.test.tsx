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
        let  spyFloor: any
        beforeEach(() => {
            spyFloor = jest.spyOn(Math, 'floor')
            spyFloor.mockReturnValue(25)

        })
        afterEach(() => {
            spyFloor.mockRestore()
        })
        test('ボタンを押したらapiから取得した名前の情報を表示すること', async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())
            await act(()=> {
                clickButton()
            })
            await waitFor(() => {
                expect(screen.getByText("pikachu")).toBeInTheDocument()
            })
        })

        test('ボタンを押したらapiから取得したidの情報を表示すること', async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())
            await act(()=> {
                clickButton()
            })
            await waitFor(() => {
                expect(screen.getByText("#25")).toBeInTheDocument()
            })
        })

        test('ボタンを押したらapiから取得したTypeの情報を表示すること', async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())
            await act(()=> {
                clickButton()
            })
            await waitFor(() => {
                expect(screen.getByText("electric")).toBeInTheDocument()
            })
        })
        it("Math randomを呼んでいること", async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())
            const spyRandom = jest.spyOn(Math, 'random')

            await act(() => {
                clickButton()
            })
            expect(spyRandom).toHaveBeenCalled()

            spyRandom.mockRestore()
        })

        it("Math floorを呼んでいること", async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())

            await act(() => {
                clickButton()
            })
            expect(spyFloor).toHaveBeenCalled()
        })

        it("randomな数字でapiのレスポンスを受け取っていること", async () => {
            await renderApplication('/', (new AppPropsBuilder()).build())
            spyFloor.mockReturnValue(1010)
            await act(() => {
                clickButton()
            })
            await waitFor(() => {
                expect(screen.getByText("iron-leaves")).toBeInTheDocument()
            })
            spyFloor.mockRestore()

            spyFloor = jest.spyOn(Math, 'floor')
            spyFloor.mockReturnValue(1)
            await act(() => {
                clickButton()
            })
            await waitFor(() => {
                expect(screen.getByText("bulbasaur")).toBeInTheDocument()
            })

            spyFloor.mockRestore()
        })
    })
})
