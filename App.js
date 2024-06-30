import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
const PlaceholderImage = require("./assets/images/background-image.png")

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import { useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './screen/DetailScreen';
import CreatePostScreen from './screen/CreatePostScreen';
import SplashScreen from './screen/SplashScreen';
import SignupScreen from './screen/SignupScreen';
import { Ionicons } from '@expo/vector-icons';


import tw from 'tailwind-react-native-classnames';
import CompetitionScreen from './screen/CompetitionScreen';
import { CompetitionProvider } from './store/competitionContext';
const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={PlaceholderImage}
    />
  );
}


const CustomHeader = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack(); // Example function to go back in navigation stack
  };

  return (
    <View className='bg-white p-4 items-center justify-start flex-row shadow-none gap-3'>
      {/* Back Button Icon */}
      <TouchableOpacity onPress={handleBackPress} className='ml-2 rounded-full border border-gray-400 p-2'>
        <Ionicons name="arrow-back-outline" size={24} color={"gray"} />
      </TouchableOpacity>
      <Text className="text-lg font-bold">Create Account</Text>
    </View>
  );
};

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null)
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      console.log(result)
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true);
    } else {
      alert("You didn't select any image")
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };


  return (
    <CompetitionProvider>
      <NavigationContainer>
        <Stack.Navigator
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
        >

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            initialParams={{ itemId: 42 }}
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                // <Button
                //   onPress={() => alert('This is a button!')}
                //   title="Info"
                //   color="black"
                // />
                <Pressable onPress={() => alert('dkfj')} title="Info">
                  <Text>Info</Text>
                </Pressable>
              ),
            }} />

          <Stack.Screen name="Post" component={CreatePostScreen} />


          <Stack.Screen name="Splash" component={SplashScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              // header: ({ navigation }) => <CustomHeader navigation={navigation} />,
              // title:"Create Account",
              headerShown: false
            }}
          />

          <Stack.Screen
            name="Competition"
            component={CompetitionScreen}
            options={{
              // header: ({ navigation }) => <CustomHeader navigation={navigation} />,
              // title:"Create Account",
              headerShown: false
            }}
          />


        </Stack.Navigator>

      </NavigationContainer>

    </CompetitionProvider>


    // <View style={styles.container}>
    //   <View style={styles.imageContainer}>
    //     <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
    //     {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
    //   </View>


    //   {showAppOptions ? (
    //     <View style={styles.optionsContainer}>
    //       <View style={styles.optionsRow}>
    //         <IconButton icon="refresh" label="Reset" onPress={onReset} />
    //         <CircleButton onPress={onAddSticker} />
    //         <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
    //       </View>
    //     </View>
    //   ) : (
    //     <View style={styles.footerContainer}>
    //       <Button theme="primary" onPress={pickImageAsync} label={"Choose A Photo"} />
    //       <Button label={"Use This Photo"} onPress={() => (setShowAppOptions(true))} />
    //     </View>
    //   )
    //   }

    //   <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
    //     {/* A list of emoji component will go here */}
    //     <EmojiList onSelect={setPickedEmoji}  onCloseModal={onModalClose}/>
    //   </EmojiPicker>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

});


// microservie 
// decorator in type script
// never type in typescript
// security applied in api
// unit test mocking and stubing 
// event loop, closure
