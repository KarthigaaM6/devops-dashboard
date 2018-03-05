let getLastNDates = (count) => {
  let now = new Date().getTime();
  let dates = [];
  for(let i=count-1; i>0; i--) {
	let timestamp = now - (i * 24 * 60 * 60 * 1000);
	let date = new Date(timestamp).toString();
	date = date.substr(8, 2) + '-' + date.substr(4, 3);
    dates.push(date);
  }
  let nowTimestamp = new Date(now).toString();
  let nowDate = nowTimestamp.substr(8, 2) + '-' + nowTimestamp.substr(4, 3);
  dates.push(nowDate);
  return dates;
};

module.exports = {
    getLastNDates
};
