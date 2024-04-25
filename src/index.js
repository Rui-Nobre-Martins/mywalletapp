const express = require("express");
const cors = require("cors");
const usersRouter = require("./routers/usersRouter");


const app = express();
app.use(cors());
const port = 3000;

app.use(cors());
app.use("/users", usersRouter);




app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
