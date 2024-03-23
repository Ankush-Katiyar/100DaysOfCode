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

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{fontSize: 30}}>UseEffect of Unmount</Text>
      <Button title="Toggle Component" onPress={() => setShow(!show)} />
      {show ? <Student /> : null}
    </View>
  );
};

const Student = () => {
  useEffect(() => {
    return () => console.warn('useEffect Called on unmount');
  });
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}> Student </Text>
    </View>
  );
};

export default App;

