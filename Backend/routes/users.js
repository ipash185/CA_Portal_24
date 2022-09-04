const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
// router.get('/', (req, res) => { res.send("test") });

router.get('/login_check', async (req, res) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token, "fgrtfygh");
        let decoded = "";
        try {
            decoded = jwt.verify(token, process.env.JWT_KEY);
        } catch (err) {
            return res.status(403).json({
                message: "login failed at jwt",
            });
        }
        if (decoded) {
            console.log(decoded);
            const user = await User.findOne({ ca_id: decoded.ca_id });
            return res.status(200).json({
                message: "login check successful",
                user: user,
            });
        } else {
            return res.status(403).json({
                message: "login check failed",
            });
        }
    } catch (error) {
        return res.status(412).json({
            message: "some error occured " + error,
        });
    }

});

module.exports = router;