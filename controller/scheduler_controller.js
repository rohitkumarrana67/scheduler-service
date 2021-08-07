const SchedulerService = require('../service/scheduler_service');

module.exports = {
  scheduleJob : (req, res) => {
    scheduler_service = new SchedulerService()
    scheduler_service.scheduleJob()
  }
}