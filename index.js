const path = require ('path')
const express = require ('express')
const app = express()
const mongoose = require ('mongoose')

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

app.listen(3000, () => {
    console.log('konek http://localhost:3000');
    
})