import Page from '../pages/page';

class HomePage extends Page {

    public get btnSignupLogin() { return $('.fa-lock') }
    public get labelUserLogged() { return $('a:has(i.fa-user) b') }
    public get btnDeleteAccount() { return $('a[href="/delete_account"]') }
    public get sliderCarousel() { return $('#slider-carousel') }

    public async clickBtnSignupLogin() {
        await this.btnSignupLogin.click()
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

    public open() {
        return super.open()
    }

}
export default new HomePage()