const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req,res)=>{
    res.send("now Path = '/'");
})

app.listen(PORT, ()=>{
    console.log(`LAMAH BACK_END SERVER RUNNING : http://localhost:${PORT}`);
})