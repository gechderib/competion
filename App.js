import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
const PlaceholderImage = require("./assets/images/background-image.png")

import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screen/SplashScreen';
import SignupScreen from './screen/SignupScreen';
import { Ionicons } from '@expo/vector-icons';


import tw from 'tailwind-react-native-classnames';
import CompetitionScreen from './screen/CompetitionScreen';
import { CompetitionProvider } from './store/competitionContext';

import Constants from 'expo-constants'
import Storybook from './.storybook'


const Stack = createNativeStackNavigator();



function App() {

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

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook: App;

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
