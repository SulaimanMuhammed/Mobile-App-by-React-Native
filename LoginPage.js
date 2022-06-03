import { SafeAreaView ,TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native'
import React, { useEffect } from 'react';
import { useState } from 'react';
import {auth} from './config/firebase';


export default function LoginPage({navigation}) {
         const [email, setEmail]=useState('');
         const [pass, setPass]=useState('');
        
     
 
  const handleSignUp=()=>{
    auth.signInWithEmailAndPassword(email, pass)
    .then(
        userCredentials=>{
            const user=userCredentials.user;  
        }
    ).catch(error=>alert(error.message))
}
useEffect(()=>{
           const unsubscribe =auth.onAuthStateChanged(user =>{
               if(user){
                  navigation.navigate("Restaurants")
               }
             }
           )
           return unsubscribe
         }, [])
  return (
    <SafeAreaView style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F77714"
    }}>
      <TextInput
        style={styles.input}
        
        placeholder="User Name or Email"
        value={email}
        onChangeText={text=>setEmail(text)}
      />
      <TextInput
        style={styles.input}
        value={pass}
        onChangeText={password=>setPass(password)}
        placeholder="Password"
        secureTextEntry={true}
        
      />
      
      <TouchableOpacity style={styles.LoginButton}
            onPress={handleSignUp}
           >
         <Text style={styles.text}>
             Login
         </Text>
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style={{ color:"#fff"}}>Forgot Password?</Text>
     </TouchableOpacity>
    
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        backgroundColor:"#fff",
        alignContent:"center",
        width:390,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    LoginButton:{
         backgroundColor:"#0088E5",
         alignItems: 'center',
         justifyContent: 'center',
         height:50,
         width:100,
         borderRadius:20
    },
    text:{
      fontSize: 22,
      fontWeight: 'bold',
    }
  });