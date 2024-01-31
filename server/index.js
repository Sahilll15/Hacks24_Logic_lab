const express = require('express');
const authRoutes = require('./routes/auth.routes');
const projectRoutes = require('./routes/project.routes')

const app = express();
require('dotenv').config()
const cors = require('cors')

const mongoose = require('mongoose');

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})


mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('DB Connected'));


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/project', projectRoutes);


// app.post('/api/create-payment-session', async (req, res) => {
//     const { product } = req.body;
//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: [
//                 {
//                     price_data: {
//                         currency: 'inr',
//                         product_data: {
//                             name: product.name,
//                         },
//                         unit_amount: product.price * 100,
//                     },
//                     quantity: product.quantity,
//                 },
//             ],
//             mode: 'payment',
//             success_url: `${process.env.CLIENT_URL}/success`,
//             cancel_url: `${process.env.CLIENT_URL}/cancel`,
//         });

//         res.json({ id: session.id });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// })
