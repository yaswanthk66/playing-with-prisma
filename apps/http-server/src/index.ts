import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hi there")
})

app.post("/signup", async (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await client.user.create({
        data: {
            email: email,
            password: password
        }
    })

    res.json({
        "message": "sucessfully signed up",
        "id": user.id
    })
})
app.listen(3002);
