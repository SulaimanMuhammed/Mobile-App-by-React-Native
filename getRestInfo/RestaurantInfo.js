import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import Offers from './Offers';
import AddToCard from './AddToCard';
import FontAwesom5 from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RestaurantInfo({ route, navigation }) {
    const { name, rate, album_img} = route.params;
  return (
    <SafeAreaView style={styles.contanier}> 
     
        <Image 
        style={styles.img} source={album_img}
        />
          <View style={styles.content}>
                <Text style={ styles.Text }>
                        {name} 
                </Text>
                <View style={styles.circle}>
                    <Text style={{fontSize:16}} >
                    {rate}
                    </Text> 
                </View>
               
          </View>
          <View style={{
            flexDirection:"row",
            alignItems:"center"
          }}>
            
          <FontAwesom5 name="map-marker" size={20} style={{
                  color: "white", alignSelf:"center", marginLeft:10, marginBottom:4
                    }}/>
          <Text style={{
            fontSize:14,
            marginLeft:10, color:"white",
          }}>
          |  Slimani: Magma Square: 
          </Text>
          </View>
          <Offers navigation={navigation}/>
          <AddToCard navigation={navigation} />

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    contanier:{
        backgroundColor:"#F77714",
        flex:1,
        
    },
    Text:{
       color:"white",
        fontSize:20,
        
    },
    img:{
        width:"100%", height:150,
    },
    content:{
       flexDirection:"row",
       justifyContent:"space-between",
       alignContent:"center",
       alignItems:"center",
       backgroundColor:"#F77714"
    },
    circle:{
      backgroundColor:"#fff",
      borderRadius:10,
      marginRight:20,
      marginTop:15,
      width:30,
      justifyContent:"center",
      alignItems:"center"
    
    }

});