import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import CardBookmark from '../screenComponent/cardBookmark';

const Save = () => {
  const [loaded] = useFonts({
    Poppins_Light: require('../../../assets/font/Poppins/Poppins-Light.ttf'),
    Poppins_Medium: require('../../../assets/font/Poppins/Poppins-Medium.ttf'),
    Poppins_Bold: require('../../../assets/font/Poppins/Poppins-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <View style={{ marginLeft: 16, marginTop: 16 }}>
            <Text
              style={{
                fontFamily: 'Poppins_Medium',

                fontSize: 32,
                letterSpacing: -0.3,
                lineHeight: 48,
                color: 'rgba(16, 122, 245, 1)',
              }}
            >
              Bookmarks
            </Text>
          </View>
          <View style={{ marginTop: 32 }}>
            <CardBookmark />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Save;
