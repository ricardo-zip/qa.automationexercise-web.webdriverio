import LoginPage from '../../pages/login.page'
import HomePage from '../../pages/home.page'
import { generateUserData } from '../../utils/data/userFaker'

describe('User Registration', () => {

  let userfaker: ReturnType<typeof generateUserData>

  beforeEach(async () => {
    userfaker = generateUserData()
  })

  it('Teste Case 1: Register User', async () => {
    await HomePage.open()
    await HomePage.checkSliderCarouselIsVisible()
    await HomePage.clickBtnSignupLogin()
    await LoginPage.fillSignup(userfaker.name, userfaker.email)
    await LoginPage.fillAddressInfo()
    await LoginPage.clickBtnCreateAccount()
    await LoginPage.checkAccountCreated()
    await LoginPage.clickBtnContinue()
    await HomePage.checkLoggedUsernameIsVisible(userfaker.name)
    await HomePage.clickBtnDeleteAccount()
    await LoginPage.checkAccountDeleted()
  })
})
