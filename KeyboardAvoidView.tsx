import React from 'react';
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
import CompanyData from './components/CompanyData';
export default App;

function App(): JSX.Element {
  const fruit = val => {
    console.warn(val);
  };
  //list with flat list component
  const users = [
    {
      id: 1,
      label: 'Digital Evangelist',
    },
    {
      id: 2,
      label: 'Web developer',
    },
    {
      id: 3,
      label: 'Traveller',
    },
    {
      id: 4,
      label: 'Digital Evangelist',
    },
    {
      id: 5,
      label: 'Web developer',
    },
    {
      id: 6,
      label: 'Traveller',
    },
    {
      id: 7,
      label: 'Traveller',
    },
    {
      id: 8,
      label: 'Digital Evangelist',
    },
    {
      id: 9,
      label: 'Web developer',
    },
    {
      id: 10,
      label: 'Traveller',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>Hello, I am Ankush</Text>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 15}}>{item.label}</Text>
        )}
      />
      <Text style={styles.textBox}>Digital Evangelist at StatusNeo</Text>
      <Text style={styles.textBox}>BIKE RIDER</Text>
      <Button
        style={styles.textBox}
        title="Press Here for more"
        onPress={() => fruit('Thankyou for pressing')}></Button>
      <UserData />
      <CompanyData />
      <User />
    </View>
  );
}

function User(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setEmail('');
    setName('');
    setPassword('');
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{backgroundColor: 'green', padding: 5}}>
      <ScrollView>
        <Text style={{fontSize: 30, textAlign: 'center'}}>
          Login to my portal
        </Text>
        <TextInput
          style={fostyles.textBox}
          placeholder="Enter User Name"
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={fostyles.textBox}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TextInput
          style={fostyles.textBox}
          placeholder="Enter User Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <View style={{marginBottom: 10}}>
          <Button
            color={'orange'}
            title="Print Details"
            onPress={() => setDisplay(true)}
          />
        </View>
        <Button title="Clear Details" onPress={resetFormData} />
        <View>
          {display ? (
            <View>
              <Text>User Name is :{name}</Text>
              <Text>User Password is :{password}</Text>
              <Text>User email is :{email}</Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function UserData(): JSX.Element {
  return <View></View>;
}

const styles = StyleSheet.create({
  textBox: {
    color: 'blue',
    fontSize: 25,
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 10,
    height: 45,
    borderWidth: 2,
    textAlign: 'center',
  },
});

const fostyles = StyleSheet.create({
  textBox: {
    color: 'blue',
    fontSize: 18,
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 10,
    height: 45,
    borderWidth: 2,
    textAlign: 'center',
  },
});
