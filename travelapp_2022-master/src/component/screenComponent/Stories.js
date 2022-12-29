import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Dillon Wanner',
      image: require('../storage/images/avt_1.jpg'),
      story: require('../storage/images/story_1.jpg'),
    },
    {
      id: 2,
      name: 'Rowan Michael',
      image: require('../storage/images/avt_2.jpg'),
      story: require('../storage/images/story_2.jpg'),
    },
    {
      id: 3,
      name: 'Harper Krueger',
      image: require('../storage/images/avt_3.jpg'),
      story: require('../storage/images/story_3.jpg'),
    },
    {
      id: 4,
      name: 'Princess Hayden',
      image: require('../storage/images/avt_4.jpg'),
      story: require('../storage/images/story_4.jpg'),
    },
    {
      id: 5,
      name: 'Jaeden Casey',
      image: require('../storage/images/avt_5.jpg'),
      story: require('../storage/images/story_5.jpg'),
    },
    {
      id: 6,
      name: 'Morgan Pacheco',
      image: require('../storage/images/avt_6.jpg'),
      story: require('../storage/images/story_6.jpg'),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 16 }}
    >
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
                story: data.story,
              })
            }
          >
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 10,
                position: 'relative',
              }}
            >
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 30,
                    right: 10,
                    zIndex: 1,
                    backgroundColor: 'white',
                    borderRadius: 100,
                  }}
                >
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 24,
                      color: '#FB7A41',
                      borderColor: 'white',
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 84,
                  height: 84,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#FB7A41',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
              <Text
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  fontSize: 11.5,
                  opacity: data.id == 0 ? 1 : 0.5,
                  fontFamily: 'Poppins_Light',
                }}
              >
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
