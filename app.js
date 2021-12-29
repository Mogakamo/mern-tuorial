const express = require('express')
const connectDB = require('./config/db')
var cors = require('cors');

const books = require('./routes/api/books');

const app = express()

// Connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }))

// Init middleware
app.use(express.json({extended: false}))

app.use('api/books', books)

app.get("/", (req, res) => res.send("Hello World!"))

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`))