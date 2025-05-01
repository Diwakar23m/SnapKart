import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({
  address = '92 High Street, London',

}) => {
  const navigation = useNavigation(); // ✅ Correct usage

  return (
    <View style={styles.mainContainer}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="settings-outline" size={wp(6)} color="#000" />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>Delivery address</Text>
          <Text style={styles.title}>{address}</Text>
        </View>

        <TouchableOpacity style={styles.iconButton2} onPress={() => navigation.navigate('Responsive')} >
          <Icon name="notifications-outline" size={wp(6)} color="#000" />
          <View style={styles.badge} />
        </TouchableOpacity>
      </View>

      {/* Search Section */}
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={() => navigation.navigate('Search')}>
        <View style={styles.fakeInput}>
          <Icon name="search-outline" size={responsiveFontSize(2.2)} color="#888" />
          <Text style={styles.fakePlaceholder}>Search the entire shop</Text>
        </View>
      </TouchableOpacity>

      {/* Delivery Banner Section */}
      <LinearGradient
        colors={['#D6F3EB', '#D6F3EB', '#CDE9F1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.bannerContainer}>
        <View style={styles.textRow}>
          <Text style={styles.text}>Delivery is</Text>
          <View style={styles.percentageBox}>
            <Text style={styles.percentageText}>50%</Text>
          </View>
          <Text style={styles.text}>cheaper</Text>
        </View>
        <Image
          source={require('../assets/onbording/abc.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </LinearGradient>
    </View>
  );
};

export default CustomHeader;


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
  iconButton2: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#c3e703',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: wp(2),
  },
  subtitle: {
    fontSize: responsiveFontSize(1.2),
    color: '#888',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: responsiveFontSize(2),
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  badge: {
    position: 'absolute',
    top: hp(0),
    right: wp(0),
    width: wp(4.5),
    height: wp(4.5),
    borderRadius: wp(2.25),
    backgroundColor: '#4CAF50',
    borderWidth: 3,
    borderColor: '#fff',
  },
  searchContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(1),
  },
  fakeInput: {
    height: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: '#ccc',
    borderRadius: wp(3),
    backgroundColor: '#f8f8f8',
  },
  fakePlaceholder: {
    marginLeft: wp(2),
    fontSize: responsiveFontSize(1.8),
    color: '#888',
  },
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(6), // Fixed height to ensure consistency
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
    marginHorizontal: wp(5),
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%', // Take full height of parent
    justifyContent: 'space-between',
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: '#000',
    marginHorizontal: wp(1),
  },
  percentageBox: {
    backgroundColor: '#fff',
    paddingVertical: hp(0.2),
    paddingHorizontal: wp(3),
    borderRadius: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    //height: hp(5), // Fixed height for the percentage box
  },
  percentageText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width: wp(13),
    height: hp(7), // Fixed height to match other elements
    alignSelf: 'center',
    marginBottom:hp(1)
  },
});
