import React, { useEffect } from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/screens/Home';
import MainNavigator from './navigation';


export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <View style={styles.container}>
      <MainNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height ,
    // width: Dimensions.get('window').width * 0.6,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginLeft:Dimensions.get(`window`).width * 0.05,
    // marginTop: Dimensions.get('window').height *0.05,
  },
});
