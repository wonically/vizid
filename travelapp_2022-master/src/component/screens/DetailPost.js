import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Comment from '../screenComponent/Comment';

const DetailPost = ({ route, navigation }) => {
  const { postImage } = route.params;
  const { postPersonImage } = route.params;
  const { postUser } = route.params;
  const { location } = route.params;
  const { hour } = route.params;
  const { address } = route.params;
  const { title } = route.params;
  const { rate } = route.params;
  const { personRate } = route.params;
  const { caption } = route.params;
  const { header } = route.params;
  const { isLike } = route.params;
  const { isSave } = route.params;
  const [like, setLike] = useState(isLike);
  const [save, setSave] = useState(isSave);
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            position: 'absolute',
          }}
        >
          <Image
            source={postImage}
            style={{ width: 428, height: 428, position: 'absolute' }}
          />
          <TouchableOpacity onPress={() => navigation.goBack('Home')}>
            <Ionicons
              name="chevron-back"
              style={{
                paddingTop: 39,
                paddingLeft: 16,
                fontSize: 32,
                color: '#FFFFFF',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 355,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            marginHorizontal: 10,
            backgroundColor: 'white',
            shadowOpacity: 0.25,
          }}
        >
          <View
            style={{
              marginTop: 24,
              marginHorizontal: 24,
              flexDirection: 'row',
            }}
          >
            <Image
              source={postPersonImage}
              style={{ width: 40, height: 40, borderRadius: 100 }}
            />
            <View style={{ paddingLeft: 16 }}>
              <Text style={{ fontSize: 15, fontFamily: 'Poppins_Medium' }}>
                {postUser}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins_Light',
                  color: '#787878',
                  fontSize: 12,
                }}
              >
                {hour}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setSave(!save)}>
              <Ionicons
                name={save ? 'bookmark' : 'bookmark-outline'}
                style={{
                  fontSize: 25,
                  marginRight: 16,
                  marginLeft: 110,
                  color: save ? '#FB7A41' : '#FB7A41',
                }}
              />
            </TouchableOpacity>
            <Feather
              name="more-horizontal"
              style={{ fontSize: 20, color: '#FB7A41' }}
            />
          </View>

          <View
            style={{
              marginTop: 16,
              marginLeft: 24,
            }}
          >
            <Text
              style={{
                fontFamily: 'Poppins_Medium',
                fontSize: 20,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins_Light',
                color: '#787878',
                fontSize: 16,
              }}
            >
              {address}
            </Text>
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
                {rate} ({personRate})
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 16, marginLeft: 24 }}>
            <View>
              <Text style={{ fontSize: 20, fontFamily: 'Poppins_Medium' }}>
                {header}
              </Text>
            </View>
            <View style={{ width: 348, height: 120 }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  fontFamily: 'Poppins_Light',
                  letterSpacing: -0.3,
                }}
              >
                {caption}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.push('Maps')}>
            <View
              style={{
                marginTop: 16,
                width: 396,
                height: 240,
              }}
            >
              <Image source={location} style={{ width: 396, height: 240 }} />
            </View>
          </TouchableOpacity>

          <View style={{ borderBottomWidth: 1, borderColor: '#D9D9D9' }}>
            <View
              style={{
                marginVertical: 16,
                marginHorizontal: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
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
              <TouchableOpacity>
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

          <View
            style={{
              marginTop: 16,
              marginHorizontal: 24,
              marginBottom: 20,
            }}
          >
            <Comment />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailPost;
