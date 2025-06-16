import { faker } from '@faker-js/faker'

export function generateUserData() {
    return {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            password: 'Teste@123',
            day: '15',
            month: 'September',
            year: '2001',
            gender: faker.helpers.arrayElement(['Mr', 'Mrs']),
            company: faker.company.name(),
            address1: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: 'United States',
            state: faker.location.state(),
            city: faker.location.city(),
            zip: faker.location.zipCode(),
            mobile: faker.phone.number('119########' as any),
        },
    }
}
