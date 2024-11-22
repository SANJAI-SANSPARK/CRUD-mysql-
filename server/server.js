const express = require("express");
const mysql = require("mysql2"); // Notice we're using mysql2 instead of mysql
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",  // or 'student_user' if you created a new user
    password: "sanjai", // or 'student123' if you created a new user
    database: "student"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post("/add_user", (req, res) => {
    const sql = "INSERT INTO student_details (`name`,`email`,`age`,`gender`) VALUES (?, ?, ?, ?)";
    const values = [req.body.name, req.body.email, req.body.age, req.body.gender];
    
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: "Something unexpected has occurred", error: err.message });
        }
        return res.json({ success: "Student added successfully" });
    });
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});