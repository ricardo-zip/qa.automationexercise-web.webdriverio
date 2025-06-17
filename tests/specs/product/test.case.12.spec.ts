import CartPage from '../../pages/cart.page'
import HomePage from '../../pages/home.page'
import ProductPage from '../../pages/product.page'

describe('Products', () => {

    it('Teste Case 12: Add Products in Cart', async () => {
        await HomePage.open()
        await HomePage.checkSliderCarouselIsVisible()
        await HomePage.clickBtnProducts()
        await ProductPage.addProductToCart(0, 1);
        await ProductPage.clickContinueShopping();
        await ProductPage.addProductToCart(1, 2);
        await ProductPage.clickViewCart()

        await CartPage.validateProduct(0, 'Blue Top', '500', '1', '500')
        await CartPage.validateProduct(1, 'Men Tshirt', '400', '1', '500')
    })
})
