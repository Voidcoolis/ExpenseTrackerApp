import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  { id: 'e1', description: 'Grocery', amount: 62.34, date: new Date('2025-01-01') },
  { id: 'e2', description: 'Rent', amount: 429.99, date: new Date('2025-02-12') },
  { id: 'e3', description: 'Utilities', amount: 114.99, date: new Date('2025-04-21') },
  { id: 'e4', description: 'Internet', amount: 39.99, date: new Date('2025-05-15') },
  { id: 'e5', description: 'Transport', amount: 59.50, date: new Date('2025-06-10') },
  { id: 'e6', description: 'Dining Out', amount: 45.00, date: new Date('2025-08-05') },
  { id: 'e7', description: 'Gym Membership', amount: 24.99, date: new Date('2025-09-30') },
];

function ExpensesOutput({expenses, expensesPeriod}) {  //will be used in AllExpenses and RecentExpenses screens
  return (
    <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;