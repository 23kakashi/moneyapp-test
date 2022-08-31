const date = require("date-and-time");

const getDate = () => {
  const now = new Date();
  return date.format(now, "YYYY/MM/DD/HH/mm/ss");
};

module.exports = { getDate };
