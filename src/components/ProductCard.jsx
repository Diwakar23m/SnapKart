


import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
 import PRODUCTS from '../data/FlashSale/product';

const ProductCard = () => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
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
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.oldPrice}>{item.oldPrice}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={PRODUCTS}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default ProductCard;


const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: wp(0),
  },
  card: {
    width: wp(38),
    backgroundColor: '#fff',
    borderRadius: wp(3),
    marginRight: wp(4),
    padding: wp(2),
    elevation: 2,
    marginBottom:hp(1)
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
});
