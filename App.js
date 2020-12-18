import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'



import Home from './components/Authentication/Home';
import Admin from './components/Main/Admin/Admin';
import User from './components/Main/User/User';
import AdminDetail from './components/Main/Admin/AdminDetail';
import UserDetail from './components/Main/User/UserDetail';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import InfoUser from './components/Main/User/InfoUser';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="User" component={User}/>    
        <Stack.Screen name="InfoUser" component={InfoUser}/>  
        <Stack.Screen name="UserDetail" component={UserDetail}/>
        <Stack.Screen name="Admin" component={Admin}/>
        <Stack.Screen name="AdminDetail" component={AdminDetail}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default App;




