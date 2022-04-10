const express = require ("expres");
const app = express();
const post = 3000;
app.get('/', (( req, res) => {
    res.sendFile(__dirname+'index.html')
}))
app.get('/user', (( req, res) => {
    res.sendFile(__dirname+'user.html')
}))
app.get('/help', (( req, res) => {
    res.sendFile(__dirname+'help.html')
}))
app.get('/news', (( req, res) => {
    res.sendFile(__dirname+'map.html')
}))
app.get('/contacts', (( req, res) => {
    res.sendFile(__dirname+'contacts.html')
}))

const colors = require("colors");
console.log(colors.purple(''));