export function getFormatedDate(date) {
  return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`;
}

export function getLastWeek(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
