
import { generateUserData } from '../data/userFaker'

export class AddressForm {
    public get inputFirstName() { return $('#first_name') }
    public get inputLastName() { return $('#last_name') }
    public get inputCompany() { return $('#company') }
    public get inputAddress1() { return $('#address1') }
    public get inputAddress2() { return $('#address2') }
    public get selectCountry() { return $('#country') }
    public get inputState() { return $('#state') }
    public get inputCity() { return $('#city') }
    public get inputZipCode() { return $('#zipcode') }
    public get inputMobileNumber() { return $('#mobile_number') }
    public get labelEnterAccountInformation() { return $('h2 > b') }
    public get radioMrs() { return $('#id_gender2') }
    public get radioMr() { return $('#id_gender1') }
    public get inputPassword() { return $('[data-qa="password"]') }
    public get selectDay() { return $('select[data-qa="days"]') }
    public get selectMonth() { return $('select[data-qa="months"]') }
    public get selectYear() { return $('select[data-qa="years"]') }
    public get checkboxNewsletter() { return $('#newsletter') }
    public get checkboxOffers() { return $('#optin') }

    public async fillAddressInfo() {
        const userData = generateUserData()

        await this.labelEnterAccountInformation.isDisplayed()

        if (userData.address.gender === 'Mrs') {
            await this.radioMrs.click()
        } else {
            await this.radioMr.click()
        }

        await this.inputPassword.setValue(userData.address.password)
        await this.selectDay.selectByVisibleText(userData.address.day)
        await this.selectMonth.selectByVisibleText(userData.address.month)
        await this.selectYear.selectByVisibleText(userData.address.year)
        await this.checkboxOffers.click()
        await this.inputFirstName.setValue(userData.address.firstName)
        await this.inputLastName.setValue(userData.address.lastName)
        await this.inputCompany.setValue(userData.address.company)
        await this.inputAddress1.setValue(userData.address.address1)
        await this.inputAddress2.setValue(userData.address.address2)
        await this.selectCountry.selectByVisibleText(userData.address.country)
        await this.inputState.setValue(userData.address.state)
        await this.inputCity.setValue(userData.address.city)
        await this.inputZipCode.setValue(userData.address.zip)
        await this.inputMobileNumber.setValue(userData.address.mobile)
    }
}