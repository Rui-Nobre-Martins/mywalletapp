require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const usersRouter = require("./routers/usersRouter");
const walletRouter = require("./routers/walletRouter");
const transactionRouter = require("./routers/transactionRouter");


const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
 };


app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


app.use("/users", usersRouter);
app.use("/wallet", walletRouter);
app.use("/transactions", transactionRouter);


app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
