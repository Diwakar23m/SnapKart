// // src/screens/ProductDetails.js

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
//   Platform,
//   Dimensions,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { responsiveFontSize as rf } from 'react-native-responsive-dimensions';

// const { width: SCREEN_WIDTH } = Dimensions.get('window');

// const ProductDetails = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const images = [
//     'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone.png',
//     'https://i.gadgets360cdn.com/large/iphone_15_series_models_1694757260405.jpg',
//     'https://wp.inews.co.uk/wp-content/uploads/2023/09/SEI_171297958.jpg?crop=0px%2C127px%2C2500px%2C1411px&resize=640%2C360',
//     // add more image URLs here
//   ];

//   const onScroll = e => {
//     const index = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
//     setActiveIndex(index);
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#eee" barStyle="dark-content" />

//       <View style={styles.imageContainer}>
//         {/* Fixed Top Icons */}
//         <View style={styles.iconWrapper}>
//           <TouchableOpacity style={styles.iconLeft}>
//             <Icon name="chevron-back-outline" size={rf(2.5)} color="#000" />
//           </TouchableOpacity>
//           <View style={styles.iconRightGroup}>
//             <TouchableOpacity style={styles.iconRight}>
//               <Icon name="heart-outline" size={rf(2.5)} color="#000" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconRight}>
//               <Icon name="share-social-outline" size={rf(2.5)} color="#000" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Image Slider */}
//         <ScrollView
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           onScroll={onScroll}
//           scrollEventThrottle={16}
//         >
//           {images.map((uri, idx) => (
//             <Image
//               key={idx}
//               source={{ uri }}
//               style={styles.productImage}
//               resizeMode="contain"
//             />
//           ))}
//         </ScrollView>

//         {/* Pagination Dots */}
//         <View style={styles.pagination}>
//           {images.map((_, idx) => (
//             <View
//               key={idx}
//               style={[
//                 styles.dot,
//                 idx === activeIndex ? styles.dotActive : null
//               ]}
//             />
//           ))}
//         </View>
//       </View>

//       {/* Product Details */}
//       <View style={styles.detailsContainer} contentContainerStyle={{ paddingBottom: hp(0) }}>
//         <Text style={styles.productTitle}>Nintendo Switch, Gray</Text>

//         <View style={styles.statsRow}>
//           <View style={styles.statItem}>
//             <Icon name="star" size={rf(1.8)} color="#FFD700" />
//             <Text style={styles.statText}>
//               4.8 <Text style={styles.reviewsText}>117 reviews</Text>
//             </Text>
//           </View>
//           <View style={styles.statItem}>
//             <Icon name="thumbs-up" size={rf(1.8)} color="#6fda44" />
//             <Text style={styles.statText}>94%</Text>
//           </View>
//           <View style={styles.statItem}>
//             <Icon name="chatbubble-ellipses-outline" size={rf(1.8)} color="#555" />
//             <Text style={styles.statText}>8</Text>
//           </View>
//         </View>

//         <View style={styles.priceRow}>
//           <Text style={styles.price}>£169.00</Text>
//           <Text style={styles.monthlyText}>from £14 per month</Text>
//         </View>

//         <Text style={styles.description}>
//           The Nintendo Switch gaming console is a compact device that can be taken everywhere. This portable super device is also equipped with 2 gamepads.{' '}
//           <Text style={styles.readMore}>Read more</Text>
//         </Text>

//         <TouchableOpacity style={styles.addToCartBtn}>
//           <Text style={styles.cartText}>Add to cart</Text>
//         </TouchableOpacity>
//         <Text style={styles.deliveryText}>Delivery on 26 October</Text>
//       </View>
//     </View>
//   );
// };

// export default ProductDetails;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   imageContainer: {
//     height: hp(50),
//     backgroundColor: '#eee',
//     position: 'relative',
//     alignItems: 'center',
//   },
//   productImage: {
//     width: SCREEN_WIDTH,
//     height: hp(35),
//     marginTop:hp(8)
//   },
//   iconWrapper: {
//     position: 'absolute',
//     top: wp(4),
//     left: wp(4),
//     right: wp(4),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     zIndex: 10,
//   },
//   iconLeft: {
//     backgroundColor: '#fff',
//     padding: wp(3),
//     borderRadius: wp(10),
//     elevation: 1,
//   },
//   iconRightGroup: {
//     flexDirection: 'row',
//   },
//   iconRight: {
//     backgroundColor: '#fff',
//     padding: wp(3),
//     borderRadius: wp(10),
//     elevation: 3,
//     marginLeft: wp(2),
//   },
//   pagination: {
//     position: 'absolute',
//     bottom: wp(4),
//     flexDirection: 'row',
//   },
//   dot: {
//     width: wp(1.5),
//     height: wp(1.5),
//     borderRadius: wp(1),
//     backgroundColor: '#000',
//     opacity: 0.3,
//     marginHorizontal: wp(0.5),
//     marginBottom:hp(0)
//   },
//   dotActive: {
//     opacity: 1,
//   },
//   detailsContainer: {
//      flex: 1,
//     // backgroundColor: '#fff',
//     borderTopLeftRadius: wp(5),
//     borderTopRightRadius: wp(5),
//     padding: wp(5),
//     justifyContent:'flex-end'
//   },
//   productTitle: {
//     fontSize: rf(2.3),
//     fontWeight: 'bold',
//     marginBottom: hp(2),
//   },
//   statsRow: {
//     flexDirection: 'row',
//     marginBottom: hp(2),
//   },
//   statItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: wp(2),
//     borderRadius:hp(1),
//     borderWidth:2,
//     borderColor:'#eee',
//     paddingHorizontal:wp(4),
//     paddingVertical:hp(0.7)
//   },
//   statText: {
//     marginLeft: wp(1),
//     fontSize: rf(1.6),
//   },
//   reviewsText: {
//     color: '#777',
//     fontSize: rf(1.2),

//   },
//   priceRow: {
//     backgroundColor: '#f2f2f2',
//     borderRadius: wp(3),
//     padding: wp(3),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: hp(3),
//   },
//   price: {
//     fontSize: rf(2.2),
//     fontWeight: 'bold',
//   },
//   monthlyText: {
//     fontSize: rf(1.5),
//     color: '#777',
//   },
//   description: {
//     fontSize: rf(1.6),
//     color: '#444',
//     marginBottom: hp(2),
//   },
//   readMore: {
//     color: '#007AFF',
//     fontWeight: '600',
//   },
//   addToCartBtn: {
//     backgroundColor: '#c7f207',
//     paddingVertical: hp(1.5),
//     borderRadius: wp(3),
//     alignItems: 'center',
//     marginBottom: hp(1),
//   },
//   cartText: {
//     fontSize: rf(2),
//     fontWeight: 'bold',
//   },
//   deliveryText: {
//     textAlign: 'center',
//     fontSize: rf(1.5),
//     color: '#444',
//     marginBottom: hp(2),
//   },
// });

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const ProductDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  const images = [
    'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone.png',
    'https://i.gadgets360cdn.com/large/iphone_15_series_models_1694757260405.jpg',
    'https://wp.inews.co.uk/wp-content/uploads/2023/09/SEI_171297958.jpg?crop=0px%2C127px%2C2500px%2C1411px&resize=640%2C360',
  ];

  const onScroll = e => {
    const index = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setActiveIndex(index);
  };

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.iconWrapper}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.goBack()}>
              <Icon name="chevron-back-outline" size={rf(2.5)} color="#000" />
            </TouchableOpacity>

            <View style={styles.iconRightGroup}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => setLiked(!liked)}>
                <Icon
                  name={liked ? 'heart' : 'heart-outline'}
                  size={rf(2.5)}
                  color={liked ? 'red' : '#000'}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconButton}>
                <Icon name="share-social-outline" size={rf(2.5)} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}>
            {images.map((uri, idx) => (
              <Image
                key={idx}
                source={{uri}}
                style={styles.productImage}
                resizeMode="contain"
              />
            ))}
          </ScrollView>

          <View style={styles.pagination}>
            {images.map((_, idx) => (
              <View
                key={idx}
                style={[styles.dot, idx === activeIndex && styles.dotActive]}
              />
            ))}
          </View>
        </View>

        <ScrollView style={styles.detailsScrollContainer}>
          <View style={styles.detailsContainer}>
            <View style={styles.productHeader}>
              <Text style={styles.productTitle}>i-phone 14 pro max</Text>
              <Text style={styles.productSubtitle}>Gray Edition</Text>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Icon name="star" size={rf(1.8)} color="#FFD700" />
                <Text style={styles.statText}>
                  4.8 <Text style={styles.reviewsText}>117 reviews</Text>
                </Text>
              </View>
              <View style={styles.statItem}>
                <Icon name="thumbs-up" size={rf(1.8)} color="#6fda44" />
                <Text style={styles.statText}>94%</Text>
              </View>
              <View style={styles.statItem}>
                <Icon
                  name="chatbubble-ellipses-outline"
                  size={rf(1.8)}
                  color="#555"
                />
                <Text style={styles.statText}>8</Text>
              </View>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.price}>
                £169.00{'  '}
                <Text style={styles.discount}>£199.00</Text>
              </Text>

              <Text style={styles.monthlyText}>from £14 per month</Text>
            </View>

            <View style={styles.specsContainer}>
              <Text style={styles.specsTitle}>Specifications</Text>

              <View style={styles.specRow}>
                <Text style={styles.specLabel}>Model</Text>
                <Text style={styles.specValue}>Nintendo Switch</Text>
              </View>
              <View style={styles.specRow}>
                <Text style={styles.specLabel}>Color</Text>
                <Text style={styles.specValue}>Gray</Text>
              </View>
              <View style={styles.specRow}>
                <Text style={styles.specLabel}>Storage</Text>
                <Text style={styles.specValue}>32GB</Text>
              </View>
              <View style={styles.specRow}>
                <Text style={styles.specLabel}>Screen</Text>
                <Text style={styles.specValue}>6.2-inch LCD</Text>
              </View>
              <View style={styles.specRow}>
                <Text style={styles.specLabel}>Battery Life</Text>
                <Text style={styles.specValue}>4.5-9 hours</Text>
              </View>
            </View>

            <View style={styles.featuresContainer}>
              <Text style={styles.featuresTitle}>Key Features</Text>

              <View style={styles.featureItem}>
                <Icon
                  name="game-controller-outline"
                  size={rf(2)}
                  color="#555"
                />
                <Text style={styles.featureText}>
                  Detachable Joy-Con controllers
                </Text>
              </View>
              <View style={styles.featureItem}>
                <Icon
                  name="tablet-portrait-outline"
                  size={rf(2)}
                  color="#555"
                />
                <Text style={styles.featureText}>Handheld and TV modes</Text>
              </View>
              <View style={styles.featureItem}>
                <Icon name="people-outline" size={rf(2)} color="#555" />
                <Text style={styles.featureText}>Multiplayer capability</Text>
              </View>
            </View>
            <Text style={styles.description}>
              The Nintendo Switch gaming console is a compact device that can be
              taken everywhere. This portable super device is also equipped with
              2 gamepads.
              {!expanded && '... '}
              {expanded && (
                <Text>
                  {' '}
                  It features a vibrant 6.2-inch screen, detachable Joy-Con
                  controllers, and the ability to play in three different modes:
                  TV mode, tabletop mode, and handheld mode. With its innovative
                  design, the Nintendo Switch offers versatile gaming
                  experiences for players of all ages.
                </Text>
              )}
              <Text onPress={toggleReadMore} style={styles.readMore}>
                {expanded ? ' Read less' : ' Read more'}
              </Text>
            </Text>
          </View>
        </ScrollView>

        <View style={styles.bottomContainer}>
          <Text style={styles.deliveryText}>Delivery on 26 October</Text>
          <TouchableOpacity style={styles.addToCartBtn}>
            <Text style={styles.cartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  imageContainer: {
    height: rh(45),
    backgroundColor: '#eee',
    position: 'relative',
    alignItems: 'center',
  },
  productImage: {
    width: SCREEN_WIDTH,
    height: rh(30),
    marginTop: rh(8),
  },
  iconWrapper: {
    position: 'absolute',
    top: rh(2),
    left: rw(4),
    right: rw(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  iconButton: {
    backgroundColor: '#fff',
    padding: rw(2.5),
    borderRadius: rw(5),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    marginLeft: rw(0),
  },
  iconRightGroup: {
    flexDirection: 'row',
    gap: rw(5),
  },
  pagination: {
    position: 'absolute',
    bottom: rh(2),
    flexDirection: 'row',
  },
  dot: {
    width: rw(1.5),
    height: rw(1.5),
    borderRadius: rw(1.2),
    backgroundColor: '#000',
    opacity: 0.3,
    marginHorizontal: rw(0.5),
  },
  dotActive: {
    opacity: 1,
    width: rw(2.5),
  },
  detailsScrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: rw(5),
    borderTopRightRadius: rw(5),
  },
  detailsContainer: {
    padding: rw(5),
    paddingBottom: rh(10), // Extra padding at bottom for scrolling past the fixed button
  },
  productHeader: {
    marginBottom: rh(1),
  },
  productTitle: {
    fontSize: rf(2.8),
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: rf(2),
    color: '#555',
    marginTop: rh(0.5),
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: rh(1),
    flexWrap: 'wrap',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: rw(3),
    marginBottom: rh(0),
    borderRadius: rw(2),
    borderWidth: 2,
    borderColor: '#eee',
    paddingHorizontal: rw(3),
    paddingVertical: rh(0.7),
  },
  statText: {
    marginLeft: rw(1),
    fontSize: rf(1.6),
  },
  reviewsText: {
    color: '#777',
    fontSize: rf(1.4),
  },
  priceRow: {
    backgroundColor: '#f2f2f2',
    borderRadius: rw(2),
    padding: rw(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(2),
  },
  price: {
    fontSize: rf(2.5),
    fontWeight: 'bold',
    marginRight: rw(2),
  },
  discount: {
    fontSize: rf(1.6),
    color: '#888',
    textDecorationLine: 'line-through',
    //marginLeft:rw(2)
  },
  monthlyText: {
    fontSize: rf(1.6),
    color: '#777',
  },
  description: {
    fontSize: rf(1.8),
    color: '#444',
    lineHeight: rf(2.5),
    marginBottom: rh(3),
  },
  readMore: {
    color: '#007AFF',
    fontWeight: '600',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: rw(5),
    paddingVertical: rh(1),
    borderTopWidth: 1,
    borderTopColor: '#eee',
    justifyContent: 'flex-end',
  },
  addToCartBtn: {
    backgroundColor: '#c7f207',
    paddingVertical: rh(1.8),
    borderRadius: rw(3),
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  cartText: {
    fontSize: rf(2),
    fontWeight: 'bold',
  },
  deliveryText: {
    textAlign: 'center',
    fontSize: rf(1.6),
    color: '#444',
    marginBottom: rh(1.5),
  },
  specsContainer: {
    marginBottom: rh(4),
  },
  specsTitle: {
    fontSize: rf(2.2),
    fontWeight: 'bold',
    marginBottom: rh(2),
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: rh(1.2),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  specLabel: {
    fontSize: rf(1.7),
    color: '#666',
  },
  specValue: {
    fontSize: rf(1.7),
    fontWeight: '500',
  },
  featuresContainer: {
    marginBottom: rh(2),
  },
  featuresTitle: {
    fontSize: rf(2.2),
    fontWeight: 'bold',
    marginBottom: rh(2),
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rh(2),
  },
  featureText: {
    fontSize: rf(1.7),
    marginLeft: rw(3),
    color: '#333',
  },
});

export default ProductDetails;
