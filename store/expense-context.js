import { createContext, useReducer } from "react";
import { DUMMY_EXPENSES } from "../dummy-data/dummy-data";

export const ExpensesContext = createContext({
  expenses: [], // array of expenses
  addExpense: (description, amount, date) => {}, // function to add an expense
  setExpenses: (expenes) => {},
  deleteExpense: (id) => {}, // function to delete an expense by id
  updateExpense: (id, { description, amount, date }) => {}, // function to update an expense by id
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      // const id = new Date().toString() + Math.random().toString(); //doesn't work with firebase, because it generates its own unique ids

      return [action.payload, ...state];  //return [{ ...action.payload, id: id }, ...state];

    case "SET":
      //change the order of displayed expenses(in order of when they were added)
      const inverted = action.payload.reverse();
      return inverted;

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []); // never hook

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: { id } });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
