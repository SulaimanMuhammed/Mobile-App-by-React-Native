import { View, Text, TextInput , StyleSheet} from 'react-native'
import React from 'react'

export default function Music(){
  return (
    <View style={styles.container}>
        <Text style={styles.hedaingTitle}>
            Music
        </Text>
      <TextInput
        style={styles.input}
        
        placeholder="Name of Music to be palyed"
      //  value={email}
      //  onChangeText={}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        borderColor: "gray",
        backgroundColor:"#fff",
        alignContent:"center",
        width:"100%",
        borderWidth: 1,
        //borderRadius: 10,
        padding: 10,
    },
    container:{
        backgroundColor:"#fff",
        marginTop:5,
    },
    hedaingTitle:{
        fontWeight:"bold",
        fontSize:20
      },
    
});