const firstQueue = require('../bull');
const {date_to_cron} = require('../date_parser');
module.exports =  SchedulerService = function (req_data) {

}

SchedulerService.prototype.scheduleJob =  async function (req){
  // console.log("hello");
//   const options = {
//   delay: 60000
// }
// await firstQueue.obliterate();
console.log(date_to_cron(req.body.date))
const job = firstQueue.add(req.body.payload, { repeat: { cron: date_to_cron(req.body.date) } });

firstQueue.process(async (job) => {
  console.log(job.data);
});
}