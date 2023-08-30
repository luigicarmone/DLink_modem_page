const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");
const mysql = require("mysql");
const bcrypt = require("bcrypt"); 

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to the database");
    }
});

app.post('/signup', async (req, res) => { 
    const sql = "INSERT INTO login (`username`,`password`) VALUES(?, ?)";
    const formData = [
        req.body.username,
        await bcrypt.hash(req.body.password, 10) 
    ];

    db.query(sql, formData, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred' });
        }
        return res.status(201).json({ message: 'User created successfully' });
    });
});

app.post('/login', async (req, res) => { 
    const sql = "SELECT * FROM login WHERE `username` = ?";
    const formData = [
        req.body.username,
    ];

    db.query(sql, formData, async (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred' });
        }

        if (data.length > 0) {
            const user = data[0];
            const passwordMatch = await bcrypt.compare(req.body.password, user.password); 

            if (passwordMatch) {
                return res.status(200).json({ message: 'Success' });
            } else {
                return res.status(401).json({ message: 'Incorrect credentials' });
            }
        } else {
            return res.status(401).json({ message: 'User not found' });
        }
    });
});


app.use("/locales", express.static("locales"));
app.use(errorMiddleware);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});