const moment = require('moment');
module.exports = {
  date_to_cron : function(date){
    moment_date_obj = moment(new Date(date));
    is_valid = moment_date_obj.isValid();
    if (is_valid == true){
      minute = moment_date_obj.minute();
      hour = moment_date_obj.hour()
      date = moment_date_obj.date();
      month = moment_date_obj.month() + 1;
      console.log(minute,hour, date, month);
      return `${minute} ${hour} ${date} ${month} *`
    }
  },
  date_object: function(data){

  }
}