import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React, {useEffect, useState}from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Modal from "react-native-modal";
import {collection, addDoc} from "firebase/firestore";
import {db} from '../config/firebase';

export default function Food() {
///////////////////////////////////////////////
      // creating the modals for the popup page
      const [modalVisible, setModalVisible] = useState(false);
      const toggleModal = () => {
        setModalVisible(!modalVisible);
      }
 /////////////////////////////////
 const [newCake, setCake]=useState('');
 const [newPrice, setPrice]=useState('');


 const dataCollection= collection(db, "foodInfo");
 const createUser=async()=>{
  await addDoc(dataCollection, { food: newCake, foodPrice:newPrice});
}
useEffect(() => {
  const createUser=async()=>{
    await addDoc(dataCollection, { food: newCake, foodPrice:newPrice});
  }
});
 /////////////////////////////////
   const localRestaurants=[   
      {
        name:"Steak",
        price:"20000",
       url:require("../photos/food/1.jpg")
      },
      {
      name:"Skalob",
      price:"10000",
      url:require("../photos/food/2.jpg")
      },
      {
        name:"Beef",
        price:"15000",
        url:require("../photos/food/3.jpg")
      },
      {
        name:"Burger",
      price:"12000",
      url:require("../photos/food/4.jpg")
      },
      {
        name:"Suli Grand",
      price:"8000",
      url:require("../photos/food/5.jpg")
      }
]
  return (
      
     <View  style={
      {
          backgroundColor:"#fff",
         
      }}>
        <Text style={styles.hedaingTitle}> Meals</Text>
       <ScrollView horizontal={true} >
       {localRestaurants.map((item, index)=>(
        <View >
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
               
           <Text key={index} >
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
                            toggleModal(); setCake(item.name); setPrice(item.price); 
                           }}
                           />
                   </View>
                  {/* </Pressable> */}
                  
                  <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      > 
                       <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                  <Text style={styles.modalText}>Numnber of Meals</Text>
                                     <View style={{flexDirection:"row"}}>
                                       <Text style={styles.textStyle}>
                                         1 meal
                                       </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
                                                />
                                        <Text style={styles.textStyle}>
                                        2 Meals
                                       </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
                                                />
                                        <Text style={styles.textStyle}>
                                         4 Meals
                                       </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
                                                />
                                     </View>
                        
                        <Text style={styles.modalText}>meal Size</Text>
                        <View style={{flexDirection:"row"}}>
                                       {/* <Text style={styles.textStyle}>
                                         first One
                                       </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
                                                /> */}
                                        <Text style={styles.textStyle}>
                                         small 
                                       </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
                                                />
                                        <Text style={styles.textStyle}>
                                         Large
                                       </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
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
     </View> ))}
         
    </ScrollView>
     </View>
        
    
   
  )
}
const styles = StyleSheet.create({
  container:{
  //paddingTop:20,
   marginLeft:10,
   backgroundColor:"#fff",
   borderRadius:8

  },
  images:{
      width: "100%",
      height: 100,
      resizeMode: 'stretch',
      borderRadius:5
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
    margin: 50,
    backgroundColor: "#F77714",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
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
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center"
  }, textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:16
  },
  
});