const express = require ("express");
const app = express();
const port = 3000;
app.get('/index', (( req, res) => {
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
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
