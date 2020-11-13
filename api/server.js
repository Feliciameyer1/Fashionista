var express = require('express');
var cors = require('cors');
require('./db/dbconnection')();

const userRoutes = require('./route/user.route');
const productRoutes = require('./route/product.route');
const cartRoutes = require('./route/cart.route');
const wishlistRoutes = require('./route/wishlist.route');
const authRoutes = require('./route/auth.route');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', wishlistRoutes);
app.use('/api', authRoutes);

// Local port.
const PORT = 8080;

app.listen(PORT, () => {
    console.log('Server Running');
})

app.get("/api/status", function (req, res) {
    res.status(200).json({status});
  });