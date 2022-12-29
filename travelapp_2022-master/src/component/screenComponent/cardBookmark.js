import { View, Text, Image } from 'react-native';
import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const CardBookmark = () => {
  const bookmarks = [
    {
      id: 1,
      cardImage: require('../storage/images/post_5.jpg'),
      cardTitle: 'Whale Watching Tour',
      cardHour: '4 hours',
      cardLocation: 'Los Angeles',
      rate: '4,75',
      personRate: '1,8k',
    },
    {
      id: 2,
      cardImage: require('../storage/images/post_6.jpg'),
      cardTitle: 'Bridge Sight-seeing',
      cardHour: '1 hour',
      cardLocation: 'South Korea',
      rate: '4,25',
      personRate: '785',
    },
    {
      id: 3,
      cardImage: require('../storage/images/post_7.jpg'),
      cardTitle: 'City Sightseeing',
      cardHour: '2 hours',
      cardLocation: 'Los Angeles',
      rate: '4,75',
      personRate: '214',
    },
    {
      id: 4,
      cardImage: require('../storage/images/post_8.jpg'),
      cardTitle: 'Whale Watching Tour',
      cardHour: '4 hours',
      cardLocation: 'Los Angeles',
      rate: '4,75',
      personRate: '214',
    },
    {
      id: 5,
      cardImage: require('../storage/images/post_9.jpg'),
      cardTitle: 'Whale Watching Tour',
      cardHour: '4 hours',
      cardLocation: 'Los Angeles',
      rate: '4,75',
      personRate: '214',
    },
    {
      id: 6,
      cardImage: require('../storage/images/post_10.jpg'),
      cardTitle: 'Whale Watching Tour',
      cardHour: '4 hours',
      cardLocation: 'Los Angeles',
      rate: '4,75',
      personRate: '214',
    },
  ];
  return (
    <View style={{ marginBottom: 36 }}>
      {bookmarks.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              marginBottom: 16,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
              width: 396,
              height: 293,
              paddingLeft: 16,
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={data.cardImage}
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 6,
                }}
              />
            </View>

            <View
              style={{
                marginTop: 16,
                width: 368,
                height: 63,
                marginLeft: 14,
                marginBottom: 14,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Poppins_Medium',
                  fontSize: 16,
                }}
              >
                {data.cardTitle}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 141,
                  height: 18,
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins_Medium',
                    color: '#787878',
                  }}
                >
                  {data.cardHour}
                </Text>
                <FontAwesome
                  name="circle"
                  size={4}
                  style={{ top: 6, color: '#787878' }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins_Medium',
                    color: '#787878',
                  }}
                >
                  {data.cardLocation}
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome
                  name="star"
                  style={{ top: 2.5, marginRight: 4.5, color: '#F59D1A' }}
                />
                <Text style={{ color: '#F59D1A' }}>
                  {data.rate} ({data.personRate})
                </Text>
              </View>
              <View
                style={{ position: 'absolute', marginLeft: 330, marginTop: 15 }}
              >
                <Ionicons name="chevron-forward" size={24} color="#FB7A41" />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CardBookmark;
