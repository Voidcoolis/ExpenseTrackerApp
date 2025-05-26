export function getFormattedDate(date) {
  return `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()}`;
}

// Show expenses from the last 7 days by comparing each expense's date to "today minus 7 days".
//Filter or display "recent" items based on a rolling window of days.
export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}



{/*

// rely on toLocaleDateString() for future localization flexibility
    
export function getFormattedDate(date) {
  return date.toLocaleDateString("de-DE");
}

*/ }