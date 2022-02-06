const express = require('express')
const app = express();
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone:faker.phone.phoneNumber(),
        email:faker.internet.email(),
        password:faker.internet.password()

    }
    return newUser
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name:faker.company.companyName(),
        address:{
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state:faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
        }
    }
    return newCompany
}

app.get('/api/users/new',(req,res) => {
    res.json(createUser())
})

app.get('/api/companies/new',(req,res) => {
    res.json(createCompany())
})

app.get('/api/company',(req,res) => {
    const company = createCompany()
    const user = createUser()
    const allInfo = {
        user: user,
        company:company
    }
    res.json(allInfo)
})



app.listen(8000,() => console.log("listing on port 8000"))

