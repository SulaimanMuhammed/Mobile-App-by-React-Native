import { View, Text, StyleSheet,TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react'

export default function DiscountInfo({navigation}){
  const localRestaurants=[   
  
    {
    name:"Jollas",
    rate:"Discount 25%",
    id:"2",
    url:require('../photos/jollas.jpg'),
    type:"Restaurant & Cafe"
    },
    {
      name:"Mivan",
      rate:"Discount 20%",
      id:"3",
      url:require('../photos/Mivan.jpg'),
      type:"Restaurant"
    },
    {
      name:"Brokar",
    rate:"Discount 10%",
    id:"4",
    url:require('../photos/birth.jpg'),
    type:"Restaurant"
    },

]
  return (
    
<ScrollView  style={styles.container}>
{localRestaurants.map((item, index)=>(
        <View style={styles.view}>
        
          <TouchableOpacity key={item.name} onPress={() => {
         
         navigation.navigate('RestaurantInfo', {
           name:item.name,
          // rate:item.rate,
          album_img:item.url
         });
       }}>
           <View style={styles.imgView}>
               <Image
               key={item.name}
                source={item.url}
                style={styles.img}/>
        
           </View>
           </TouchableOpacity>
          
          <View style={styles.viewText}>
             
                <Text key={item.name} style={styles.text} > { item.name } </Text>
                
                
                <View style={{
                  backgroundColor:"#fff",
                  justifyContent:"center",
                  flexDirection:"row",
                }}>
                  {/* <FontAwesom5 name="star" size={26} style={{
                    marginTop:6,
                color: "orange", alignSelf:"center"
                    }}/> */}
                  <View style={styles.rateDesign}>
                  
                     <Text key={item.name} style={styles.textRate}>
                      { item.rate }
                      </Text>
                  </View>
                      
                </View>
                
           </View>
           <Text style={{fontFamily: 'sans-serif-medium', fontSize:18}}>
            {item.type}
           </Text>
     </View>
     ))}
     </ScrollView>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:"#F77714",
   // justifyContent:"center",
   // alignItems:"center"
    },
    view: {
      backgroundColor:"#fff",
        margin: 2,
       borderRadius:10,
       alignContent:"center",
   
     },
     img:{
         width:"95%", height:190,
         borderRadius:2,
         marginTop:5,
         
        
     },
     imgView:{
       
         alignItems:"center",
       
     },
     text:{
         fontSize:24,
         fontWeight:'bold'
     },
     textRate:{
       fontSize:15,
       fontWeight:'bold',
      
   },
     viewText:{
       flexDirection:"row",
       justifyContent:"space-between",
     },
     rateDesign:{
       marginTop:7,
       backgroundColor:"#F77714",
       width:155,
       borderRadius:15,
       alignItems:"center",
       justifyContent:"center"
     }
  
  });