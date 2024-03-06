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
  TouchableHighlight,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: '#bbb',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'blue',
    elevation: 10,
    shadowOpacity: 1,
  },
  success: {backgroundColor: 'green'},
  primary: {backgroundColor: 'skyblue'},
  warning: {backgroundColor: 'gold'},
  error: {backgroundColor: 'red'},
});

export default App;
