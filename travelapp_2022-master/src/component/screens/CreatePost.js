import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const CreatePost = ({ navigation }) => {
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
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontFamily: 'Poppins_Medium',
                    fontSize: 32,
                    letterSpacing: -0.3,
                    lineHeight: 48,
                    color: 'rgba(16, 122, 245, 1)',
                  }}
                >
                  Post
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.goBack('Home')}
                  style={{ justifyContent: 'center', marginLeft: '72%' }}
                >
                  <Ionicons
                    name="close"
                    size={25}
                    style={{ color: 'black', opacity: 0.6 }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 100,
                    marginTop: 16,
                  }}
                  source={require('../storage/images/avt_1.jpg')}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    top: 5,
                    fontFamily: 'Poppins_Medium',
                    lineHeight: 22.5,
                    letterSpacing: -0.3,
                  }}
                >
                  Cameron Williamson
                </Text>
              </View>

              <View style={{ marginTop: 32 }}>
                <TextInput
                  placeholder="topic"
                  style={{
                    paddingLeft: 15,
                    height: 50,
                    width: '95%',
                    borderWidth: 1,
                    borderRadius: 6,
                  }}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  placeholder="address"
                  style={{
                    paddingLeft: 15,
                    height: 50,
                    width: '95%',
                    borderWidth: 1,
                    borderRadius: 6,
                  }}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  placeholder="what'll you do"
                  style={{
                    paddingLeft: 15,
                    height: 194,
                    width: '95%',
                    borderWidth: 1,
                    borderRadius: 6,
                    paddingBottom: 157,
                  }}
                />
              </View>

              <LinearGradient
                colors={['#F6472E', '#FB7A41']}
                style={{ borderRadius: 6, marginTop: 68, marginRight: 16 }}
              >
                <View style={{ width: '95%', height: 48 }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 12,
                      color: 'white',
                      fontFamily: 'Poppins_Medium',
                      lineHeight: 24,
                      letterSpacing: -0.3,
                      fontSize: 16,
                    }}
                  >
                    Post
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;
