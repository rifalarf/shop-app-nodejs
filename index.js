const path = require ('path')
const express = require ('express')
const app = express()
const mongoose = require ('mongoose');
const Product = require ('./models/product')

// konek mongose
mongoose.connect('mongodb://localhost/shop_db').then((result) => {
    console.log('konek db kak');
}).catch((err) => {
    console.log('gagak konek', err);
    
});

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('konek kak')
})

app.get('/', async (req, res) => {
    res.send('konek kak')
    
})

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', {products})
    
})

app.listen(3000, () => {
    console.log('konek http://localhost:3000');
    
})