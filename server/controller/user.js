const bcrypt = require('bcrypt');
const User = require('./../models/user');

exports.addUser = async (req, res) => {
    if (await User.findOne({ email: req.body.email})){
        return res.sendStatus(409);
    }
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const newUser = req.body;
        newUser.password = hash;
        const user = await User.create(newUser);
        req.session.uid = user._id;
        res.status(201); 
        res.send({username: user.username});
      } catch (e) {
        res.sendStatus(500);
      }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        const validatedPass = await bcrypt.compare(req.body.password, user.password);
        if (!validatedPass) return res.sendStatus(409);
        req.session.uid = user._id;
        res.status(200);
        res.send({username: user.username});

    } catch (e) {
        res.sendStatus(401);
    }
}

exports.logout = (req, res) => {
    req.session.destroy((error) => {
        if (error) {
          res
            .status(500)
            .send(error);
        } else {
          res.clearCookie('sid');
          res.status(200).send();
        }
      });
}