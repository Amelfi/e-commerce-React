import express from 'express'
import products  from './data/products.js'
// import connectDB from './config/db.js'
const app = express();
import dotenv from 'dotenv';

// connectDB();

dotenv.config();
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Api corriendo');
})
app.get('/api/products', (req, res)=>{
    res.json(products);
})
app.get('/api/product/:id', (req, res)=>{
    const product= products.find(pf => pf._id === req.params.id)
    res.json(product);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))