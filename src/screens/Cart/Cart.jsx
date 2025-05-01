import React, {useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CartHeader from '../../components/CartHeader';
import {DUMMY_ITEMS} from '../../data/AddCart/CartItem';
import CartItem from '../../components/CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState(DUMMY_ITEMS);

  const toggleSelectAll = () => {
    const allSelected = cartItems.every(item => item.isChecked);
    setCartItems(
      cartItems.map(item => ({
        ...item,
        isChecked: !allSelected,
      })),
    );
  };

  const toggleItemCheck = id => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? {...item, isChecked: !item.isChecked} : item,
      ),
    );
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map(item =>
        item.id === id ? {...item, quantity: newQuantity} : item,
      ),
    );
  };

  const allSelected = cartItems.every(item => item.isChecked);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <CartHeader />

      <View style={styles.screenWrapper}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          {/* Select All & Share */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.selectAllBtn}
              onPress={toggleSelectAll}>
              {allSelected ? (
                <View style={styles.checkboxChecked}>
                  <Icon name="checkmark" size={wp(4)} color="#fff" />
                </View>
              ) : (
                <View style={styles.checkbox} />
              )}
              <Text style={styles.selectAllText}>Select all</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn}>
              <Icon name="share-social-outline" size={wp(5)} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Cart Items List */}
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CartItem
                item={item}
                toggleItemCheck={toggleItemCheck}
                updateQuantity={updateQuantity}
              />
            )}
          />
        </ScrollView>

        {/* Checkout Button */}
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: hp(4),
  },
  screenWrapper: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingBottom: hp(0), // Adjust padding to ensure content doesn't get cut off
    justifyContent: 'space-between',
  
  },
  scroll: {
    paddingTop: hp(2),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
    backgroundColor: '#fff',
    padding: wp(4),
    borderRadius: wp(2),
    elevation: 1,
  },
  selectAllBtn: {flexDirection: 'row', alignItems: 'center', flex: 1},
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
  selectAllText: {
    marginLeft: wp(2),
    fontSize: wp(4),
    color: '#333',
  },
  shareBtn: {padding: wp(2)},
  checkoutBtn: {
    backgroundColor: '#14b8a6',
    paddingVertical: hp(2),
    alignItems: 'center',
    borderRadius: wp(2),
    marginBottom:hp(0)
  },
  checkoutText: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Cart;
