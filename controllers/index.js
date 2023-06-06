const router = require('express').Router();

// see localhost:3001/
router.get('/', (req, res) => {
    res.json('Hola');
})

module.exports = router;