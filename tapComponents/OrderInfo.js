import { Image, View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {auth} from '../config/firebase';
import Invoice from '../getRestInfo/Invoice'

export default function OrderInfo({navigation}) {
  return (
   <View style={styles.container}>    
          <Invoice/>
   </View> 
  )
}
const styles = StyleSheet.create({
  container: {
  flex:1,
   backgroundColor:"#F77714",
  justifyContent:"center",
  alignItems:"center"
  },

});