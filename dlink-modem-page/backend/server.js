const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");
const mysql = require("mysql");

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

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`username`,`password`) VALUES(?, ?)";
    const formData = [
        req.body.username,
        req.body.password
    ];

    db.query(sql, formData, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred' });
        }
        return res.status(201).json({ message: 'User created successfully' });
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `username` = (?) AND `password` = (?)";
    const formData = [
        req.body.username,
        req.body.password
    ];

    db.query(sql, formData, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred' });
        }
        if(data.length > 0) {
            return res.status(201).json({ message: 'Success' });
        } else {
            return res.status(401).json({ message: 'Error' });
        }
    });
});

app.use("/locales", express.static("locales"));
app.use(errorMiddleware);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
