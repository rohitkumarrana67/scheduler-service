const Queue = require('bull');
const firstQueue = new Queue('first-queue');

module.exports = firstQueue;