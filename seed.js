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
        category: 'Bakery'
    },
    {
        name: 'Kue Coklat',
        price: '35000',
        description: 'Kue coklat dengan lapisan coklat tebal dan lezat.',
        category: 'Dessert'
    },
    {
        name: 'Croissant',
        price: '25000',
        description: 'Croissant renyah dengan mentega berkualitas tinggi.',
        category: 'Pastry'
    },
    {
        name: 'Baguette',
        price: '30000',
        description: 'Baguette panjang dan renyah, cocok untuk hidangan Perancis.',
        category: 'Bread'
    },
    {
        name: 'Cheesecake',
        price: '45000',
        description: 'Cheesecake lembut dengan topping buah segar.',
        category: 'Dessert'
    },
    {
        name: 'Donat',
        price: '15000',
        description: 'Donat lembut dengan taburan gula halus.',
        category: 'Bakery'
    },
    {
        name: 'Eclair',
        price: '27000',
        description: 'Eclair dengan isian krim vanila dan lapisan coklat.',
        category: 'Pastry'
    },
    {
        name: 'Focaccia',
        price: '22000',
        description: 'Roti Italia dengan minyak zaitun dan rempah-rempah.',
        category: 'Bread'
    },
    {
        name: 'Tiramisu',
        price: '40000',
        description: 'Tiramisu klasik dengan kopi dan krim mascarpone.',
        category: 'Dessert'
    },
    {
        name: 'Bagel',
        price: '18000',
        description: 'Bagel empuk dengan topping biji wijen.',
        category: 'Bread'
    }
];

Product.insertMany(products)
    .then((result) => {
        console.log('Products inserted:', result);
    })
    .catch((err) => {
        console.error('Error inserting products:', err);
    });
