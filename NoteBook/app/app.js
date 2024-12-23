import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from '../hooks/UserContext';

import Login from './screen/loginscreen';
import Register from './screen/signupscreen';
import Home from './screen/homescreen';
import AddNote from './screen/addnotescreen';
import ViewNote from './screen/viewnotescreen';

const Stack = createStackNavigator();

const App = () => (
  <UserProvider>
  
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddNote" component={AddNote} />
        <Stack.Screen name="ViewNote" component={ViewNote} />
      </Stack.Navigator>

  </UserProvider>
);

export default App;
