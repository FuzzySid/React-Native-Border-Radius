import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {View} from 'react-native';

export default function IconTray({styles}){
    return(
        <View style={{...styles.flexRow,...styles.iconTray}}>
            <View style={styles.icon}>
                    <Ionicons name="settings" size={20} color="#545454" />
            </View>
            <View style={styles.icon}>
                    <Ionicons name="notifications" size={20} color="#545454" />
            </View>
            <View style={styles.icon}>
                    <Entypo name="edit" size={20} color="#545454" />
            </View>
        </View>
    )
}