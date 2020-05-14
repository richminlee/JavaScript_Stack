const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;

app.listen( port, () => console.log(`Listening on port: ${port}`) );

class User {
    constructor(){
        this.name = faker.name.firstName();
    }
}
class Company{
    constructor(){
        this.name = faker.company.companyName();
    }
}
app.get("/api/users/new",(req, res) => {
    res.json(new User());
});
app.get("/api/companies/new",(req, res) => {
    res.json(new Company());
});
app.get("/api/users/company",(req, res) => {
    res.json([new Company(), new User()]);
});