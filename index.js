const addDays = require("date-fns/addDays");

function daysCalc(x) {
  const dt = addDays(new Date(2020, 7, 22), x);
  return `${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()}`;
}
module.exports = daysCalc;
