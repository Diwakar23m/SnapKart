// src/components/CartItem.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CartItem = ({ item, toggleItemCheck, updateQuantity }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => toggleItemCheck(item.id)} style={styles.checkboxWrapper}>
        {item.isChecked
          ? <View style={styles.checkboxChecked}><Icon name="checkmark" size={wp(4)} color="#fff" /></View>
          : <View style={styles.checkbox} />
        }
      </TouchableOpacity>

      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹ {item.price.toFixed(2)}</Text>
      </View>

      <View style={styles.qtyControls}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
          <Icon name="remove-circle-outline" size={wp(6)} color="#333" />
        </TouchableOpacity>
        <Text style={styles.qtyText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
          <Icon name="add-circle-outline" size={wp(6)} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: wp(2),
    padding: wp(3),
    marginBottom: hp(1),
    elevation: 1,
  },
  checkboxWrapper: { marginRight: wp(3) },
  image: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(2),
    backgroundColor: '#eee',
    marginRight: wp(3),
  },
  info: { flex: 1, justifyContent: 'center' },
  name: {
    fontSize: wp(3.5),
    fontWeight: '500',
    color: '#333',
    marginBottom: hp(0.5),
  },
  price: { fontSize: wp(3), color: '#333' },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(2),
  },
  qtyText: {
    marginHorizontal: wp(2),
    fontSize: wp(4),
  },
  checkbox: {
    width: wp(4),
    height: wp(4),
    borderRadius: wp(1),
    borderWidth: 1,
    borderColor: '#888',
  },
  checkboxChecked: {
    width: wp(4),
    height: wp(4),
    borderRadius: wp(1),
    backgroundColor: '#14b8a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartItem;
