import { View, Text, TouchableOpacity, StyleSheet, Picker, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Search from '../restaurantComponent/Search';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Modal from "react-native-modal";
export default function SearchPageInfo() {
  const [cakeVisible, setCakeVisible] = useState(false);
  const [drinkVisible, setDrinkVisible] = useState(false);
  const [foodVisible, setFoodVisible] = useState(false);
  const [sweetVisible, setSweetVisible] = useState(false);
      const cakeModal = () => {
        setCakeVisible(!cakeVisible);
      }
      const drinkModal = () => {
        setDrinkVisible(!drinkVisible);
      }
      const foodModal = () => {
        setFoodVisible(!foodVisible);
      }
      const sweetModal = () => {
        setSweetVisible(!sweetVisible);
      }

  const [cakeValue, setCakeValue] = useState("Cake");
  const [cakeType, setCakeType] = useState("CakeSize");
  const [cakePrice, setCakePrice] = useState("10000");
  //////////////////////////
  //Drinks
  
  const [drinkType, setDrinkType] = useState("Koka");
  const [drinkNumber, setDrinkNumber] = useState("3");
  const [drinkPrice, setDrinkPrice] = useState("1000");
  ////////////////////////////////////////////
  //Food
  const [sweetValue, setSweet] = useState("sweet");
  const [drinksValue, setDrink] = useState("drink");
  const [selectedValue, setSelectedValue] = useState("toto");
  return (
    <View style={styles.container}>
      <Search/>
      <View style={{
        backgroundColor:"#c7bebd",
        //justifyContent:"center",
        alignItems:"center",
        //alignContent:"center"
      }}>
      <Text style={{
        fontSize:20,
        color:"black",
      }}>
        Custom Search
      </Text>
     
      </View >

      
      <View style={styles.pickerSt}>
            <View style={styles.img}>
            <Image
             
             source={require("../photos/cakes/1.jpg")}
             style={styles.img}/>
            </View>
                 
            <Text style={styles.textPicker}>
                Cakes
            </Text>    
            <BouncyCheckbox
                   iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                    fillColor="green"
                   
                    unfillColor="#FFFFFF"
                   
                    onPress={cakeModal}
                    />      
      </View>
      <Modal
                   animationType="slide"
                   transparent={true}
                   visible={cakeVisible}
                    >

                    <View style={ styles.centeredView}>
                        <Text>
                            Type
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={cakeValue}
                                        style={styles.pickButton}
                                        onValueChange={(itemValue, itemIndex) => setCakeValue(itemValue)}
                                      >
                                        <Picker.Item label="Small" value="Small" />
                                        <Picker.Item label="big" value="big" />
                                      </Picker>
                              </View>
                              <Text>
                            Size
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={cakeType}
                                        style={styles.pickButton}
                                        onValueChange={(itemValue, itemIndex) => setCakeType(itemValue)}
                                      >
                                        <Picker.Item label="chockate" value="choclate" />
                                        <Picker.Item label="milk" value="milk" />
                                      </Picker>
                              </View>
                          <Text>
                            Price
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={cakePrice}
                                        style={styles.pickButton}
                                        onValueChange={(itemValue, itemIndex) => setCakePrice(itemValue)}
                                      >
                                        <Picker.Item label="10000" value="10000" />
                                        <Picker.Item label="130000" value="13000" />
                                      </Picker>
                              </View>
                              <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => {setCakeVisible(!cakeVisible);}}
                                  >
                                    <Text style={styles.textStyle}>Done</Text>
                      </Pressable>
                        </View>
                   



                    </Modal>
                    <View style={styles.pickerSt}>
            <View style={styles.img}>
            <Image
             
             source={require("../photos/drinks/3.jpg")}
             style={styles.img}/>
            </View>
                 
            <Text style={styles.textPicker}>
               drinks
            </Text>    
            <BouncyCheckbox
                   iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                    fillColor="green"
                   
                    unfillColor="#FFFFFF"
                   
                    onPress={drinkModal}
                    />      
      </View>
       <Modal
                   animationType="slide"
                   transparent={true}
                   visible={drinkVisible}
                    >

                    <View style={ styles.centeredView}>
                        <Text>
                            Type
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={drinkType}
                                        style={styles.pickButton}
                                        onValueChange={(itemValue, itemIndex) => setDrinkType(itemValue)}
                                      >
                                        <Picker.Item label="Koka" value="Koka" />
                                        <Picker.Item label="Pepsi" value="pepsi" />
                                      </Picker>
                              </View>
                              <Text>
                            Size
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={drinkPrice}
                                        style={styles.pickButton}
                                        onValueChange={(itemValue, itemIndex) => setDrinkPrice(itemValue)}
                                      >
                                        <Picker.Item label="1000" value="1000" />
                                        <Picker.Item label="2000" value="2000" />
                                      </Picker>
                              </View>
                          <Text>
                            Price
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={drinkNumber}
                                        style={styles.pickButton}
                                        onValueChange={(itemValue, itemIndex) => setDrinkNumber(itemValue)}
                                      >
                                        <Picker.Item label="Ja" value="ja" />
                                        <Picker.Item label="Javt" value="js" />
                                      </Picker>
                              </View>
                              <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => {setDrinkVisible(!drinkVisible);}}
                                  >
                                    <Text style={styles.textStyle}>Done</Text>
                      </Pressable>
                        </View>
                   



                    </Modal>
                    <View style={styles.pickerSt}>
            <View style={styles.img}>
            <Image
             
             source={require("../photos/food/1.jpg")}
             style={styles.img}/>
            </View>
                 
            <Text style={styles.textPicker}>
              Food
            </Text>    
            <BouncyCheckbox
                   iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                    fillColor="green"
                   
                    unfillColor="#FFFFFF"
                   
                    onPress={foodModal}
                    />      
      </View> 
       <Modal
                   animationType="slide"
                   transparent={true}
                   visible={foodVisible}
                    >

                    <View style={ styles.centeredView}>
                        <Text>
                            Type
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={selectedValue}
                                        style={styles.pickButton}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                      >
                                        <Picker.Item label="aa" value="aa" />
                                        <Picker.Item label="Script" value="js" />
                                      </Picker>
                              </View>
                              <Text>
                            Size
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={selectedValue}
                                        style={styles.pickButton}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                      >
                                        <Picker.Item label="va" value="va" />
                                        <Picker.Item label="ript" value="js" />
                                      </Picker>
                              </View>
                          <Text>
                            Price
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={selectedValue}
                                        style={styles.pickButton}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                      >
                                        <Picker.Item label="a" value="a" />
                                        <Picker.Item label="JavaScript" value="js" />
                                      </Picker>
                              </View>
                              <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => {setFoodVisible(!foodVisible);}}
                                  >
                                    <Text style={styles.textStyle}>Done</Text>
                      </Pressable>
                        </View>
                   



                    </Modal><View style={styles.pickerSt}>
            <View style={styles.img}>
            <Image
             
             source={require("../photos/drinks/1.jpg")}
             style={styles.img}/>
            </View>
                 
            <Text style={styles.textPicker}>
               Sweets
            </Text>    
            <BouncyCheckbox
                   iconStyle={{ borderRadius:0, borderColor:"lightgray"}}
                    fillColor="green"
                   
                    unfillColor="#FFFFFF"
                   
                    onPress={sweetModal}
                    />      
      </View>
      <Modal
                   animationType="slide"
                   transparent={true}
                   visible={sweetVisible}
                    >

                    <View style={ styles.centeredView}>
                        <Text>
                            Type
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={selectedValue}
                                        style={{ height: 30, width: 100  }}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                      >
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                      </Picker>
                              </View>
                              <Text>
                            Size
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={selectedValue}
                                        style={{ height: 30, width: 100  }}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                      >
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                      </Picker>
                              </View>
                          <Text>
                            Price
                          </Text>
                          <View style={styles.picker}>
                                      <Picker
                                        selectedValue={selectedValue}
                                        style={styles.pickButton}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                      >
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                      </Picker>
                              </View>
                              <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => {setSweetVisible(!sweetVisible);}}
                                  >
                                    <Text style={styles.textStyle}>Done</Text>
                      </Pressable>
                        </View>
                   



                    </Modal> 
 
    <TouchableOpacity style={styles.searchButton}
     
    >
       <Text style={styles.text}>
          Search
       </Text>
   </TouchableOpacity>
      
     
    
    </View>
    
  )
}
const styles = StyleSheet.create({
    container: {
    flex:1,
     backgroundColor:"#F77704",
     justifyContent:"space-around",
   
    },
    pickerSt:{
      backgroundColor:"#fff",
      marginTop:10,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    searchButton:{
      backgroundColor:"#0088E5",
     alignItems:"center",
     alignSelf:"center",
      justifyContent: 'center',
      height:50,
      width:100,
      borderRadius:10,
      marginTop:30
 },
 text:{
  fontSize: 20,
  fontWeight: 'bold',
  color:"white"
},
textPicker:{
  fontSize: 27,
  fontWeight: 'bold',
  color:"black",
  alignSelf:"center"
},
picker: {
  // flex: 1,
  //paddingTop: 40
 alignSelf:"center",
  borderWidth: 1,
  borderColor:"black",
  borderRadius:5,
 backgroundColor:"white"
 
},
img:{
  width:100,
  height:100,
  borderRadius:50,

},
centeredView: {
  justifyContent: "center",
  alignItems: "center",
  marginTop: 10,
  backgroundColor:"#fb9335",
  borderRadius:20

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
  fontSize:20
},
pickButton:{
   height: 30, width: 150  
}

});