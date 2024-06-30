import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => (
 {
  ...config,
  "name": "Competition",
  "slug": "Competition",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/icon.png",
  "userInterfaceStyle": "light",
  "splash": {
   "image": "./assets/splash.png",
   "resizeMode": "contain",
   "backgroundColor": "#ffffff"
  },
  "ios": {
   "supportsTablet": true
  },
  "android": {
   "adaptiveIcon": {
    "foregroundImage": "./assets/adaptive-icon.png",
    "backgroundColor": "#ffffff"
   }
  },
  "web": {
   "favicon": "./assets/favicon.png"
  },
  extra:{
   storybookEnabled: process.env.STORYBOOK === '1'
  }
 }
);