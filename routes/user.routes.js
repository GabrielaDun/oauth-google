const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
    if(!req.user) {
        res.redirect('user/no-permission')
    } else {
        next()
    }
}

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {
    name : req.user.displayName,
    avatar: req.user.photos[0].value,
  });
});

router.get('/no-permission', isLogged, (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
    res.render('profil')
})

router.get('/settings', isLogged, (req, res) => {
    res.render('settings')
})

router.get('/logout', (req, res) => {
    res.render('logout')
})

module.exports = router;