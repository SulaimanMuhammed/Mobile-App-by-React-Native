import React from 'react'
import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, onPress} from 'react-native'
import { useState, useEffect } from 'react';
import {authLog} from './config/firebase';
import {collection, addDoc} from "firebase/firestore";
import {db} from './config/firebase';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);
export default function Register() {
const [newemail, setEmail]= useState('');
const [newpassword, setPassword]= useState('');
const [newname, setName]= useState('');
const [newphone, setPhone]= useState('');

//using firebase to store into the database and table of firebase


const dataCollection= collection(db, "register");

const createUser=async()=>{
  await addDoc(dataCollection, { email: newemail, name: newname,  phone: newphone});
}
useEffect(() => {
  const createUser=async()=>{
    await addDoc(dataCollection, {email: newemail, name: newname, phone: newphone});
  }
});

////////////////////////////////////////////////

const handleSignUp=()=>{
    authLog.createUserWithEmailAndPassword(newemail, newpassword)
    .then(
       userCredentials=>{
        const user=userCredentials.user;
        
         }
         ).catch(error=>alert(error.message))
         }
  return (
    <SafeAreaView style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#F77714"
  }}>
    <Text style={styles.text}>
      Enter Your Email
    </Text>
    <TextInput
      style={styles.input}
      value={newemail}
      onChangeText={text=>setEmail(text)}
      placeholder="Email"
      
    />
    <Text style={styles.text}>
      Enter Your Name
    </Text>
       <TextInput
      style={styles.input}
      value={newname}
      onChangeText={newname=>setName(newname)}
      
      placeholder="Name"
      
    />
    <Text style={styles.text}>
      Enter Your Phone Number
    </Text> 
    <TextInput
      style={styles.input}
       value={newphone}
      onChangeText={number=>setPhone(number)}
      placeholder="Phone Number"
      
    /> 
    <Text style={styles.text}>
      Create a Password
    </Text>
    <TextInput
      style={styles.input}
      value={newpassword}
      onChangeText={newpassword=>setPassword(newpassword)}
      placeholder="Password"
      secureTextEntry={true}
      
    />
 
    <TouchableOpacity style={styles.LoginButton}
     
    
     onPress={() => {
      createUser(); handleSignUp();
    }}
    >
       <Text style={styles.text}>
           Register
       </Text>
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
  },
 
});