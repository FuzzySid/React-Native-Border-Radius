import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    main:{
        backgroundColor:'#FF5757',
        height: 200,
        width:200
    },
    rounded:{
        borderRadius:10
    },  
    circle:{
        // borderRadius:999,
        borderRadius:100
    },
    oval:{
        width:150,
        borderRadius:100
    },
    roundedTopLeft:{
        borderTopLeftRadius:10, 
        // borderTopStartRadius:10 
    },
    roundedTopRight:{
        borderTopRightRadius:10 ,
        // borderTopEndRadius: 10 
    },
    roundedBottomLeft:{
      borderBottomLeftRadius:10,
    //   borderBottomStartRadius:10
    },
    roundedBottomRight:{
        borderBottomRightRadius:10,
        // borderBottomEndRadius:10
    },
    roundedTop:{
        borderTopStartRadius:10,
        borderTopEndRadius:10
    },
    roundedBottom:{
        borderBottomStartRadius:10,
        borderBottomEndRadius:10
    },


    
  });

  export default GlobalStyles;
