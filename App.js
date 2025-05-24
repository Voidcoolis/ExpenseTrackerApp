import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { NavigationContainer } from '@react-navigation/native';
import ManageExpenses from './screens/ManageExpenses';

const Stack = createStackNavigator();
const BottomsTab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <BottomsTab.Navigator>
      <BottomsTab.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomsTab.Screen name="AllExpenses" component={AllExpenses} />
    </BottomsTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
