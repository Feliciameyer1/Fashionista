const router = require('express').Router();
const User = require('../models/user.schema');

router.post("/login", async(req, res) => {
    const data = req.body;
    const user = await User.findOne({email: data.email, password: data.password});
    if(!user){
        res.status(401).json({error: 'Database Error: No User Found'});
    }
    //implement JSON web token here, Phase 3 Section 2 Lesson 4
    res.status(200).json(user);
})

module.exports = router;