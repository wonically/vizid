import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import CardExplore from '../screenComponent/cardExplore';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-virtualized-view';

const Explore = () => {
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
      <View>
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
                Explore
              </Text>
            </View>
            <View style={{ marginTop: 32, marginBottom: 50 }}>
              <CardExplore />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
