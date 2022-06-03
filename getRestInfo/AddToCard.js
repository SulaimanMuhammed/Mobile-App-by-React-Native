import { View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import React from 'react'
import { Modal } from 'react-native-paper';
import FontAwesom5 from 'react-native-vector-icons/FontAwesome';

export default function AddToCard({navigation}) {
  const createTwoButtonAlert = () =>
  Alert.alert(
    "Successful Message",
    "Successfuly Added to your Cart",
    [
      
      { text: "OK", onPress: () => console.log("Successfuly Added to your Cart") }
    ]
    
  );


  return (
    <View style={styles.container
    }>
      
     <TouchableOpacity onPress={createTwoButtonAlert}>
        
        <View style={styles.button}>
        <Text style={{ fontSize:23, fontWeight:"bold", color:"#F77714"}}>
          add To Cart
        </Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigation.navigate('Invoice')}}>
        <FontAwesom5 name="shopping-cart" size={37} style={{
                  color: "white", alignSelf:"center", marginLeft:10, marginRight:50, marginTop:10
                    }}/>
        </TouchableOpacity>
    
    </View>
    
  )
}
const styles = StyleSheet.create({
    button:{
     width:"150%",
     backgroundColor:"#fff",
     borderRadius:5, 
     alignItems:"center",
    //justifyContent:"space-around",
     marginTop:10,
     marginBottom:10,
     marginLeft:40
    },
    container:{
      flexDirection:"row", 
      justifyContent:"space-between"
    }
    
});