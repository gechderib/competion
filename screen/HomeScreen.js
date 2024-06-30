import React, { useContext, useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import competitionContext from '../store/competitionContext';


const HomeScreen = ({ navigation, route }) => {
  const [post, setPost] = useState(null)

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      setPost(route.params?.post)
    }
  }, [route.params?.post]);
  // flex: 1, alignItems: 'center', justifyContent: 'center',
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-900">{post}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}
      />

      <TouchableOpacity
        className="text-red-900 bg-red-700 px-5 py-5"
        onPress={() => navigation.navigate('Post')}
      >
        <Text >Post</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="text-red-900 bg-red-700 px-5 py-5"
        onPress={() => navigation.navigate('Splash')}
      >
        <Text >Splash</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="text-red-900 bg-red-700 px-5 py-5"
        onPress={() => navigation.navigate('Signup')}
      >
        <Text >Signup</Text>
      </TouchableOpacity>


    </View>
  )
}

export default HomeScreen