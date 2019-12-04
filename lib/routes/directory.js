const express = require('express');
const directoryController = require('../controllers/directory');
const router = express.Router();

//routes to handle requests:
// Our app.use in the index.js forwards a request to our directory router.
// So this route actually handles `/directory` because it's the root route when a request to /directory is forwarded to our router.
router.get('/directory', directoryController.homepage)

router.get('/directory/profile/:lastname', directoryController.showProfile)

router.get('/directory/specialties/:name', directoryController.showSpecialties)

router.get('/directory/insurances/:type', directoryController.showInsurance)

router.post('/directory', directoryController.create)

router.put('/directory/:id', directoryController.update)

router.delete('/directory/:id', directoryController.delete)

module.exports = router;