import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './HomeScreen/Home';
import Profile from './ProfileScreen/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Product from './ProductScreen/Product';
import CheckoutScreen from './CheckoutScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600',
        },
        tabBarActiveTintColor: '#3F22AB',
        tabBarInactiveTintColor: 'black',
        tabBarIconStyle: {marginTop: 5},
        tabBarStyle: {
          overflow: 'visible',
          shadowColor: '#000000',
          shadowOpacity: 0.25,
          shadowRadius: 8,
          shadowOffset: {width: 0, height: 1},
          elevation: 10,
        },
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
        
      />
      <Tab.Screen
        name="Shoppers"
        component={Home}
        options={{
          title:'SHOPPERS',
          headerTitleAlign:'center',
          tabBarLabel: 'Home',
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: 'Cart',
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <AntDesign name="shoppingcart" size={26} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{
          tabBarLabel: 'Cart',
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <AntDesign name="shoppingcart" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default MyTabs;
