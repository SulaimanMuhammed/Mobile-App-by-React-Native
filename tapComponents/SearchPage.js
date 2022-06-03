import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchPageInfo from './SearchPageInfo'
import ButtomTaps from '../restaurantComponent/ButtomTaps'
export default function SearchPage({navigation}) {
  return (
    <View style={styles.container}>
    <SearchPageInfo/>
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