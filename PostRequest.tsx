import {View, Text, Button, FlatList} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

export default function APIs() {
  const [data, setData] = useState([]);
  const baseURL = 'https://jsonplaceholder.typicode.com';

  const getAPI = () => {
    axios({
      method: 'GET',
      url: `${baseURL}/posts`,
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  const get_by_ID = () => {
    axios({
      method: 'GET',
      url: `${baseURL}/posts/11`,
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const postAPI = () => {
    axios({
      method: 'POST',
      url: `${baseURL}/posts`,
      body: JSON.stringify({
        id: 101,
        title: 'New Title',
        boldy: 'New Body for the Data.',
      }),
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };
  return (
    <View>
      <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
        APIs with Axios
      </Text>
      <Button title="GET" onPress={getAPI} />
      <Button title="GET By Id" onPress={get_by_ID} />
      <Button title="Post Request" onPress={postAPI} />
    </View>
  );
}
