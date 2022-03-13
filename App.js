import { StyleSheet, View, Text } from 'react-native';
import RoundedContainer from './RoundedContainer';
import ProfileScreen from './screen/ProfileScreen';
import Shape from './Shape';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RoundedContainer 
        type={'rounded'}
        height={300}
        width={300}
      />
         */}
      {/* <ProfileScreen/> */}
      {/* <Shape type={"square"}/> */}
      {/* <Shape type={"circle"}/> */}
      {/* <Shape type={"oval"}/> */}
      {/* <Shape type={"rounded-square"}/> */}
      {/* <Shape type={"roundedTop-square"}/> */}
      {/* <Shape type={"roundedBottom-square"}/> */}
      {/* <Shape type={"roundedTopLeft-square"}/> */}
      {/* <Shape type={"roundedTopRight-square"}/> */}
      {/* <Shape type={"roundedBottomLeft-square"}/> */}
      {/* <Shape type={"roundedBottomRight-square"}/>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
