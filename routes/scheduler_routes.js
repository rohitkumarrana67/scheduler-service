const express = require('express');
const router = express.Router();
const scheduleController = require('../controller/scheduler_controller');

router.post('/schedule',scheduleController.scheduleJob)

module.exports = router;