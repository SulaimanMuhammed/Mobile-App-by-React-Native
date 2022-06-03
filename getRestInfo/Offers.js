import { ScrollView, View, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import Cakes from './Cakes';
import Food from './Food';
import Sweets from './Sweets';
import Drinks from './Drinks';
import Seats from './Seats';
import Music from './Music';
import NameAge from './NameAge';
import AddToCard from './AddToCard';
export default function Offers() {
  return (   
 
 <View style={styles.container}>
        <ScrollView>
                 <Cakes/>
                 <View style={styles.row}>
                 <Food/> 
                 </View>
                 <View style={styles.row}>
                 <Drinks/>
                 </View>
                 <View style={styles.row}>
                 <Seats/>
                 </View>
                 <View style={styles.row}>
                 {/* <Food/> */}
                 </View>
                 <Music/>
                 <NameAge/>
                 
    </ScrollView>
    {/* <AddToCard navigation={navigation} /> */}
 </View>
 
   
  )
}
const styles = StyleSheet.create({
   row:{
      //paddingTop:1,
   //   backgroundColor:"#fff"

   },
   container:{
      flex:1
   }
});
