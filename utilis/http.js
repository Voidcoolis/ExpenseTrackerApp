import axios from "axios";
import { API_URL } from "./apiConfig";

export async function storeExpense(expenseData) {
  const response = await axios.post(API_URL + "/expenses.json", expenseData);
  const id = response.data.name; // holds the firebase auto generated id
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(API_URL + "/expenses.json"); // get doesn't need a second argument

  //   console.log(response.data);
  //firebase response(different from REST API) returns an object with all the expenses
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(API_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(API_URL + `/expenses/${id}.json`);
}
