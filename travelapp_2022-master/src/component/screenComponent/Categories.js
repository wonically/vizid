import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  const categories = [
    {
      id: 1,
      img: require('../storage/images/cat_1.jpg'),
      title: 'New York City',
      location: 'New York, USA',
      intro:
        'The symbol of the whole United States in general and the symbol of New York City in particular, the Statue of Liberty is definitely a place you will not be able to ignore in all your trips to this city.',
    },
    {
      id: 2,
      img: require('../storage/images/cat_2.jpg'),
      title: 'Big Ben',
      location: 'London, England',
      intro:
        "Big Ben clock tower is considered the symbol of London. This is the common name of the clock tower of the Palace of Westminster, in which Big Ben is the largest bell (weighing about 13.5 tons) of the tower's 5 bells.",
    },
    {
      id: 3,
      img: require('../storage/images/cat_3.jpg'),
      title: 'Osaka Castle',
      location: 'Osaka, Japan',
      intro:
        'Located in the heart of Osaka city, Osaka Castle Park is a huge park and witness the history of ups and downs of this place. This is an attractive tourist destination of Osaka, attracting a large number of visitors to Japan, especially those who love visiting castles.',
    },
    {
      id: 4,
      img: require('../storage/images/cat_4.jpg'),
      title: 'Eiffel Tower',
      location: 'Paris, France',
      intro:
        "The Eiffel Tower was the tallest building in the world at that time. The tower's 300m height exceeds that of the second, the 170m tall Washington Monument in the United States.",
    },
  ];

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.push('DetailCategories', {
                  title: item.title,
                  img: item.img,
                  intro: item.intro,
                })
              }
            >
              <View
                key={index}
                style={{
                  height: 280,
                  width: 188,
                  marginRight: 20,
                  marginBottom: 25,
                }}
              >
                <View
                  style={{
                    paddingLeft: 20,
                  }}
                >
                  <View
                    style={{
                      position: 'relative',
                      flexDirection: 'row',
                      zIndex: 1,
                      top: 20,
                    }}
                  >
                    <Ionicons
                      name="location-outline"
                      style={{
                        paddingTop: 3,
                        paddingHorizontal: 8,
                        fontSize: 12,
                        color: '#FFFFFF',
                        fontWeight: '500',
                      }}
                    />
                    <Text
                      style={{
                        lineHeight: 18,
                        fontSize: 12,
                        color: '#FFFFFF',
                        fontFamily: 'Poppins_Medium',
                      }}
                    >
                      {item.location}
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={item.img}
                      style={{
                        position: 'absolute',
                        width: 188,
                        height: 280,
                        borderRadius: 6,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      position: 'relative',
                      top: 200,
                      left: 8,
                      width: 172,
                      height: 72,
                    }}
                  >
                    <Text
                      style={{
                        letterSpacing: -0.3,
                        lineHeight: 36,
                        fontSize: 24,
                        fontFamily: 'Poppins_Light',
                        color: '#FFFFFF',
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
