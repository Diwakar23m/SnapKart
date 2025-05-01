import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/onbording/LoginScreen'; // 👈 Yeh used ho raha hai
import otp from '../screens/onbording/otp';
import Home from '../screens/Home/home';
import ProductDetails from '../components/ProductDetails';
import Checkin from '../screens/FlashSale/checkin';
import Cart from '../screens/Cart/Cart';
import Search from '../screens/Search/Search';
import CategoriesGrid from '../screens/Categories/CategoriesGrid';
import TabNavigator from './tabNavigator';
import ResponsiveFlexLayout from '../screens/FlashSale/ResponsiveFlexLayout';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false}}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='otp' component={otp}/>
        <Stack.Screen name='Tabs' component={TabNavigator}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ProductDetails' component={ProductDetails}/>
        <Stack.Screen name='abc' component={Checkin}/>
        <Stack.Screen name='cart' component={Cart}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='categories' component={CategoriesGrid}/>

        <Stack.Screen name='Responsive' component={ResponsiveFlexLayout}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
