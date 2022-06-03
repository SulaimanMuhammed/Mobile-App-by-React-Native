import { Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React ,{useEffect, useState} from 'react';
 import { auth} from '../config/firebase';
 import FetchListScreen from './FetchListScreen';
 import FontAwesom5 from 'react-native-vector-icons/FontAwesome';
export default function UserProfile({navigation}) {
  ////////////////////////////////////
   
  var userEmail=auth.currentUser?.email;

  ////////////////////////////////////
  const [name, getUser]=useState('');
   useEffect(() => {
    
  getUser(auth.currentUser?.password)
      
      });     
   const logOut=()=>{
    auth
    .signOut()
    .then(() => { 
      navigation.replace("Screens")
    }).catch(error=>alert(error.message));
   };
  return (
   <View style={styles.container}>
      <Image  source={require("../photos/profile.png")}
                style={styles.img}/>
           <View style={styles.emailStyle}>
           <FontAwesom5 name="envelope" size={20} style={{
                  color: "black", alignSelf:"center", marginLeft:10
                    }}/>
           <Text style={styles.text}>
            Email:  {userEmail}
           </Text>
           </View>

                  <FetchListScreen userEm={userEmail}/>                     
             
           <TouchableOpacity  style={{
             backgroundColor:"#0088E5",
             marginTop:20,
             width:100,
             borderRadius:6,
             height:50,
             justifyContent:"center",
             alignItems:"center"
           }} onPress={logOut}>
             <Text style={{fontSize:20, color:"white"}}>Logout</Text>
           </TouchableOpacity>         
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
  text:{
    fontSize:20,
    //backgroundColor:"#fff",
    //width:"100%",
    //height:50,
    marginLeft:20
    
  },
  img:{
    width:200,
    height:200
  },
  emailStyle:{
    flexDirection:"row",
    backgroundColor:"#fff",
    alignItems:"center",   
   //justifyContent:"center",
   width:"96%",
   height:50,
   borderRadius:10
  } 
});