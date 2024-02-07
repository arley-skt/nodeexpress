import express from "express"

const app = express();

app.get("/", (req, res)=>{
 res.send("Node express js");
});

export default app;