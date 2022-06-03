import React, {useEffect, useState}from 'react'
import { View, Text, ScrollView, StyleSheet, Image,  Pressable, Picker} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Modal from "react-native-modal";
import {collection, addDoc} from "firebase/firestore";
import {db} from '../config/firebase';

export default function Cakes(navigation){
      // const usersCollection =firestore().collection('register').get();
      // const users =firestore().collection('register').get();
///////////////////////////////////////////////
      // creating the modals for the popup page
      const [modalVisible, setModalVisible] = useState(false);
      const toggleModal = () => {
      setModalVisible(!modalVisible);
      }
//////////////////////////////////////////////
//creating the sum of add to cart
const [newCake, setCake]=useState('');
const [newPrice, setPrice]=useState('');
const [newSize, setSize]=useState('');

const dataCollection= collection(db, "cakeInfo");

const createUser=async()=>{
  await addDoc(dataCollection, { cake: newCake, price:newPrice, size:newSize});
}
useEffect(() => {
  const createUser=async()=>{
    await addDoc(dataCollection, { cake: newCake, price:newPrice, size:newSize});
  }
});
/////////////////////////////////////////////////

/////////////////////////////////////////////
  // const [isSelected, setSelection] = useState(); 
  const localRestaurants=[   
      {
        name:"Pound",
        price:"15000",
        url:require("../photos/cakes/1.jpg")
      },
      {
       name:"Sponge",
      price:"18000",
      url:require("../photos/cakes/2.jpg")
      },
      {
        name:"Biscuit ",
        price:"15000",
        url:require("../photos/cakes/3.jpg")
      },
      {
        name:"Baked",
      price:"6000",
      url:require("../photos/cakes/4.jpg")
      },
      {
        name:"Suli Grand",
      price:"10000",
      url:require("../photos/cakes/5.jpg")
      }
];
const pricesArray=[
  {
    firstPrice:"10000",
    secondPrice:"12000",
    thirdPrice:"15000"
  }
]
return (    
      <View  style={
       {
           backgroundColor:"#fff",
          
       }}>
         <Text style={styles.hedaingTitle}> Cakes</Text>
        <ScrollView horizontal={true} >
        {localRestaurants.map((item, index)=>(
        
            <View style={styles.container}>
               
               <Image
                key={item.name}
                 source={item.url}
                 style={styles.images}
                />        
               <View style={{flexDirection:"row", justifyContent:"space-between"}}>
               <View>
                 <Text key={item.name} style={styles.text} > 
               { item.name} 
               </Text>
                   
               <Text key={item.name} >
                       { item.price}
               </Text>
               </View>
                <View style={styles.checkbox}>
                  
                {/* <Pressable onPress={toggleModal}> */}
                
                 <View style={{width:35, height:20}}>
                 <BouncyCheckbox
                        size={20}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: "red" }}
                        onPress={() => {
                         toggleModal(); setCake(item.name); setPrice(item.price); setSize("mideum");
                        }}
                         />
                 </View>
                {/* </Pressable> */}
   
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    backdropOpacity={0.2}
                    > 
                     <View style={styles.centeredView}>
                          <View style={styles.modalView}>
                                <Text style={styles.modalText}>Cake Type</Text>
                                   <View style={{flexDirection:"row"}}>
                                   <View >
                                     <Text style={styles.textStyle}>
                                     Pound Cake
                                     </Text>
                                     
                                     
                                     </View>
                                      
                                      <BouncyCheckbox
                                              iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                              fillColor="green"
                                              
                                              value={item.price}
                                             /// onPress={navigation.navigate('Invoice', {name: item.name})}
                                              // onValueChange={createUser()}
                                              />
                                     <View >
                                     <Text style={styles.textStyle}>
                                     Sponge Cake
                                     </Text>
                                     </View>
                                      <BouncyCheckbox
                                              iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                              fillColor="green"
                                             //  onPress={navigation.navigate('Invoice', {name: item.name})}
                                              // value={setSum(item.price)}
                                              // onValueChange={createUser()}
                                              />
                                      <View style={{ flexDirection:"column"}}>
                                     <Text style={styles.textStyle}>
                                     Genoise Cake
                                     </Text>
                                    
                                     </View>
                                      <BouncyCheckbox
                                              iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                              fillColor="green"
                                             // onPress={navigation.navigate('Invoice', {name: item.name})}
                                              // value={setSum(item.price)}
                                              // onValueChange={createUser()}
                                              />
                                   </View>
                      
                      <Text style={styles.modalText}>Cake Size</Text>
                      <View style={{flexDirection:"row"}}>
                              <View style={{flexDirection:"column"}}>  
                                     <Text style={styles.textStyle}>
                                      small
                                     </Text>    
                                   <Text style={styles.priceText}>
                                    10,000
                                   </Text>                      
                              </View>
                                      
                                  
                                    <BouncyCheckbox
                                              iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                              fillColor="green"
                                              // value={newSum}
                                              // onValueChange={newSum=>setSum(item.price)}
                                              />
                        <View style={{ flexDirection:"column"}}>
                                      <Text style={styles.textStyle}>
                                       Medium
                                     </Text>
                                     <Text style={styles.priceText}>
                                     12,000
                                     </Text>
                        </View>
                                      <BouncyCheckbox
                                              iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                              fillColor="green"
                                              // value={newSum}
                                              // onValueChange={newSum=>setSum(item.price)}
                                              />
                                      <View style={{ flexDirection:"column"}}>
                                      <Text style={styles.textStyle}>
                                       large
                                     </Text>
                                     <Text style={styles.priceText}>
                                     15,000
                                     </Text>
                                      </View>
                                      <BouncyCheckbox
                                              iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                              fillColor="green"
                                              // value={newSum}
                                              // onValueChange={newSum=>setSum(item.price)}
                                              />
                                   </View>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {setModalVisible(!modalVisible); createUser();}}
                      >
                        <Text style={styles.textStyle}>Done</Text>
                      </Pressable>
                    </View> 
                  </View>
                </Modal>
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
     marginLeft:15,
     backgroundColor:"#fff",
      borderRadius:8,
    
    },
    images:{
      width: "100%",
       height: 90,
       // resizeMode: 'stretch',
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
     marginLeft:10
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 2
    },
    modalView: {
     // margin: 40,
      backgroundColor: "#F77714",
      borderRadius: 20,
      padding: 0,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
        height: 4
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 10,
      marginTop:15,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize:16
    },
    modalText: {
      marginBottom: 15,
      fontSize:16,
      fontWeight: "bold",
      textAlign: "center"
    },
    priceText:{
      color:"white",
      fontSize:12
    }
    
    
});