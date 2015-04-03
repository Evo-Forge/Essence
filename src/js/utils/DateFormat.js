'use strict';

module.exports = function (type, value) {
  var ret = null, month = [], monthName = [], daysOfWeek = [];

    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    monthName["January"] = 1;
    monthName["February"] = 2;
    monthName["March"] = 3;
    monthName["April"] = 4;
    monthName["May"] = 5;
    monthName["June"] = 6;
    monthName["July"] = 7;
    monthName["August"] = 8;
    monthName["September"] = 9;
    monthName["October"] = 10;
    monthName["November"] = 11;
    monthName["December"] = 12;

    daysOfWeek[0] = "Sunday";
    daysOfWeek[1] = "Monday";
    daysOfWeek[2] = "Tuesday";
    daysOfWeek[3] = "Wednesday";
    daysOfWeek[4] = "Thursday";
    daysOfWeek[5] = "Friday";
    daysOfWeek[6] = "Saturday";

  if (type === 'day') {
    ret = daysOfWeek[value];
  }

  if (type === 'month') {
    ret = month[value];
  }

  if (type === 'date') {
    var month = monthName[value.month],
        day = value.day,
        year = value.year;

    ret = month + "/" + day + "/" + year;
  }

  return ret;
};
