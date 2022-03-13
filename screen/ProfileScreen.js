import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import ActionCard from "./components/ActionCard";
import IconTray from "./components/IconTray";
import ProfilePicture from "./components/ProfilePicture";
import SearchInput from "./components/SearchInput";


const actionCards=[
    {title:'Gym',color:'#ff5757'},
    {title:'Tasks',color:'#00c2cb'},
    {title:'Work',color:'#ff914d'},
    {title:'Sleep',color:'#7ed957'},
    {title:'Music',color:'#cb6ce6'},
    {title:'Games',color:'#5271ff'}
]

export default function ProfileScreen(){
    return(
        <>
            <ProfilePicture/>
            <Text style={styles.text}>Siddhant Varma</Text>
            <IconTray styles={styles}/>
            <SearchInput/>
            <View style={styles.flexRow}>
                {
                    actionCards.map(action=><ActionCard key={action.title} action={action} />)
                }
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'white'}}>Logout</Text>
            </TouchableOpacity>
           
        </>
    )
}

const styles = StyleSheet.create({
    flexRow:{
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        maxWidth:400,
        flexWrap:'wrap',
        marginTop:20
    },
    iconTray:{
        maxWidth:400,
        justifyContent:'space-between',
        marginLeft:20
    },
    icon:{
        height:40,
        width:40,
        borderRadius:25,
        backgroundColor:'#F4F4F4',
        marginRight:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        marginTop:15,
        fontSize:16,
        fontWeight:'400'
    },
    button:{
        marginTop:30,
        backgroundColor:'#545454',
        borderRadius:20,
        height:40,
        width:120,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
  });