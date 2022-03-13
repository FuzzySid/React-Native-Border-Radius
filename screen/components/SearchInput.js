import { TextInput, StyleSheet } from "react-native"

export default function SearchInput(){
    return(
        <TextInput
            style={styles.input}
            placeholder="Seach your items.."
       />

    )
}

const styles = StyleSheet.create({
    input:{
        marginTop:20,
        height:40,
        width:250,
        backgroundColor:'#f9f9f9',
        padding:10,
        borderRadius:5,
        elevation:0.2
        
    }
  });