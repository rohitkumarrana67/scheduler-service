const Queue = require('bull');
const BullQueue = new Queue('first-queue');

module.exports = BullQueue;