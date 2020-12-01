import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Admin from './components/Main/Admin/Admin';
import User from './components/Main/User/User';
import AdminDetail from './components/Main/Admin/AdminDetail';
import UserDetail from './components/Main/User/UserDetail';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User">
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Quản lý Homestay' }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Quản lý Homestay' }}/>
        <Stack.Screen name="User" component={User} options={{ title: 'Quản lý Homestay' }}/>
        <Stack.Screen name="UserDetail" component={UserDetail} options={{ title: 'Quản lý Homestay' }}/>
        <Stack.Screen name="Admin" component={Admin} options={{ title: 'Quản lý Homestay' }}/>
        <Stack.Screen name="AdminDetail" component={AdminDetail} options={{ title: 'Quản lý Homestay' }}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default App;




