const path = require ('path')
const express = require ('express')
const app = express()
const mongoose = require ('mongoose');
const Product = require ('./models/product');
const { log, Console } = require('console');

// konek mongose
mongoose.connect('mongodb://localhost/shop_db').then((result) => {
    console.log('konek db kak');
}).catch((err) => {
    console.log('gagak konek', err);
    
});

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))

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

app.get('/products/create', (req, res) => {
    res.render('products/create')
})

app.post('/products', async (req,res) => {
    const product = new Product(req.body) 
    await product.save()
    console.log(product._id);
    
    res.redirect(`/products/${product._id}`)
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.render('products/edit', { product })
})


app.listen(3000, () => {
    console.log('konek http://localhost:3000');
    
})