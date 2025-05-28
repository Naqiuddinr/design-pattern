// Date Class
// Get Current Date
// Get Current Month
// Get Current Year

const now = new Date();

const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDate = now.getDate();

console.log(currentYear);
console.log(currentMonth);
console.log(currentDate);