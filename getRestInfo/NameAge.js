import { View, Text, TextInput , StyleSheet} from 'react-native'
import React from 'react'

export default function NameAge(){
  return (
    <View style={styles.container}>
        <Text style={styles.hedaingTitle}>
            Name & Age
        </Text>
      <TextInput
        style={styles.input}
        
        placeholder="Name of Person & Age"
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