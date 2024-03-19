const express = require('express')
const mongoose = require('mongoose');
const app = express()
const Product = require('./models/product.model.js')
const productRoute = require('./routers/product.route.js')

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send('Hello from Node API');
});


mongoose.connect("mongoURL")
.then(() => {
    console.log('Connected to database!')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
})
.catch(() => {
    console.log('Could not connect to the database')
});