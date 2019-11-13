const express = require('express')
const directoryController = require('../controllers/directory')
const router = express.Router();
// Our app.use in the last file forwards a request to our albums router.
// So this route actually handles `/albums` because it's the root route when a request to /albums is forwarded to our router.
router.get('/directory', directoryController.homepage)

// A route to handle requests to any individual album, identified by an album id
router.get('/directory/profile/:name', directoryController.showProfile)

router.get('/directory/specialties/:name', directoryController.showSpecialties)

router.post('/directory', directoryController.create)

router.put('/directory/profile/:name', directoryController.edit)

router.delete('/directory/profile/:name', directoryController.delete)

module.exports = router