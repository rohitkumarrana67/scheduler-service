const BullQueue = require('../bull')
const SingleTimeJobProducer = function(payload){
  this.payload = payload
}

SingleTimeJobProducer.prototype.producer = async function(payload){
  const job = await BullQueue.add(payload);
  return job
}