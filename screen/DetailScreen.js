import React from 'react'
import { View, Text, Button } from 'react-native';
const DetailScreen = ({route, navigation }) => {

 const detail = route.params;

 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   
   
  <Text>Details Screen</Text>
  <Text>itemId: {JSON.stringify(detail.itemId)}</Text>
  <Text>otherParam: {JSON.stringify(detail.otherParam)}</Text>
  <Button
    title="Go to Details... again"
    onPress={() =>
      navigation.push('Detail', {
       "itemId": Math.floor(Math.random() * 100),
      })
    }
  />
  <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
  <Button title="Go back" onPress={() => navigation.goBack()} />
</View>
 )
}

export default DetailScreen

