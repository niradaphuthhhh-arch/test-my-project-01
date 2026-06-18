const expree = require("express");
const path = require(path);
const app =expree();

app.use(expree.json());

app.get("/students",(rep, res)=>{
    res.json([
        {id:1, name: "Nirada"}
    ])
})

app.listen(3000,()=>{
    console.log("Server started");
})
