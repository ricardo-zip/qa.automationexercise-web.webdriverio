import { SignupForm } from '../utils/helpers/fillSignupForm';
import { AddressForm } from '../utils/helpers/fillAdressForm';
import Page from '../pages/page';

class LoginPage extends Page {
    public signupForm = new SignupForm()
    public addressForm = new AddressForm()

    public get labelAccountCreated() { return $('[data-qa="account-created"]') }
    public get btnContinue() { return $('[data-qa="continue-button"]') }
    public get labelAccountDeleted() { return $('[data-qa="account-deleted"]') }
    public get btnCreateAccount() { return $('[data-qa="create-account"]') }

    public async fillSignup(name: string, email: string) {
        await this.signupForm.fillSignupForm(name, email)
    }

    public async fillAdressInfo() {
        await this.addressForm.fillAddressInfo()
    }

    public async clickBtnCreateAccount() {
        await this.btnCreateAccount.click()
    }

    public async clickBtnContinue() {
        await this.btnContinue.click()
    }

    public async checkAccountCreated() {
        await expect(this.labelAccountCreated).toBeExisting()
    }

    public async checkAccountDeleted() {
        await expect(this.labelAccountDeleted).toBeExisting()
    }
}

export default new LoginPage()
