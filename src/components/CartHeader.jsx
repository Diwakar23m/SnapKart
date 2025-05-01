// src/components/CartHeader.js

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const CartHeader = ({ address = '92 High Street, London' }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Top row: Cart title + menu */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Cart</Text>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Options')}
        >
          <Icon
            name="ellipsis-horizontal"
            size={wp(5)}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* Search box with chevrons left & right */}
      <TouchableOpacity
        style={styles.searchContainer}
       
      >
        <View style={styles.fakeInput}>
          <Icon
            name="location-outline"
            size={responsiveFontSize(2.2)}
            color="#888"
          />
          <Text style={styles.fakePlaceholder}>
            Search the entire shop
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={responsiveFontSize(2.2)}
            color="#888"
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    paddingBottom: hp(1),
    borderBottomLeftRadius: hp(2),
    borderBottomRightRadius: hp(2),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.5),
  },
  headerTitle: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
    color: '#000',
  },
  iconButton: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(1),
  },
  fakeInput: {
    height: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: '#ccc',
    borderRadius: wp(3),
    backgroundColor: '#f8f8f8',
    paddingHorizontal: wp(3),
    justifyContent: 'space-between',
    marginBottom:hp(2)
  },
  fakePlaceholder: {
    flex: 1,
    textAlign: 'left',
    fontSize: responsiveFontSize(1.8),
    color: '#000',
    marginLeft:wp(2)
  },
});
