import { MaterialCommunityIcons } from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function ActionIcon({action}){
    return(
        <>
            {
                action.title=='Gym' ?
                <MaterialCommunityIcons name="weight-lifter" size={24} color="white" /> :
                action.title=='Tasks' ? 
                <FontAwesome5 name="tasks" size={24} color="white" /> :
                action.title=='Work' ?
                <MaterialIcons name="work" size={24} color="white" /> :
                action.title=='Sleep' ?
                <MaterialCommunityIcons name="sleep" size={24} color="white" /> :
                action.title=='Music' ?
                <FontAwesome5 name="music" size={24} color="white" /> :
                <Entypo name="game-controller" size={24} color="white" />
            }
            
        </>

        
    )
}