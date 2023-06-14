import {UnpackScreen} from "./UnpackScreen";
import {fireEvent, render, screen} from "@testing-library/react";

const mockNavigateSpy = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigateSpy,
}))

describe('開封画面', () => {
    describe('関さんがパック選択画面を開いている場合', () => {
        it('5体のポケモンの名前が見える', () => {
            // GIVEN
            render(<UnpackScreen/>)

            // WHEN

            // THEN
            expect(screen.getByText('bulbasaur')).toBeInTheDocument()
            expect(screen.getByText('ivysaur')).toBeInTheDocument()
            expect(screen.getByText('venusaur')).toBeInTheDocument()
            expect(screen.getByText('charmander')).toBeInTheDocument()
            expect(screen.getByText('charmeleon')).toBeInTheDocument()
        });

        it('タイトルが見える', ()=> {
            render(<UnpackScreen/>)

            expect(screen.getByText('Pokemon Vending Machine')).toBeInTheDocument()
        })

        it('Buy New Pack ボタンを押したら、パック選択画面に戻る', () => {
            // GIVEN
            render(<UnpackScreen/>)

            // WHEN
            fireEvent.click(screen.getByRole('button', {name: 'Buy New Pack'}))

            // THEN
            expect(mockNavigateSpy).toHaveBeenCalledWith('/')
        });
    });
})

