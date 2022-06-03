import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
export default function Seats() {
   const localRestaurants=[   
      {
        name:"2 Seats",
       
       url:require("../photos/seats/1.jpg")
      },
      {
      name:"3 Seats",
      
      url:require("../photos/seats/2.jpg")
      },
      {
        name:"4 Seats",
       
        url:require("../photos/seats/3.jpg")
      },
      {
        name:"6 Seats",
      
      url:require("../photos/seats/4.jpg")
      },
      {
        name:"8 & more",
     
      url:require("../photos/seats/5.jpg")
      }
]
  return (
      
     <View  style={
      {
          backgroundColor:"#fff",
         
      }}>
        <Text style={styles.hedaingTitle}> Seats</Text>
       <ScrollView horizontal={true} >
       {localRestaurants.map((item, index)=>( <View >
           <View style={styles.container}>
               <Image
               key={index}
                source={item.url}
                style={styles.images}
               />      
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <View>
                <Text key={index} style={styles.text} > 
                { item.name } 
              </Text>
                  
              
              </View>
               <View style={styles.checkbox}>
               <View style={{width:35, height:20}}>
               <BouncyCheckbox
                          size={20}
                          fillColor="green"
                          unfillColor="#FFFFFF"
                          
                          iconStyle={{ borderColor: "red" }}
                          
                           />
                           </View>
               </View>
              </View>
                  
                
           </View>
        </View>
     ))}
         
    </ScrollView>
     </View> 
  )
}
const styles = StyleSheet.create({
    container:{
     marginLeft:10,
     backgroundColor:"#fff",
     borderRadius:8
    },
    images:{
      width: "100%",
        height: 90,
        resizeMode: 'stretch',
        borderRadius:10
    },
    details:{
       flexDirection:"row"
    },
    hedaingTitle:{
      fontWeight:"bold",
      fontSize:20
    }, 
    checkbox: {
     justifyContent:"flex-end",
     marginLeft:10,

    }
    
  });