import CartPage from '../../pages/cart.page'
import HomePage from '../../pages/home.page'
import ProductPage from '../../pages/product.page'
import ProductDetailsPage from '../../pages/productDetails.page'


describe('Products', () => {

    it('Test Case 13: Verify Product quantity in Cart', async () => {
        await HomePage.open()
        await HomePage.checkSliderCarouselIsVisible()

        await HomePage.clickViewProduct('1')
        await ProductDetailsPage.checkProductsDetailsPageIsVisible()

        await ProductDetailsPage.setQuantityProducts(4)

        await ProductDetailsPage.clickAddToCart()

        await ProductPage.clickViewCart()

        await CartPage.validateProduct(0, 'Blue Top', '500', '4', '2000')
    })
})
