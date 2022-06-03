import { Image, View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

import ButtomTaps from '../restaurantComponent/ButtomTaps'
import UserProfile from './UserProfile';
export default function User({navigation}) {
  return (
   <View style={styles.container}>
     <UserProfile navigation={navigation}/>
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
  text:{
    marginTop:10,
    fontSize:20,
    backgroundColor:"#fff",
    width:"100%",
    height:50
  },
  img:{
    width:200,
    height:200
  }
  
});