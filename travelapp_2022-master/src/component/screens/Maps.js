import * as React from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { markers } from '../data/mapData';

const { width, height } = Dimensions.get('window');
const CARD_HEIGHT = 244;
const CARD_WIDTH = width * 0.9;
const SPACING_FOR_CARD_INSET = width * 0.1 - 35;

const mapStandardStyle = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

const Maps = ({ navigation }) => {
  const region = {
    latitudeDelta: 5,
    longitudeDelta: 5,
  };
  const [state, setState] = React.useState(markers, region);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  React.useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= markers.length) {
        index = state.marker.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex != index) {
          mapIndex = index;
          const { coordinate } = markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });
    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  };

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);
  const initialMapState = {
    markers,
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStandardStyle}
      >
        {markers.map((item, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <MapView.Marker
              key={index}
              coordinate={item.coordinate}
              onPress={(e) => onMarkerPress(e)}
            >
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require('../storage/mark/map_pin.png')}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                />
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>
      <View style={{ position: 'absolute' }}>
        <TouchableOpacity onPress={() => navigation.goBack('DetailPost')}>
          <View
            style={{
              backgroundColor: 'rgba(61, 61, 61, 0.5)',
              borderRadius: 100,
              height: 32,
              width: 32,
              position: 'absolute',
              marginTop: 40,
              marginLeft: 16,
            }}
          >
            <Feather
              name="x"
              style={{
                fontSize: 32,
                color: 'rgba(255, 255, 255, 1)',
                fontWeight: 2,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingVertical: 50,
          marginRight: 10,
        }}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignmen="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {markers.map((marker, index) => (
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 6,
              marginHorizontal: 20,
              height: 244,
              width: 350,
              flexDirection: 'row',
              left: 30,
            }}
            key={index}
          >
            <Image
              source={marker.image}
              style={{
                width: 188,
                height: 224,
                marginVertical: 10,
                position: 'absolute',
                borderRadius: 6,
                left: -30,
              }}
              resizeMode="cover"
            />
            <View
              style={{
                flex: 2,
                paddingVertical: 46.5,
                paddingLeft: 178,
                paddingRight: 20,
                width: 168,
                height: 151,
              }}
            >
              <View style={{ width: 168, height: 60, paddingRight: 20 }}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 20,
                    fontFamily: 'Poppins_Medium',
                    lineHeight: 30,
                    letterSpacing: -0.3,
                  }}
                >
                  {marker.title}
                </Text>
              </View>
              <View style={{ width: 168, height: 54, paddingRight: 20 }}>
                <Text
                  numberOfLines={4}
                  style={{
                    fontSize: 12,
                    color: 'rgba(120, 120, 120, 1)',
                    lineHeight: 18,
                    letterSpacing: -0.3,
                    fontFamily: 'Poppins_Medium',
                  }}
                >
                  {marker.description}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  fontFamily: 'Poppins_Light',
                  paddingTop: 8,
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
                  {marker.rating} ({marker.reviews})
                </Text>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#FFFFFF',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  image: {
    width: 120,
    height: 50,
  },
});

export default Maps;
