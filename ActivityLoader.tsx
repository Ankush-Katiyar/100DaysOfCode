import React, {useEffect} from 'react';
import {useState} from 'react';

import {
  Text, //First letter Capital
  View,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './components/Home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const App = () => {
  const [show, setShow] = useState(false);
  const displayLoader = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 8000);

    //api call in 3sec
  };
  return (
    <View style={styles.main}>
      <ActivityIndicator size={80} color="green" animating={show} />
      <Button title="show loader" onPress={displayLoader} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
