import { View, Text, Image } from 'react-native';
import React from 'react';

const Comment = () => {
  const comment = [
    {
      id: 1,
      avt: require('../storage/images/avt_1.jpg'),
      user: 'Jenna Bradley',
      hour: '1 hour',
      content:
        'Flipping the cassette while reading the fold-out cover 😁',
    },
    {
      id: 2,
      avt: require('../storage/images/avt_2.jpg'),
      user: 'Taryn Aguirre',
      hour: '3 hours',
      content:
        'Omg too gooooood, so gorgeous whenever I see it!',
    },
    {
      id: 3,
      avt: require('../storage/images/avt_3.jpg'),
      user: 'Patience Conway',
      hour: '4 hours',
      content:
        'Turn the music on and your trip is purr-fect...',
    },
    {
      id: 4,
      avt: require('../storage/images/avt_4.jpg'),
      user: 'Chace Hays',
      hour: '5 hours',
      content:
        'Right into the heaven',
    },
    {
      id: 5,
      avt: require('../storage/images/avt_5.jpg'),
      user: 'Kamora Michael',
      hour: '5 hours',
      content:
        'Hahaha take me with you next time!',
    },
  ];
  return (
    <View>
      {comment.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              height: 36,
              width: 344,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
            }}
          >
            <Image
              source={data.avt}
              style={{ width: 32, height: 32, borderRadius: 100 }}
            />
            <View style={{ paddingLeft: 16 }}>
              <Text style={{ fontSize: 12, fontFamily: 'Poppins_Medium' }}>
                {data.user}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins_Light',
                  color: '#787878',
                  fontSize: 10,
                }}
              >
                {data.hour}
              </Text>
            </View>
            <Text
              style={{
                width: 170,
                height: 40,
                fontSize: 12,
                marginLeft: 4,

                fontFamily: 'Poppins_Light',
                lineHeight: 18,
                letterSpacing: -0.3,
              }}
            >
              {data.content}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Comment;
