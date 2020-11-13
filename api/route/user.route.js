const router = require('express').Router();
const User = require('../models/user.schema');
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

//Users

/*  api/users
*   GET: Get all users
*/
router.get("/users", async(req, res) => {
    const users = await User.find();
    res.status(200).json(users);
})

/*  api/users
*   POST: Add new user
*/
router.post("/users", async(req, res) => {
    const data = req.body;
    data.cart = [];
    data.wishlist = [];
    const user = await new User(data).save();
    res.status(200).json(user);
})

//Single User

/*  api/users/:id
*   GET: Find a single user
*/
router.get("/users/:id", async(req, res) => {
    const id = req.params.id;
    const user = await User.findOne({_id: new ObjectId(id)})
    res.status(200).json(user);
});

/*  api/users/:id
*   PUT: Update a single user
*/
router.put("/users/:id", async(req, res) => {
    const users = {};
    const id = req.params.id;
    var fields = Object.keys(User.schema.paths);
    //validation -- do a for loop
    for(const field of fields){
        if(req.body[field]){
            users[field] = req.body[field];
        }
    }
    const user = await User.findOneAndUpdate({_id: new ObjectId(id)}, {$set: users}, {new: true});
    res.status(200).json(user);
});

/*  api/users/:id
*   DELETE: Delete a single user
*/
router.delete("/users/:id", async(req, res) => {
    const id = req.params.id;
    const user = await User.deleteOne({_id: new ObjectId(id)});
    res.status(200).json(user);
});

module.exports = router;