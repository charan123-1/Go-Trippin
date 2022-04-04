const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
mongoose.connect(process.env.DATABASE_URL)
mongoose.Promise = global.Promise;

//Database connection
const db = mongoose.connection
db.on('error', (error) => { console.log(error) })
db.once('open', () => { console.log("database connection established...") })

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

//middlewares
app.use(express.json())
app.use(cors())


//routes
const todoRouter = require('./routes/todoroutes')
const accRouter = require('./routes/accroutes')
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/postroutes")
app.use('/todos', todoRouter)
app.use('/accommodation', accRouter)
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/upload", postRoutes);

app.listen(4000, () => console.log("server is up and running"));