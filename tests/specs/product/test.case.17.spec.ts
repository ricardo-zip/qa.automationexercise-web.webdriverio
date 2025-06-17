import CartPage from '../../pages/cart.page'
import HomePage from '../../pages/home.page'
import ProductPage from '../../pages/product.page'

describe('Products', () => {

    it('Test Case 17: Remove Products From Cart', async () => {
        await HomePage.open()
        await HomePage.checkSliderCarouselIsVisible()

        await ProductPage.addProductToCart(0, 1)
        await ProductPage.clickContinueShopping()
        await ProductPage.addProductToCart(1, 2)
        await ProductPage.clickViewCart()
        await CartPage.checkPageCartIsVisible()

        await CartPage.validateProduct(0, 'Blue Top', '500', '1', '500')
        await CartPage.validateProduct(1, 'Men Tshirt', '400', '1', '400')

        await CartPage.clickDeleteProduct(1)
        await CartPage.checkDeletedProduct(1)
        
    })
})
