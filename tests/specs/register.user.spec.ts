import LoginPage from '../pages/login.page'
import { userData } from '../data/userData'

describe('User Registration', () => {
  it('should register a new user successfully', async () => {
    await LoginPage.open()
    await LoginPage.registerNewUser(
      userData.name,
      userData.email,
      userData.firstName,
      userData.lastName
    )

    await expect(LoginPage.labelAccountCreated).toBeExisting()
    await LoginPage.clickBtnContinue()
    await expect(LoginPage.btnLogout).toBeExisting()
  })
})
