
class CartPage {

    //Retorna todos os produtos no carrinho
    public get cartRows() { return $$('tr[id^="product-"]') }
    public get pageCart() { return $('#cart_items') }

    //Recebe o produto pela posição/index, monta o localizador e pega o nome/texto
    public async getProductNameByIndex(index: number) {
        const row = this.cartRows[index];
        const nameElement = await row.$('td.cart_description h4 a');
        await nameElement.waitForDisplayed();
        return (await nameElement.getText()).trim();
    }

    public async getProductPriceByIndex(index: number) {
        const row = this.cartRows[index];
        const price = await row.$('.cart_price p');
        await price.waitForDisplayed();
        return price.getText();
    }

    public async getProductQuantityByIndex(index: number) {
        const row = this.cartRows[index];
        const quantity = await row.$('.cart_quantity');
        await quantity.waitForDisplayed();
        return quantity.getText();
    }

    public async getProductTotalByIndex(index: number) {
        const row = this.cartRows[index];
        const total = await row.$('.cart_total_price');
        await total.waitForDisplayed();
        return total.getText();
    }

    public async checkPageCartIsVisible() {
        await this.pageCart.waitForDisplayed();
        await expect(this.pageCart).toBeDisplayed();
    }

    public async clickDeleteProduct(item: number) {
        const button = await $(`a[data-product-id="${item}"]`);
        await button.waitForExist();
        await button.click();
    }

    public async checkDeletedProduct(index: number) {
        const row = this.cartRows[index];
        const nameElement = await row.$('td.cart_description h4 a');
        return !(await nameElement.isDisplayed());
    }

    public async validateProduct(index: number, expectedName: string, expectedPrice: string, expectedQuantity: string, expectedPriceTotal: string) {
        await expect(await this.getProductNameByIndex(index)).toContain(expectedName);
        await expect(await this.getProductPriceByIndex(index)).toContain(expectedPrice);
        await expect(await this.getProductQuantityByIndex(index)).toContain(expectedQuantity);
        await expect(await this.getProductTotalByIndex(index)).toContain(`Rs. ${expectedPriceTotal}`);
    }
}

export default new CartPage();
