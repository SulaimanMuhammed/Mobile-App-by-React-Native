import { View, Text, StyleSheet, ScrollView, Image, Pressable} from 'react-native'
import React, {useEffect, useState}from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Modal from "react-native-modal";
import {collection, addDoc} from "firebase/firestore";
import {db} from '../config/firebase';
export default function Drinks() {
  /////////////////////////////////////////////
  const [newCake, setCake]=useState('');
  const [newPrice, setPrice]=useState('');
  const dataCollection= collection(db, "addToCart");
  const createUser=async()=>{
    await addDoc(dataCollection, { drink: newCake, drinkPrice:newPrice});
  }
  useEffect(() => {
    const createUser=async()=>{
      await addDoc(dataCollection, { drink: newCake, drinkPrice:newPrice});
    }
  });
  ///////////////////////////////////////////////
      // creating the modals for the popup page
      const [modalVisible, setModalVisible] = useState(false);
      const toggleModal = () => {
        setModalVisible(!modalVisible);
      }
   const localRestaurants=[   
      {
        name:"Cola",
        price:"3,000IQD",
       url:require("../photos/drinks/1.jpg")
      },
      {
      name:"Orange Juice",
      price:"5,000IQD",
      url:require("../photos/drinks/2.jpg") 
      },
      {
        name:"Fruit",
        price:"3,000IQD",
        url:require("../photos/drinks/3.jpg")
      },
      {
        name:"ffff",
      price:"6$",
      url:require("../photos/drinks/4.jpg")
      },
      {
        name:"dddddd",
      price:"8$",
      url:require("../photos/drinks/5.jpg")
      }
]
  return (
      
     <View  style={
      {
          backgroundColor:"#fff",
         
      }}>
        <Text style={styles.hedaingTitle}> Drinks</Text>
       <ScrollView horizontal={true} >
       {localRestaurants.map((item, index)=>( <View >
           <View style={styles.container}>
               <Image
               key={item.name}
                source={item.url}
                style={styles.images}
               />      
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <View>
                <Text key={item.name} style={styles.text} > 
                { item.name } 
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
                                  <Text style={styles.modalText}>Drink Name</Text>
                                     <View style={{flexDirection:"row"}}>
                                       <Text>
                                         COCA Kola
                                       </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
                                                />
                                                <Text>
                                          PePsi
                                       </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
                                                />
                                                <Text>
                                         Milk
                                            </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
                                                />
                                     </View>
                        
                        <Text style={styles.modalText}>Drink Number</Text>
                        <View style={{flexDirection:"row"}}>
                                       <Text>
                                         first One
                                       </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
                                                />
                                                <Text>
                                         first One
                                       </Text>
                                        <BouncyCheckbox
                                                iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                                                fillColor="green"
                                                value={toggleModal}
                                                onValueChange={setModalVisible}
                                                />
                                                <Text>
                                         first One
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
  }
  
});