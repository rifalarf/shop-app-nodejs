const mongoose = require ('mongoose');
const Product = require ('./models/product')

mongoose.connect('mongodb://localhost/shop_db').then((result) => {
    console.log('konek db kak');
}).catch((err) => {
    console.log('gagak konek', err);
    
});

const products = [
    {
        name: 'Roti Tawar',
        price: '20000',
        description: 'Roti tawar yang lembut dan enak untuk sarapan.',
        size: 'M'
    },
    {
        name: 'Kue Coklat',
        price: '35000',
        description: 'Kue coklat dengan lapisan coklat tebal dan lezat.',
        size: 'L'
    },
    {
        name: 'Croissant',
        price: '25000',
        description: 'Croissant renyah dengan mentega berkualitas tinggi.',
        size: 'S'
    },
    {
        name: 'Baguette',
        price: '30000',
        description: 'Baguette panjang dan renyah, cocok untuk hidangan Perancis.',
        size: 'XL'
    }
];

Product.insertMany(products).then((result) => {
    console.log('ditambahkan');
    
}).catch((err) => {
    console.log(err);
    
});