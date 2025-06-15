export class SignupFormComponent {
    public get inputName() { return $('[data-qa="signup-name"]') }
    public get inputEmail() { return $('[data-qa="signup-email"]') }
    public get btnSignup() { return $('[data-qa="signup-button"]') }

    public async fillSignupForm(name: string, email: string) {
        await this.inputName.setValue(name)
        await this.inputEmail.setValue(email)
        await this.btnSignup.click()
    }
}
