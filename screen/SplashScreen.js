import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const spalshVideo = require("../assets/videos/comp.mp4")

const SplashScreen = ({navigation}) => {
  return (
    <View className='flex-1'>
      <Video
        source={spalshVideo} // Replace with your video URL
        className='absolute top-0 left-0 right-0 bottom-0'
        resizeMode="cover"
        shouldPlay
        isLooping
      // isMuted

      />
      <View className='absolute top-24 left-0 right-0 items-left px-5 py-4'>
        <Text className='text-white text-5xl font-bold'>Soo </Text>
        <Text className='text-white text-5xl font-bold'>and Carrots</Text>
      </View>

      <View className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-white '>

        <TouchableOpacity 
                onPress={() => navigation.navigate('Signup')}

        className='flex-row justify-between items-center bg-blue-600 py-4 px-5 rounded-full mb-4'>
          <View className="flex-row gap-2">
            <Ionicons name="person-outline" size={24} color="white" className='mr-2' />
            <Text className='text-white text-lg'>Sign Up for free</Text>
          </View>
          <Ionicons name="arrow-forward-circle-outline" size={40} color="white" className='ml-2' />
        </TouchableOpacity>

        <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}

         className='flex-row justify-between items-center bg-gray-800 py-4 px-5 rounded-full'>
          <View className="flex-row gap-2">
            <Ionicons name="mail-outline" size={24} color="white" className='mr-2' />
            <Text className='text-white text-lg'>Continue with Email</Text>
          </View>
          <Ionicons name="arrow-forward-circle-outline" size={40} color="white" className='ml-2' />
        </TouchableOpacity>
        

        <View className="bg-white w-1/2 h-1.5 self-center rounded-full mt-24"></View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default SplashScreen
