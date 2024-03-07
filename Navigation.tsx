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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './components/Home';
import {Login} from './components/Login';

const stack = createNativeStackNavigator();
const App = () => {
  const btnAction = () => {
    console.warn('btn pressed');
  };
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: props => <Button onPress={btnAction} title="left" />,
            headerRight: () => <Header />,
            title: 'User Login',
            headerStyle: {backgroundColor: 'skyblue'},
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 30,
            },
          }}
        />
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return <TextInput placeholder="Enter Name Buddy" />;
};

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
    </View>
  );
};

const Login = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default App;
