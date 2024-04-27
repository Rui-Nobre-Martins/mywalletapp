const express = require("express");
const cors = require("cors");
const usersRouter = require("./routers/usersRouter");


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());



app.use("/", usersRouter);
// app.use("/wallet", walletRouter);
// app.use("/transactions", transactionsRouter);



app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
