import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, SafeAreaView, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/component/screens/Home';
import Explore from './src/component/screens/Explore';
import Save from './src/component/screens/Save';
import Profile from './src/component/screens/Profile';
import SignIn from './src/component/screens/SignIn';
import SignUp from './src/component/screens/SignUp';
import Status from './src/component/screenComponent/Status';
import DetailCategories from './src/component/screenComponent/DetailCategories';
import DetailPost from './src/component/screens/DetailPost';
import Maps from './src/component/screens/Maps';
import CreatePost from './src/component/screens/CreatePost';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const slides = [
  {
    key: 's1',
    title: 'Ready for take-off',
    desc: 'Welcome to Adventure Travel, a React Native project for Mobile Apps',
    image: require('./assets/imageonboarding/pic_1.png'),
    backgroundColor: '#63ABFF',
  },
  {
    key: 's2',
    title: 'Ready for take-off',
    desc: 'Welcome to Adventure Travel, a React Native project for Mobile Apps',
    image: require('./assets/imageonboarding/pic_2.png'),
    backgroundColor: '#63ABFF',
  },
  {
    key: 's3',
    title: 'Ready for take-off',
    desc: 'Welcome to Adventure Travel, a React Native project for Mobile Apps',
    image: require('./assets/imageonboarding/pic_3.png'),
    backgroundColor: '#63ABFF',
  },
];

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#FB7A41',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopColor: 'rgba(0, 0, 0, .2)',
          height: 60,
          shadowOpacity: 0.25,
        },

        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
            size = focused ? size + 2 : size + 2;
          } else if (route.name === 'Save') {
            iconName = focused
              ? 'ios-bookmarks-outline'
              : 'ios-bookmarks-outline';
          } else if (route.name === 'Reels') {
            iconName = focused
              ? 'caret-forward-circle'
              : 'caret-forward-circle-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'md-compass-outline' : 'md-compass-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Save" component={Save} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

function App() {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };
  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            marginTop: 120,
            marginHorizontal: 16,
          }}
          source={item.image}
        />
        <Text
          style={{
            marginTop: 33,
            fontSize: 32,
            fontWeight: '700',
            color: '#FFFFFF',
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            marginTop: 16,
            fontSize: 16,
            marginHorizontal: 42,
            textAlign: 'center',
            fontWeight: '500',
            color: '#FFFFFF',
          }}
        >
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <>
      {showRealApp ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signin" component={SignIn} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Bottom" component={BottomTabScreen} />
          <Stack.Screen name="Status" component={Status} />
          <Stack.Screen name="DetailCategories" component={DetailCategories} />
          <Stack.Screen name="DetailPost" component={DetailPost} />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
        </Stack.Navigator>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
