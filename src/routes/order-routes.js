const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order-controller');

router.get('/', orderController.listOrder);
router.post('/', orderController.createOrder);

module.exports = router;
