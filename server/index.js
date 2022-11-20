import express from "express";
import router from "./routes/route.js";
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import dotenv from 'dotenv';
import Connection from './database/db.js'
import path from 'path'
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 8000;

// app.get('/', (req, res) => {
//     res.send("Get")
// })

// app.post('/', (req, res) => {
//     res.send("Post")
// })

// app.get('/register', (req, res) => {
//     res.send("Register GET")
// })

// app.post('/register', (req, res) => {
//     res.send("Register POST")
// })

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use('/api', router);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// app.get('/menu/table/:id', (req, res) => {
//     const id = req.params.id;
//     // res.redirect(`/menu/table/${id}`);
//     res.sendFile(path.join(__dirname, "../client/public", "index.html"))
// });

// app.use(express.static(path.join(__dirname, "../client", "public")))

app.listen(PORT, () => {
    console.log("listening on http://localhost:8000")
})