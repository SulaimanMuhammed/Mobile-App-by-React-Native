
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import Register from './Register';
import Screens from './Screens';
import Restaurants from './Restaurants'
import Discounts from './tapComponents/Discounts';
import User from './tapComponents/User';
import Orders from './tapComponents/Orders';
import RestaurantInfo from './getRestInfo/RestaurantInfo';
import ButtomTaps from './restaurantComponent/ButtomTaps';
import AddToCard from './getRestInfo/AddToCard';
import Invoice from './getRestInfo/Invoice';
import ShowServices from './ShowServices';
import SearchPage from './tapComponents/SearchPage';
import DiscountInfo from './tapComponents/DiscountInfo';
import Offers from './getRestInfo/Offers';
const Stack = createNativeStackNavigator();
 //Screen Names
export default function App() {
  return (
<NavigationContainer >
      <Stack.Navigator 
       initialRouteName={Screens} 
       activeColor="#f0edf6"
       inactiveColor="#3e2465"
      screenOptions={
          {headerShown: false}
          }
      >
          <Stack.Screen name='Screens' component={Screens}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Restaurants" component={Restaurants} />
        <Stack.Screen name="Discounts" component={Discounts}/>
        <Stack.Screen name="User" component={User}/>
        <Stack.Screen name="Orders" component={Orders}/>
        <Stack.Screen name="RestaurantInfo" component={RestaurantInfo}/>
        <Stack.Screen name="ButtomTaps" component={ButtomTaps}/>
        <Stack.Screen name="AddToCard" component={AddToCard}/>
         <Stack.Screen name="Invoice" component={Invoice}/> 
         <Stack.Screen name="ShowServices" component={ShowServices}/>
         <Stack.Screen name="SearchPage" component={SearchPage}/>
         <Stack.Screen name="DiscountInfo" component={DiscountInfo}/>
         <Stack.Screen name="Offers" component={Offers}/>
         {/* <Stack.Screen
        name="Invoice"
        component={Invoice}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


