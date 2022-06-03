import { View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect, useState}from 'react'
import FontAwesom5 from 'react-native-vector-icons/FontAwesome';
export default function ButtomTaps({navigation}) {
  const [activeTab, setActiveTab]=useState("Restaurants");

   return (

<View style={{
     flexDirection:"row",
     justifyContent:"space-between",
    alignItems:"center",
    padding:15
  }}>
  <ButtomTab text="home" colorIcon="orange" navigation={navigation} name="Restaurants" iconName="home" activeTab={activeTab} setActiveTab={setActiveTab}/>
  <ButtomTab text="Orders" colorIcon="balck" navigation={navigation} name="Orders" iconName="book" activeTab={activeTab} setActiveTab={setActiveTab}/>
  <ButtomTab text="Search" colorIcon="balck" navigation={navigation} name="SearchPage" iconName="search" activeTab={activeTab} setActiveTab={setActiveTab}/>
  <ButtomTab text="Discounts" colorIcon="balck" navigation={navigation} name="Discounts" iconName="money" activeTab={activeTab} setActiveTab={setActiveTab}/>
  <ButtomTab text="User" colorIcon="balck" navigation={navigation} name="User" iconName="user" activeTab={activeTab} setActiveTab={setActiveTab}/>
  </View>
  
  
  )
}  
const ButtomTab=(props)=>(
          <TouchableOpacity 
            onPress={async()=> { props.navigation.navigate(props.name),props.setActiveTab(props.text)}}
            >
              <FontAwesom5 name={props.iconName} size={20} style={{
                  color: props.activeTab==props.text ? "orange": "black", alignSelf:"center"
                    }}/>
              <Text>
              
                { props.text}
              </Text>

       </TouchableOpacity>

      
     
  


      
);