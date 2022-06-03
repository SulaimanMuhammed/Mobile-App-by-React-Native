import { View, StyleSheet, Text} from 'react-native'
import {React,  useState} from 'react'
import { SearchBar } from 'react-native-elements';
export default function Search() {
  
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    
      <View style={styles.container}>
       <SearchBar 
       round
       // platform={Platform.OS}
        clearIcon={true}
        placeholder="Search Here..."
        onChangeText={updateSearch}
        value={search}
        cancelButtonTitle='Cancel'
        containerStyle={styles.container}
        inputStyle={{backgroundColor: '#fff'}}
        lightTheme
        style={styles.searchBar}  
      /> 
    </View>
    

  )
}
const styles = StyleSheet.create({
  container: {
   marginTop: 2,
   backgroundColor:"#F77714"
  },
  searchBar:{
    borderRadius:5,
    backgroundColor:"#fff"
  }
});