import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const DetailCategories = ({ route, navigation }) => {
  const { img } = route.params;
  const { title } = route.params;
  const { intro } = route.params;
  return (
    <SafeAreaView>
      <View style={{ position: 'absolute' }}>
        <Image
          source={img}
          style={{
            width: 428,
            height: 750,
            position: 'absolute',
          }}
        />

        <View
          style={{
            position: 'relative',
            width: 428,
            height: 750,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}
        >
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

          <Text
            style={{
              paddingLeft: 16,
              paddingTop: 250,
              fontSize: 36,
              fontFamily: 'Poppins_Light',
              color: '#FFFFFF',
              paddingBottom: 16,
            }}
          >
            {title}
          </Text>
          <View
            style={{
              height: 200,
              paddingHorizontal: 16,
              width: 410,
              opacity: 1,
            }}
          >
            <Text
              style={{
                fontFamily: 'Poppins_Medium',
                color: '#FFFFFF',
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              {intro}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailCategories;
