import axios from "axios";

export function  storeExpense(expenseData) {
    axios.post('https://expensetrackerapi-e00fb-default-rtdb.europe-west1.firebasedatabase.app/expenses.json', expenseData)
}