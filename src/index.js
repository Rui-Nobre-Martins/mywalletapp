const express = require("express");
const cors = require("cors");


const usersRouter = require("./routers/usersRouter");
const walletRouter = require("./routers/walletRouter");
const transactionRouter = require("./routers/transactionRouter");


const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());


app.use("/users", usersRouter);
app.use("/wallet", walletRouter);
app.use("/transactions", transactionRouter);


app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
