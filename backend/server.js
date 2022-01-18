const express = require("express");
const app = express();
const connect = require("./config/db")
const cors = require("cors")
const userController = require("./controllers/user.controller")
const bikeController = require("./controllers/bike.controller")
const {register,login} = require("./controllers/auth.controller")
app.get("/",(req,res)=>{
    res.send("Hllo")
})
app.use(cors());
app.use(express.json());
app.post("/register",register)
app.post("/login",login);
app.use("/user",userController)
app.use("/bike",bikeController)


app.listen(3001,(req,res)=>{
    connect()
    console.log("Server started on port 3001.")
})