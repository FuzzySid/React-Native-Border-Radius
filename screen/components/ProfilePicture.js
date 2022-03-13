import {Image, StyleSheet} from 'react-native';

export default function ProfilePicture(){
    return(
        <Image
            style={styles.profile}
            source={{
            uri: 'https://i.stack.imgur.com/QQcdg.png',
            }}
        />
    )
}

const styles = StyleSheet.create({
    profile:{
        marginTop:20,
        height:100,
        width:100,
        backgroundColor:'wheat',
        borderRadius:50
    }
  });