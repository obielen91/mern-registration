const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');


router.post('/', eventController.create);
router.get('/', eventController.index);
router.get('/delete/:id', eventController.delete);
router.get('/edit/:id', eventController.editRegistration);
router.post('/edit/:id', eventController.update);

module.exports = router;


