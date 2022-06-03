import {SafeAreaView, View, Text} from 'react-native'
import React from 'react'
import Search from './restaurantComponent/Search'
import CustomerRest from './restaurantComponent/CustomerRest'
import ButtomTaps from './restaurantComponent/ButtomTaps'

export default function Restaurants({navigation}) {
  return (
    
      <SafeAreaView style={{
      flex:1,
      backgroundColor:"#F77714"
        }}>
      <CustomerRest navigation={navigation}/>
       <View style={{
         backgroundColor:"#fff",
         
       }}>
        
       {/* <ButtomTaps navigation={navigation} /> */}

        </View> 
      
      </SafeAreaView>
   
  )
}