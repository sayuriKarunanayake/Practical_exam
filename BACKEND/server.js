const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

//define connecting port
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

//cluster connecting url
const URL = process.env.MONGODB_URL;

//connect to mongoDB
mongoose.connect(URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//make db connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
});

//access routes
const userRouter = require("./routes/Users");
app.use("/user", userRouter);//1st parameter is the url name to call js file

//listen to port and show msg
app.listen(PORT, () => {
    console.log(`Server up and running on port: ${PORT}`)
})

