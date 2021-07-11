const now_date = new Date().getTime();
const start_date = new Date(2020, 7, 25, 23, 59, 59).getTime();
var difference = (now_date-start_date)/1000/60/60/24;
difference = Math.floor(difference)

document.getElementById('DNIDZIALANIA').innerHTML = difference;
