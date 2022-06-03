import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
//import firestore from '@react-native-firebase/firestore';
import firebase from 'firebase/compat/app';
//import firestore from "firebase/firestore";
import FontAwesom5 from 'react-native-vector-icons/FontAwesome';
export default class FetchListScreen extends Component {
    state={
        user:{
            name:"",
           userEm:""
        },     
    };
     constructor(props){
             super(props);
        
             this.subscriber=firebase.firestore().collection("register").doc("hp2pREQWzmOodxYgxdYs").onSnapshot(doc =>{
               this.setState(
                  {
                      user:{
                          name:doc.data().name,
                          phone:doc.data().phone,
                          email:doc.data().email,
                          address:doc.data().address,
                          profession:doc.data().profession,
                         // userEm:props.userEm
                      }
                  }
              )
            })
     
        }
    
  render() {
    return (
      <View style={{
          width:"100%"
      }}>
          <View style={styles.fitchList}>
              {/* to use the props which we impoted from other classes we use : this.state.user.userEm */}
              <FontAwesom5 name="user" size={20} style={{
                  color: "black", alignSelf:"center", marginLeft:10
                    }}/>
            <Text style={styles.txt}> Name:   {this.state.user.name}</Text>
            </View>
            <View style={styles.fitchList}>
            <FontAwesom5 name="address-book" size={20} style={{
                  color: "black", alignSelf:"center", marginLeft:10
                    }}/>
            <Text style={styles.txt}> Address:   {this.state.user.address}</Text>
            </View>
            <View style={styles.fitchList}>
            <FontAwesom5 name="phone" size={20} style={{
                  color: "black", alignSelf:"center", marginLeft:10
                    }}/>
            <Text style={styles.txt}> Phone Number:   {this.state.user.phone}</Text>
            </View>
            <View style={styles.fitchList}>
            <FontAwesom5 name="map-marker" size={20} style={{
                  color: "black", alignSelf:"center", marginLeft:10
                    }}/>
            <Text style={styles.txt}> Profession: {this.state.user.profession}</Text>
            </View>
      </View>  
    )
  }
}
const styles = StyleSheet.create({
   
    fitchList:{
      marginTop:5,
      backgroundColor:"#fff",
     // width:"100%",
      height:50,
     //justifyContent:"space-around",
      flexDirection:"row",
      alignItems:"center",
      borderRadius:10,
      width:"96%", alignSelf:"center"

    },
    txt:{
        fontSize:20,
        marginLeft:20
    }
    
  });