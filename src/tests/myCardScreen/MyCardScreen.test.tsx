import {screen} from '@testing-library/react'
import renderApplication from '../RenderApplication'
import AppPropsBuilder from '../../AppPropsBuilder'

describe('カードリスト画面', () => {
    test('カードリスト画面のページタイトルが表示されている', async () => {
        await renderApplication('/', (new AppPropsBuilder()).build())


        expect(screen.getByText('マイカードリスト')).toBeInTheDocument()
    })
})