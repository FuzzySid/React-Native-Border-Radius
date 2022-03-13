import { View, StyleSheet } from "react-native";

export default function RoundedContainer({
    children,
    type='rounded',
    height=300,
    width=300
}){
    return(
        <View  style={{...styles.container,...styles[type],height:height,width:width}}>
            {children}
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9f9f9',
    },
    rounded:{
        borderRadius: 10
    },
    circle:{
        borderRadius: 999
    }
  });
  