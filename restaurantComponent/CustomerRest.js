import { View, Text, Image, ScrollView , StyleSheet, TouchableOpacity, SafeAreaView, FlatList} from 'react-native'
import React, { useEffect, useState, Component } from 'react'
import FontAwesom5 from 'react-native-vector-icons/FontAwesome';
import {getStorage, ref, getDownloadURL} from 'firebase/storage'
import { SearchBar } from 'react-native-elements';
import ButtomTaps from './ButtomTaps';

export default class CustomerRest extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            dataSource:[],
            dataBackup:[],
            error:null,
            searchTxt:null,
        };
    }
    componentDidMount(){
        var data=[   
            {
              name:"Tche-Tche",
              rate:"3.0",
              id:"1",
            //url: urlJollas,
            url:require('../photos/tchetche.jpg'),
             type:"Restaurant & Cafe"
            },
            {
            name:"Jollas",
            rate:"2.6",
            id:"2",
            url:require('../photos/jollas.jpg'),
            type:"Restaurant & Cafe"
            },
            {
              name:"Mivan",
              rate:"2.5",
              id:"3",
              url:require('../photos/Mivan.jpg'),
              type:"Restaurant"
            },
            {
              name:"Brokar",
            rate:"2.5",
            id:"4",
            url:require('../photos/birth.jpg'),
            type:"Restaurant"
            },
            {
              name:"Suli Grand",
            rate:"3.0",
            id:"5",
            url:require('../photos/birthday.png'),
            type:"Restaurant"
            },
            {
            name:"CreapAaway",
            rate:"3.5",
            id:"6",
            url:require('../photos/birth.jpg'),
            type:"Restaurant"
            },
            {
            name:"ChechBeach",
            rate:"2.2",
            id:"7",
            url:require("../photos/party2.jpg"),
            type:"Restaurant"
            }
      ];
      this.setState({
          dataBackup:data,
          dataSource:data
      });
    }
  //   filterItem = task=>{
  //    var query= task.nativeEvent.text;
  //       this.setState({
  //           query:query
  //       });
  //       if (query==""){
  //           this.setState({
  //               dataSource:this.state.dataBackup,
  //           });
  //       }else{
  //           var data=this.state.dataBackup;
  //           query= query.toLowerCase();
  //           data=data.filter(l=>l.name.toLowerCase().match(query));
  //           this.setState({
  //               dataSource:data
  //           });
  //       }
  //  };
  updateSearch=searchTxt=>{
    this.setState({searchTxt},()=>{
      if(''==searchTxt){
        this.setState({
          dataSource:[...this.state.dataBackup],
        });
              return;
      }
      this.state.dataSource=this.state.dataBackup.filter(function(item){
        return item.name.includes(searchTxt);
      }).map(function({name, id ,rate, url, type}){
        return {name, id , rate, url, type};
      });
    });
  };

  render() {
    return (
    
 
  <View style={{
    flex:1
}}>
<SearchBar 
round
// platform={Platform.OS}
clearIcon={true}
placeholder="Search Here..."
value={this.state.searchTxt}
onChangeText={this.updateSearch}

cancelButtonTitle='Cancel'
containerStyle={styles.container}
inputStyle={{backgroundColor: '#fff'}}
lightTheme
style={styles.searchBar}  
/>
<FlatList
data={this.state.dataSource}
 renderItem={({item})=>(
    <SafeAreaView style={{
 flex:1
}}>
   <View style={styles.view}>
     <TouchableOpacity  onPress={() => {
     this.props.navigation.navigate('RestaurantInfo', {
       name:item.name,
      rate:item.rate,
      album_img:item.url
     });
   }}>
      <View style={styles.imgView}>
          <Image
          //key={item.name}
           source={item.url}
           style={styles.img}/>
      </View>
      </TouchableOpacity>
     
     <View style={styles.viewText}>
        
           <Text style={styles.text} > { item.name } </Text>
           <View style={{
             backgroundColor:"#fff",
            
             justifyContent:"center",
             flexDirection:"row",
           }}>
             <FontAwesom5 name="star" size={26} style={{
               marginTop:6,
           color: "orange", alignSelf:"center"
               }}/>
             <View style={styles.rateDesign}>
             
                <Text style={styles.textRate}>
                 { item.rate }
                 </Text>
             </View>
                 
           </View>
           
      </View>
      <Text style={{fontFamily: 'sans-serif-medium', fontSize:18}}>
       {item.type}
      </Text>
</View>

</SafeAreaView>

)}
/>
<View style={{
backgroundColor:"#fff"
}}>
<ButtomTaps navigation={this.props.navigation} />
</View>


</View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
   // marginTop: 2,
    backgroundColor:"#F77714"
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
      width:25,
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center"
    }
  });