import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import OrderInfo from './OrderInfo'
import ButtomTaps from '../restaurantComponent/ButtomTaps'
export default function Orders({navigation}) {
  return (
    <View style={styles.container}>
    <OrderInfo/>
    <View style={{
        backgroundColor:"#fff"
      }}>
      <ButtomTaps navigation={navigation} />
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
  flex:1,
   backgroundColor:"#F77714",
  justifyContent:"center",
  //alignItems:"center"
  },
  
});