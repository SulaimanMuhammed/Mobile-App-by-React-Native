import React from 'react';
import { StyleSheet, Image, View, SafeAreaView, Text,  TouchableOpacity, StatusBar} from 'react-native';

export default function Screens({navigation}){
  
    return (   
    <SafeAreaView style={styles.container}>
      <StatusBar  barStyle="light-content" backgroundColor='#F77714'/>

     
    {/* <View style={styles.stretch}> */}
    <Image 
    
    source={require('./photos/logo.png')}
  /> 
  {/* image for show services */}
            <View style={{
            alignItems:"center",
            backgroundColor:"#fff",
            marginBottom:40,
            marginTop:100,
            borderRadius:20
            }}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Restaurants')}}>
            <Image 
              source={require('./photos/firstPage/services-button.png')}
            /> 
          
            </TouchableOpacity>
            </View> 
     
     <TouchableOpacity style={styles.firstButton}
     onPress={() => navigation.navigate('LoginPage')}>
         <Text style={styles.text}>
             Login
         </Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.secondButton}
     onPress={() => navigation.navigate('Register')}>
         <Text style={styles.text}>
             Register
         </Text>
     </TouchableOpacity>
     
  </SafeAreaView>
    ); 
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:"center",
      backgroundColor:"#F77714",
      justifyContent:"center",
     // justifyContent:"space-between"
    
  },
  text: { 
    fontSize: 22,
    fontWeight: 'bold', 
    color:"#000",
    fontFamily: 'sans-serif',  
  },
  
  firstButton:{
    width:"80%",
    borderRadius:20,
        height: 50, 
        backgroundColor: '#0088E5',
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop:20
  },
  secondButton:{
        height: 50, 
        width:"80%", 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        marginTop:10,
        marginBottom:10
  },
  stretch:{
    justifyContent:"flex-start",
    alignItems:"center"
  },
  ShowServices:{
    backgroundColor:"#fff"
  }
  });