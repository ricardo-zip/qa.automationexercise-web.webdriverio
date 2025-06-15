export class AddressFormComponent {
    public get inputFirstName() { return $('#first_name') }
    public get inputLastName() { return $('#last_name') }
    public get inputCompany() { return $('#company') }
    public get inputAddress() { return $('#address1') }
    public get selectCountry() { return $('#country') }
    public get inputState() { return $('#state') }
    public get inputCity() { return $('#city') }
    public get inputZipCode() { return $('#zipcode') }
    public get inputMobileNumber() { return $('#mobile_number') }
    public get btnCreateAccount() { return $('[data-qa="create-account"]') }

    public async fillAddressInfo(firstName: string, lastName: string) {
        await this.inputFirstName.setValue(firstName)
        await this.inputLastName.setValue(lastName)
        await this.inputCompany.setValue('Test Company')
        await this.inputAddress.setValue('123 Main St')
        await this.selectCountry.selectByAttribute('value', 'United States')
        await this.inputState.setValue('State test')
        await this.inputCity.setValue('City test')
        await this.inputZipCode.setValue('0000001')
        await this.inputMobileNumber.setValue('11988887777')
    }

    public async submit() {
        await this.btnCreateAccount.click()
    }
}
