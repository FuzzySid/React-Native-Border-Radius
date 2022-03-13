import { View,StyleSheet,Text } from 'react-native';
import ActionIcon from './ActionIcon';


export default function ActionCard({action}){
    return(
        <View style={{...styles.card,backgroundColor:action.color}}>
            <ActionIcon action={action} />
            <Text style={styles.text}>{action.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        marginTop:20,
        height:90,
        width:150,
        backgroundColor:'#f9f9f9',
        padding:15,
        borderRadius:5,
        elevation:3,
        marginRight:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    text:{
        fontSize:20,
        fontWeight:'700',
        color:'#fff'
    }
  });