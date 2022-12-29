import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import React from 'react';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import PostSecond from '../screenComponent/Post_1';

const Profile = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'white',
              height: 497,
              width: '100%',
              borderRadius: 12,
              shadowOpacity: 0.25,
              shadowRadius: 18,
            }}
          >
            <View
              style={{
                backgroundColor: '#107AF5',
                width: '100%',
                height: 269,
                borderRadius: 12,
              }}
            >
              <Image
                source={require('../storage/images/avt_1.jpg')}
                style={{
                  marginTop: 50,
                  marginLeft: 140,
                  width: 129,
                  height: 129,
                  borderRadius: 100,
                }}
              />
              <Text
                style={{
                  marginTop: 27,
                  textAlign: 'center',
                  fontSize: 16,
                  lineHeight: 22.4,
                  letterSpacing: 0.2,
                  fontWeight: '600',
                  color: 'white',
                }}
              >
                Dillon Wanner
              </Text>
            </View>
            <View style={{ marginTop: 28 }}>
              <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                <Feather
                  name="phone"
                  size={24}
                  style={{
                    color: '#FB7A41',
                    marginLeft: 19,
                    marginRight: 14,
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '300',
                    lineHeight: 22.4,
                    letterSpacing: 0.2,
                  }}
                >
                  (+33)6 55 59 16 45
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                <Feather
                  name="mail"
                  size={24}
                  style={{
                    color: '#FB7A41',
                    marginLeft: 19,
                    marginRight: 14,
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '300',
                    lineHeight: 22.4,
                    letterSpacing: 0.2,
                  }}
                >
                  dillonwanner@gmail.com
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons
                  name="location-outline"
                  size={24}
                  style={{
                    color: '#FB7A41',
                    marginLeft: 19,
                    marginRight: 14,
                    bottom: 2,
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '300',
                    lineHeight: 22.4,
                    letterSpacing: 0.2,
                  }}
                >
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </Text>
              </View>
            </View>
            <LinearGradient
              colors={['#F6472E', '#FB7A41']}
              style={{ marginHorizontal: 16, borderRadius: 6, marginTop: 32 }}
            >
              <View style={{ width: 396, height: 48 }}>
                <Text
                  style={{
                    textAlign: 'center',
                    right: 6,
                    marginTop: 12,
                    color: 'white',
                    fontFamily: 'Poppins_Medium',
                    lineHeight: 24,
                    letterSpacing: -0.3,
                    fontSize: 16,
                  }}
                >
                  Edit Profiles
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ marginTop: 32, marginBottom: 50 }}>
            <PostSecond />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
