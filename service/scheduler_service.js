const firstQueue = require('../bull');
module.exports =  SchedulerService = function (req_data) {

}

SchedulerService.prototype.scheduleJob =  async function (){
  console.log("hello");
//   const options = {
//   delay: 60000
// }
await firstQueue.obliterate();
// const job = firstQueue.add({data: 'something'}, options);

// firstQueue.process(async (job) => {
//   console.log(job.data);
// });
}