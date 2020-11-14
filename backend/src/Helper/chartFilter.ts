export const dateFinder = (date: string) => {
  let startingDate;
  let endingDate;
  let today = new Date();

  if (date === "Today") {
    startingDate = new Date();
    startingDate.setHours(0);
    startingDate.setMinutes(0);
    startingDate.setSeconds(0);
    endingDate = today;
    console.log(startingDate, endingDate, " => Today");
  } else if (date === "Yesterday") {
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    startingDate = yesterday;
    endingDate = today;
  } else if (date === "This Month") {
    let currentMonth = new Date();
    currentMonth.setDate(1);
    currentMonth.setHours(0);
    currentMonth.setMinutes(0);
    currentMonth.setSeconds(0);
    startingDate = currentMonth;
    endingDate = new Date();
  } else if (date === "Previous Month") {
    let currentMonth = new Date();
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    currentMonth.setDate(1);
    currentMonth.setHours(0);
    currentMonth.setMinutes(0);
    currentMonth.setSeconds(0);
    startingDate = currentMonth;

    let previousMonth = new Date();
    let y = previousMonth.getFullYear();
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    let m = previousMonth.getMonth();

    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0);
    endingDate = lastDay;
    console.log(startingDate, endingDate, " Previous Month found");
  }
  return [startingDate, endingDate];
};
