const express = require('express');

const router = express();

router.get('/', (req, res) => {
    res.send('tudo ok');
});

module.exports = router;