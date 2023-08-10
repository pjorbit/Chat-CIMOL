require("dotenv").config();
const app = require('../src/api');

app.use((req, resp, next) => {
    next();
})
console.log(process.env.API_PORT);
let port = process.env.API_PORT || 3001;
app.listen(port);

console.log(`Listening on ${port}`);