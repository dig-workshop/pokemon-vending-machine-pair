import {screen} from '@testing-library/react'
import renderApplication from '../RenderApplication'
import AppPropsBuilder from '../../AppPropsBuilder'

describe('', () => {
    test('購入画面のページタイトルが表示されている', async () => {
        await renderApplication('/', (new AppPropsBuilder()).build())


        expect(screen.getByText('Pokemon Vending Machine')).toBeInTheDocument()
    })
})