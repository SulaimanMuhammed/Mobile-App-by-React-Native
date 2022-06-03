import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
//import firestore from '@react-native-firebase/firestore';
import firebase from 'firebase/compat/app';
//import firestore from "firebase/firestore";
export default class FetchListScreen extends Component {
  state={
      user:{
        name:"",   
      },
      food:{
        name:""
      },
      total:{
        count:null
      }
      
  };
  
   constructor(props){
           super(props);
          
           this.subscriber=firebase.firestore().collection("cakeInfo").get()
           .then(querySnapshot => {
            // console.log('Total users: ', querySnapshot.size);
              querySnapshot.forEach(doc => {
                // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                   this.setState(
                {
                    user:{

                      cake:doc.data().cake,

                      price:doc.data().price,

                      size:doc.data().size,
                      
                    },
                   
                }
            );
           
              });
          
           });
           this.subscriber=firebase.firestore().collection("foodInfo").get()
           .then(querySnapshot => {
            //  console.log('Total users: ', querySnapshot.size);
              querySnapshot.forEach(doc => {
                // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                   this.setState(
                {
                    food:{
                       food:doc.data().food,
                       foodPrice:doc.data().foodPrice,
                       
                    },
                   
                }
            );
            this.setState({
              total:{
               count:parseInt(this.state.user.price)+ parseInt(this.state.food.foodPrice),
              }
            });
           
              });
          
           });
           
      }
      sum=()=>{
        var n1=parseInt(this.state.user.price);
          var n2=parseInt(this.state.user.foodPrice);
          var sum=n1+n2;
        this.setState({
          
       count:sum
        });
         console.log(total);  
          
      }
     
render() {
  //const result =parseInt(this.state.user.price)+ parseInt(this.state.user.foodPrice);
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>
        YOUR BILL
      </Text>
     
        {/* <View style={{
          backgroundColor:"#fff"
        }}> */}
        <View style={styles.cake}>
        <Text style={styles.mealTitle}>
            Cakes - - - - - - - - - - - - - - - - - - - - -
          </Text>
        <Text style={styles.textStyle}>
      cake Name:   {this.state.user.cake}
      </Text>
        <Text style={styles.textStyle}>
      cake Size:   {this.state.user.size}
      </Text>
        <Text style={styles.textStyle}>
          Cake Price:   {this.state.user.price} IQD
      </Text>
        {/* </View>
        <View style={styles.cake}> */}
          <Text style={styles.mealTitle}>
            Meals - - - - - - - - - - - - - - - - - - - - -
          </Text>
        <Text style={styles.textStyle}>
          your meals: {this.state.food.food}
      </Text>
      <Text style={styles.textStyle}>
          Meal Price:   {this.state.food.foodPrice} IQD
      </Text>
      <Text style={styles.mealTitle}>
            Drinks - - - - - - - - - - - - - - - - - - - - -
          </Text>
          <Text style={styles.textStyle}>
          Drink Name:   {this.state.user.drink} 
      </Text>
      <Text style={styles.textStyle}>
          Drink quanitity:  0 {this.state.user.drink} 
      </Text>
        <Text style={styles.textStyle}>
          Drink Price:  0 {this.state.user.drink} IQD
      </Text>
        {/* </View>
         <View style={styles.cake}> */}
         <Text>
           - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
         </Text>
           <Text style={styles.totalPrice}>
             Total Price : {this.state.total.count}  IQD
           </Text>
         </View>
        {/* </View> */}
    </View>  
  )
}
}
const styles = StyleSheet.create({
  conatiner:{
//marginTop:40,
      backgroundColor:"#F77714",
      flex:1,
    //marginBottom:20
  },
  textStyle:{
    fontSize:22,
    color:"black", 
    marginTop:5,
    marginLeft:40,
    marginBottom:10
  },
  title:{
    marginLeft:120,
    //marginTop:50,
    fontFamily: 'serif',
    fontWeight:"bold",
    fontSize:25,
    marginTop:20,
    color:"#fff"
  },

  totalPrice:{
    fontSize:22,
    color:"black", 
    marginTop:10,
    marginLeft:20,
    marginBottom:20
    
  },
  total:{
    backgroundColor:"#fff"
  },
  cake:{
    backgroundColor:"#fff",
    //padding:30,
    width:"80%",
    alignSelf:"center",
    borderRadius:15,
    marginBottom:5,
    marginTop:30
  },
  mealTitle:{
    color:"red",
    fontSize:18,
    marginLeft:10
  }
})