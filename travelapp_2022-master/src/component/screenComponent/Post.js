import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Post = () => {
  const navigation = useNavigation();
  const postInfo = [
    {
      id: 1,
      postUser: 'Kathryn Murphy',
      postPersonImage: require('../storage/images/avt_7.jpg'),
      postImage: require('../storage/images/post_1.jpg'),
      location: require('../storage/images/location_1.jpg'),
      hour: '4 hours',
      address: 'Los Angeles',
      title: 'Whale Watching Tour',
      rate: 4.75,
      personRate: 214,
      caption:
        'It all boils down to the fact that we understand the “flatness” of our phone screens. Faux 3d elements and real-world textures mentally clash with that flatness creating some dissonance.',
      likes: 654,
      header: "What you'll do",
      isSave: false,
      isLike: false,
    },
    {
      id: 2,
      postUser: 'Darlene Robertson',
      postPersonImage: require('../storage/images/avt_8.jpg'),
      postImage: require('../storage/images/post_2.jpg'),
      location: require('../storage/images/location_3.jpg'),
      hour: '4 hours',
      address: 'Venice',
      title: 'Whale Watching Tour',
      rate: 4.5,
      personRate: 326,
      caption:
        'It all boils down to the fact that we understand the “flatness” of our phone screens. Faux 3d elements and real-world textures mentally clash with that flatness creating some dissonance.',
      likes: 654,
      header: "What you'll do",
      isSave: false,
      isLike: false,
    },
  ];
  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLike);
        const [save, setSave] = useState(data.isSave);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 16,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={data.postPersonImage}
                  style={{ width: 48, height: 48, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 16 }}>
                  <Text style={{ fontSize: 15, fontFamily: 'Poppins_Medium' }}>
                    {data.postUser}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins_Light',
                      color: '#787878',
                      fontSize: 12,
                    }}
                  >
                    {data.address}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setSave(!save)}>
                <Ionicons
                  name={save ? 'bookmark' : 'bookmark-outline'}
                  style={{
                    fontSize: 25,
                    paddingLeft: 120,
                    color: save ? '#FB7A41' : '#FB7A41',
                  }}
                />
              </TouchableOpacity>

              <Feather
                name="more-horizontal"
                style={{ fontSize: 20, color: '#FB7A41' }}
              />
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.push('DetailPost', {
                  postImage: data.postImage,
                  postPersonImage: data.postPersonImage,
                  postUser: data.postUser,
                  location: data.location,
                  hour: data.hour,
                  address: data.address,
                  title: data.title,
                  rate: data.rate,
                  personRate: data.personRate,
                  caption: data.caption,
                  likes: data.likes,
                  header: data.header,
                  isLike: data.isLike,
                  isSave: data.isSave,
                })
              }
            >
              <View
                style={{
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={data.postImage}
                  style={{ width: '92%', height: 200, borderRadius: 6 }}
                />
              </View>
            </TouchableOpacity>

            <View style={{ paddingLeft: 16, paddingTop: 16 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.push('DetailPost', {
                    postImage: data.postImage,
                    postPersonImage: data.postPersonImage,
                    postUser: data.postUser,
                    location: data.location,
                    hour: data.hour,
                    address: data.address,
                    title: data.title,
                    rate: data.rate,
                    personRate: data.personRate,
                    caption: data.caption,
                    likes: data.likes,
                    header: data.header,
                    isLike: data.isLike,
                    isSave: data.isSave,
                  })
                }
              >
                <Text
                  style={{
                    fontFamily: 'Poppins_Medium',
                    fontSize: 16,
                    paddingVertical: 2,
                  }}
                >
                  {data.title}
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  fontFamily: 'Poppins_Light',
                }}
              >
                <FontAwesome
                  name="star"
                  style={{
                    color: '#F59D1A',
                    top: 2,
                    paddingRight: 5,
                    fontSize: 14,
                  }}
                />
                <Text style={{ color: '#F59D1A', fontSize: 14 }}>
                  {data.rate} ({data.personRate})
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  fontSize: 16,
                }}
              >
                <Text
                  style={{
                    marginTop: 16,
                    marginRight: 227,
                    color: '#787878',
                    fontFamily: 'Poppins_Light',
                  }}
                >
                  {like ? data.likes + 1 : data.likes} likes
                </Text>
                <Text style={{ color: '#787878', fontFamily: 'Poppins_Light' }}>
                  1022 comment
                </Text>
                <View />
              </View>
              <Text style={{ paddingHorizontal: 2, color: '#787878' }}>
                ───────────────────────────
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}
            >
              <TouchableOpacity onPress={() => setLike(!like)}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 5,
                  }}
                >
                  <AntDesign
                    name={like ? 'like1' : 'like2'}
                    style={{
                      paddingRight: 10,
                      fontSize: 25,
                      color: like ? '#FB7A41' : '#FB7A41',
                    }}
                  />

                  <Text style={{ color: '#FB7A41' }}>Like</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.push('DetailPost', {
                    postImage: data.postImage,
                    postPersonImage: data.postPersonImage,
                    postUser: data.postUser,
                    location: data.location,
                    hour: data.hour,
                    address: data.address,
                    title: data.title,
                    rate: data.rate,
                    personRate: data.personRate,
                    caption: data.caption,
                    likes: data.likes,
                    header: data.header,
                    isLike: data.isLike,
                    isSave: data.isSave,
                  })
                }
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Ionicons
                    name="ios-chatbubble-outline"
                    style={{ fontSize: 25, paddingRight: 10, color: '#FB7A41' }}
                  />
                  <Text style={{ color: '#FB7A41' }}>Comment</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
