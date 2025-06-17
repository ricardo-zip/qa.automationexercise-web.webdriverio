
import HomePage from '../../pages/home.page'
import ProductPage from '../../pages/product.page'

describe('Products', () => {

    it('Teste Case 12: Add Products in Cart', async () => {
        await HomePage.open()
        await HomePage.checkSliderCarouselIsVisible()
        await HomePage.clickBtnProducts()

        await ProductPage.searchProducts('Blue Top');
        await ProductPage.validateSearchedProductIsVisible('Blue Top');
        //continuar...
    })
})
