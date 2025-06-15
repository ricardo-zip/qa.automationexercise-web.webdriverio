import { SignupFormComponent } from '../components/signupForm.component';
import { AddressFormComponent } from '../components/addressForm.component';
import Page from '../pages/page';

class LoginPage extends Page {
    public signupForm = new SignupFormComponent()
    public addressForm = new AddressFormComponent()

    public get btnSignupLogin() { return $('.fa-lock') }
    public get radioMrs() { return $('#id_gender2') }
    public get inputPassword() { return $('[data-qa="password"]') }
    public get selectDay() { return $('select[data-qa="days"]') }
    public get selectMonth() { return $('select[data-qa="months"]') }
    public get selectYear() { return $('select[data-qa="years"]') }
    public get labelAccountCreated() { return $('[data-qa="account-created"]') }
    public get btnContinue() { return $('[data-qa="continue-button"]') }
    public get btnLogout() { return $('a[href="/logout"]') }


    public async registerNewUser(name: string, email: string, firstName: string, lastName: string) {
        await this.btnSignupLogin.click()
        await this.signupForm.fillSignupForm(name, email)
        await this.radioMrs.click()
        await this.inputPassword.setValue('Teste@123')
        await this.selectDay.selectByVisibleText('15')
        await this.selectMonth.selectByVisibleText('September')
        await this.selectYear.selectByVisibleText('2001')
        await this.addressForm.fillAddressInfo(firstName, lastName)
        await this.addressForm.submit()
    }

    public async clickBtnContinue() {
        await this.btnContinue.click()
    }

    public open() {
        return super.open()
    }
}

export default new LoginPage()
