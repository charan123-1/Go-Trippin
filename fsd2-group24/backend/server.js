const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
async function main () {
    const connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true
     }
     
     try {
      await mongoose.connect(process.env.DATABASE_URL,connectionOptions)
      console.log(`Connected to MongoDB`)
     } catch (err) {
      console.log(`Couldn't connect: ${err}`)
     }
}
main()
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

const restaurentRouter = require('./routes/restaurentroutes')
const vizagmapsRouter = require('./routes/vizagmapsroutes')
const hydmapsRouter = require('./routes/hydmapsroutes')
const tirupatimapsRouter = require('./routes/tirupatimapsroutes')
const arakumapsRouter = require('./routes/arakumapsroutes')
const wglmapsRouter = require('./routes/wglmapsroutes')
const trekkingitemsRouter = require('./routes/trekkingroutes')
const skydivingitemsRouter = require('./routes/skydivingroutes')
const surfingitemsRouter = require('./routes/surfingroutes')
const cyclingitemsRouter = require('./routes/cyclingroutes')
const scubadivingitemsRouter = require('./routes/scubadivingroutes')
const swimmingitemsRouter = require('./routes/swimmingroutes')
const walletitemsRouter = require('./routes/walletsroutes')
const flashtorchesRouter = require('./routes/torchesroutes')
const chargeritemsRouter = require('./routes/chargersroutes')
const reviewRouter = require('./routes/reviewroutes')
const backpackItemsRouter = require('./routes/backpackItemsroutes')
const clothingRouter = require('./routes/clothingsroutes')
const productItemsRouter = require('./routes/productItemsroutes')
const medicationItemsRouter = require('./routes/medicationItemsroutes')
const ToiletriesItemsRouter = require('./routes/ToiletriesItemsroutes')
const skincareItemsRouter = require('./routes/skincareItemsroutes')
app.use('/todos', todoRouter)
app.use('/accommodation', accRouter)
app.use('/restaurent', restaurentRouter)
app.use('/vizagmaps', vizagmapsRouter)
app.use('/hydmaps', hydmapsRouter)
app.use('/tirupatimaps', tirupatimapsRouter)
app.use('/arakumaps', arakumapsRouter)
app.use('/wglmaps', wglmapsRouter)
app.use('/trekkingitems', trekkingitemsRouter)
app.use('/skydivingitems', skydivingitemsRouter)
app.use('/surfingitems', surfingitemsRouter)
app.use('/cyclingitems', cyclingitemsRouter)
app.use('/scubadivingitems', scubadivingitemsRouter)
app.use('/swimmingitems', swimmingitemsRouter)
app.use('/walletitems', walletitemsRouter)
app.use('/flashtorchitems', flashtorchesRouter)
app.use('/chargeritems', chargeritemsRouter)
app.use('/review', reviewRouter)
app.use('/backpack', backpackItemsRouter)
app.use('/clothing', clothingRouter)
app.use('/footwear', productItemsRouter)
app.use('/medication', medicationItemsRouter)
app.use('/toiletries', ToiletriesItemsRouter)
app.use('/skincare', skincareItemsRouter)
const port = process.env.PORT || 4000

if(process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"));
}
app.listen(port, () => console.log(`server is up and running at ${port}`));

module.exports = app; 