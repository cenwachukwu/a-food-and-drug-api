const express = require('express')
const directoryController = require('../controllers/directory')
const router = express.Router();
// Our app.use in the last file forwards a request to our albums router.
// So this route actually handles `/albums` because it's the root route when a request to /albums is forwarded to our router.
router.get('/', directoryController.homepage)

// A route to handle requests to any individual album, identified by an album id
router.get('/profile/:name', directoryController.showProfile)

router.get('/specialties/:name', directoryController.showSpecialties)

router.get('/insurances/:type', directoryController.showInsurance)

router.post('/', directoryController.create)

// router.put('/directory/profile/:name', directoryController.edit)

router.put('/update/:id', directoryController.update)

router.delete('/id/:id', directoryController.delete)

module.exports = router;
