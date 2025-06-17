import Page from '../pages/page';

class HomePage extends Page {

    public get btnSignupLogin() { return $('.fa-lock') }
    public get labelUserLogged() { return $('a:has(i.fa-user) b') }
    public get btnDeleteAccount() { return $('a[href="/delete_account"]') }
    public get sliderCarousel() { return $('#slider-carousel') }
    public get btnProducts() { return $('a[href="/products"]') }
    public get btnCart() { return $('a[href="/view_cart"]') }

    public async clickBtnSignupLogin() {
        await this.btnSignupLogin.click()
    }

    public async clickBtnProducts() {
        await this.btnProducts.click()
    }

    public async clickBtnDeleteAccount() {
        await this.btnDeleteAccount.click()
    }

    public async checkLoggedUsernameIsVisible(name: string) {
        await expect(this.labelUserLogged).toHaveText(name);
    }

    public async checkSliderCarouselIsVisible() {
        await expect(this.sliderCarousel).toBeDisplayed()
    }
    public async clickViewProduct(productId: string) {
        const button = await $(`a[href="/product_details/${productId}"]`);
        await button.waitForExist();
        await button.click();
    }

    public async clickBtnCart() {
        await this.btnCart.click()
    }

    public open() {
        return super.open()
    }

}
export default new HomePage()