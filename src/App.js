import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TodoContext from './contexts/TodoContext';
import Main from './screens/Main';
import NewTodo from './screens/NewTodo';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <TodoContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="New Todo"
            component={NewTodo}
            options={{ title: "New Todo" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoContext>
  );
};

export default App;
