const app = require("./app");
const dotenv = require('dotenv');
const connectMongo = require("./config/db");
dotenv.config({path : './config.env'});

const PORT = process.env.RUNNING_PORT;
connectMongo();

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} PORT`);
})


