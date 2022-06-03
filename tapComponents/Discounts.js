import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DiscountInfo from './DiscountInfo'
import ButtomTaps from '../restaurantComponent/ButtomTaps'

export default function Discounts({navigation}) {
  return (
    <View style={styles.container}>
    <DiscountInfo navigation={navigation}/>
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
  },
  
});