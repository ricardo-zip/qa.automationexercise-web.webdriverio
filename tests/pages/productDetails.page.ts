
class ProductDetails {

    public get PageProductDetails() { return $('.product-details') }
    public get btnAddToCart() { return $('button.btn.btn-default.cart') }

    public async checkProductsDetailsPageIsVisible() {
        await expect(this.PageProductDetails).toBeDisplayed()
    }

    public async setQuantityProducts(quantity: number): Promise<void> {
        const inputQuantity = await $('#quantity');
        await inputQuantity.waitForDisplayed();
        await inputQuantity.setValue(quantity.toString());
    }

    public async clickAddToCart() {
        await this.btnAddToCart.click()
    }

}

export default new ProductDetails()