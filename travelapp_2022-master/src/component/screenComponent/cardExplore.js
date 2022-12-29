import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const CardExplore = () => {
  const explore = [
    {
      id: 1,
      img: require('../storage/images/post_1.jpg'),
      title: 'Whale Watching Tour',
      rate: '4.75',
      personRate: '214',
      hours: '4 hours',
      location: 'Los Angeles',
    },
    {
      id: 2,
      img: require('../storage/images/post_2.jpg'),
      title: 'Whale Watching Tour',
      rate: '4.75',
      personRate: '214',
      hours: '4 hours',
      location: 'Los Angeles',
    },
    {
      id: 3,
      img: require('../storage/images/post_3.jpg'),
      title: 'Whale Watching Tour',
      rate: '4.75',
      personRate: '214',
      hours: '4 hours',
      location: 'Los Angeles',
    },
    {
      id: 4,
      img: require('../storage/images/post_4.jpg'),
      title: 'Whale Watching Tour',
      rate: '4.75',
      personRate: '214',
      hours: '4 hours',
      location: 'Los Angeles',
    },

    {
      id: 5,
      img: require('../storage/images/post_5.jpg'),
      title: 'Whale Watching Tour',
      rate: '4.75',
      personRate: '214',
      hours: '4 hours',
      location: 'Los Angeles',
    },
    {
      id: 6,
      img: require('../storage/images/post_6.jpg'),
      title: 'Whale Watching Tour',
      rate: '4.75',
      personRate: '214',
      hours: '4 hours',
      location: 'Los Angeles',
    },
    {
      id: 7,
      img: require('../storage/images/post_7.jpg'),
      title: 'Whale Watching Tour',
      rate: '4.75',
      personRate: '214',
      hours: '4 hours',
      location: 'Los Angeles',
    },
    {
      id: 8,
      img: require('../storage/images/post_8.jpg'),
      title: 'Whale Watching Tour',
      rate: '4.75',
      personRate: '214',
      hours: '4 hours',
      location: 'Los Angeles',
    },
    {
      id: 9,
      img: require('../storage/images/post_9.jpg'),
      title: 'Whale Watching Tour',
      rate: '4.75',
      personRate: '214',
      hours: '4 hours',
      location: 'Los Angeles',
    },
    {
      id: 10,
      img: require('../storage/images/post_10.jpg'),
      title: 'Whale Watching Tour',
      rate: '4.75',
      personRate: '214',
      hours: '4 hours',
      location: 'Los Angeles',
    },
  ];
  return (
    <View>
      <FlatList
        data={explore}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ width: 188, height: 273, marginLeft: 13 }}>
            <Image
              source={item.img}
              style={{ width: 188, height: 188, borderRadius: 6 }}
            />
            <View>
              <View style={{ marginTop: 16 }}>
                <Text style={{ fontFamily: 'Poppins_Medium' }}>
                  {item.title}
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{ marginRight: 10, color: '#787878', fontSize: 14 }}
                >
                  {item.hours}
                </Text>
                <FontAwesome
                  name="circle"
                  size={4}
                  style={{ top: 6, color: '#787878' }}
                />
                <Text
                  style={{ marginLeft: 10, color: '#787878', fontSize: 14 }}
                >
                  {item.location}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome
                name="star"
                style={{ top: 2.5, marginRight: 5, color: '#F59D1A' }}
              />
              <Text style={{ color: '#F59D1A', fontSize: 14 }}>
                {item.rate} ({item.personRate})
              </Text>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default CardExplore;
