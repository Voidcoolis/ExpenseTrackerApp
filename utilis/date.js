export function getFormattedDate(date) {
  return `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()}`;
}

{/*

// rely on toLocaleDateString() for future localization flexibility
    
export function getFormattedDate(date) {
  return date.toLocaleDateString("de-DE");
}

*/ }