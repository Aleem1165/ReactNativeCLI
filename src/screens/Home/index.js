import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(`Login`)}>
        <Text style={{color: 'red'}}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
