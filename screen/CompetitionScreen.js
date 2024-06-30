import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import CompetitionList from '../components/CompetitionList'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ navigation }) => {
 const handleBackPress = () => {
  navigation.goBack();
 };

 return (
  <View className='bg-white p-4 items-center justify-between flex-row shadow-none gap-3'>
   {/* Back Button Icon */}
   <TouchableOpacity onPress={handleBackPress} className='ml-2 rounded-full border bg-gray-200 border-gray-200 p-2'>
    <Ionicons name="arrow-back-outline" size={24} color={"gray"} />
   </TouchableOpacity>

   <View className='relative w-3/4'>
    <TextInput
     className='bg-gray-100 p-3 rounded-3xl pr-10'
     placeholder="search competition"
     onChangeText={() => { }}
    />
    <TouchableOpacity
     className='absolute top-0 right-0 m-3'
     onPress={() => { }}
    >
     <Ionicons name="search-outline" size={24} color="gray" className='mr-2' />
    </TouchableOpacity>
   </View>
  </View>
 );
};


const CompetitionScreen = ({ navigation }) => {
 return (
  <SafeAreaView className="flex-1">
   <CustomHeader navigation={navigation} />
   <View className="flex-1 justify-start items-start p-5  bg-white">
    <Text className="text-xl font-extrabold">Competition</Text>
    <Text className="">An account is needed per one host. If you already have an account for the host of competition you want to sign up, you can login and  register.</Text>
    <CompetitionList />
   </View>
  </SafeAreaView>
 )
}

export default CompetitionScreen