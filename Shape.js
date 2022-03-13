import {View} from 'react-native';
import { useState } from 'react';
import GlobalStyles from './GlobalStyles';

export default function Shape({type}){
    
    const [shapeClass,]=useState(type.split('-')[0])
   
        
    return(
        <View style={{...GlobalStyles.main,...GlobalStyles[shapeClass]}}>
            
        </View>
    )
}