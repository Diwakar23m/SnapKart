



import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
// import PRODUCTS from '../data/ForYou/forYou';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native'; // Add ScrollView import at top
import All_Products from '../data/Allitem/allitem';


const ForYouProductCart = () => {  // Add navigation as a prop
  const [likedItems, setLikedItems] = useState({});
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState({}); 

  const toggleLike = (id) => {
    setLikedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleScroll = (event, itemId) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    setActiveSlide((prev) => ({
      ...prev,
      [itemId]: slide,
    }));
  };

  const handleCardPress = (item) => {
    // Navigate to ProductDetails screen
    navigation.navigate('ProductDetails', { product: item });
  };

 

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Image Slider Part */}
      <View style={styles.imageWrapper}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={(event) => handleScroll(event, item.id)}
          style={styles.slider}
        >
          {item.images.map((imageUrl, index) => (
            <Image
              key={index}
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
  
        {/* Heart Icon */}
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => toggleLike(item.id)}
        >
          <Icon
            name={likedItems[item.id] ? 'heart' : 'heart-outline'}
            size={wp(4)}
            color={likedItems[item.id] ? 'red' : '#333'}
          />
        </TouchableOpacity>
        <View style={styles.dotsWrapper}>
          {item.images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeSlide[item.id] === index ? styles.activeDot : {},
              ]}
            />
          ))}
        </View>
      </View>
  
      {/* Text and Price Part */}
      <TouchableOpacity onPress={() => handleCardPress(item)}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.oldPrice}>{item.oldPrice}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  


  return (
    <FlatList
      data={All_Products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default ForYouProductCart;



const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(0),
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: hp(1),
  },
  card: {
    width: wp(45),
    backgroundColor: '#fff',
    padding: wp(2),
    borderRadius: wp(3),
    elevation: 1,
  },
  imageWrapper: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: wp(3),
    paddingVertical: hp(1.5),
  },
  image: {
    width: wp(30),
    height: wp(30),
  },
  heartIcon: {
    position: 'absolute',
    top: wp(2),
    right: wp(2),
    backgroundColor: '#fff',
    borderRadius: wp(5),
    padding: wp(1),
    elevation: 2,
  },
  title: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
    color: '#000',
    marginTop: hp(1),
  },
  subtitle: {
    fontSize: responsiveFontSize(1.4),
    color: '#555',
    marginBottom: hp(0.5),
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:hp(1)
  },
  price: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: '#000',
  },
  oldPrice: {
    fontSize: responsiveFontSize(1.4),
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: wp(2),
  },
  slider: {
    width: wp(30),
    height: wp(35),
    borderRadius: wp(3),
  },

  dotsWrapper: {
    position: 'absolute',
    bottom: hp(0.5),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: wp(1.5),
    height: wp(1.5),
    borderRadius: wp(1),
    backgroundColor: '#ccc',
    marginHorizontal: wp(0.5),
  },
  activeDot: {
    backgroundColor: '#000',
  },
  
});
