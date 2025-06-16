export class SignupForm {
    public get inputName() { return $('[data-qa="signup-name"]') }
    public get inputEmail() { return $('[data-qa="signup-email"]') }
    public get btnSignup() { return $('[data-qa="signup-button"]') }
    public get labelNewUserSignup() { return $('//h2[text()="New User Signup!"]') }

    public async fillSignupForm(name: string, email: string) {
        await expect(this.labelNewUserSignup).toBeDisplayed()
        await this.inputName.setValue(name)
        await this.inputEmail.setValue(email)
        await this.btnSignup.click()
    }

}