class ProductPage {

    public get btnContinueShopping() { return $('.btn.btn-success.close-modal'); }
    public get btnViewCart() { return $('a*=View Cart') }
    public get products() { return $$('.single-products') }
    public get titleAllProducts() { return $('.title.text-center') }
    public get inputSearchProducts() { return $('#search_product') }
    public get btnSearchProducts() { return $('#submit_search') }

    public async checkAllProducsIsVisible() {
        await expect(this.titleAllProducts).toBeDisplayed();
    }

    public async searchProducts(product: string) {
        await this.inputSearchProducts.setValue(product)
        await this.btnSearchProducts.click()
    }

    public async validateSearchedProductIsVisible(productName: string) {
        const product = await $(`.productinfo.text-center p=${productName}`);
        await product.waitForDisplayed()
        await expect(product).toBeDisplayed()
    }

    public async hoverOnProduct(index: number) {
        const product = this.products[index];
        await product.scrollIntoView();
        await product.moveTo();
    }

    public async clickAddToCart(productId: string | number) {
        const button = await $(`a.add-to-cart[data-product-id="${productId}"]`);
        await button.waitForExist();
        await button.click();
    }

    //pega o elementro do nome do produto
    public async getProductName(index: number) {
        const product = this.products[index];
        const nameElement = await product.$('p');
        await nameElement.waitForExist();
        return nameElement.getText();
    }

    //pega o elemento de preço
    public async getProductPrice(index: number) {
        const product = this.products[index];
        const priceElement = await product.$('h2');
        await priceElement.waitForDisplayed();
        return await priceElement.getText();
    }

    public async clickContinueShopping() {
        await this.btnContinueShopping.waitForClickable();
        await this.btnContinueShopping.click();
    }

    public async clickViewCart() {
        await this.btnViewCart.waitForExist();
        await this.btnViewCart.click();
    }

    public async addProductToCart(index: number, productId: number) {
        await this.hoverOnProduct(index);
        await this.clickAddToCart(productId);
    }
}

export default new ProductPage();
