import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const DeliveryBanner = () => {
  return (
    <LinearGradient
      colors={['#D6F3EB','#D6F3EB', '#CDE9F1']} // Customize gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.textRow}>
        <Text style={styles.text}>Delivery is</Text>
        <View style={styles.percentageBox}>
          <Text style={styles.percentageText}>50%</Text>
        </View>
        <Text style={styles.text}>cheaper</Text>
      </View>

      <Image
        source={require('../assets/onbording/login_back.png')} // 🔥 Replace with your own image
        style={styles.image}
        resizeMode="contain"
      />
    </LinearGradient>
  );
};

export default DeliveryBanner;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
    marginHorizontal: wp(5),
    marginTop: hp(1),
    
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: '#000',
    marginHorizontal: wp(1),
  },
  percentageBox: {
    backgroundColor: '#fff',
    paddingVertical: hp(0.3),
    paddingHorizontal: wp(2),
    borderRadius: wp(2),
  },
  percentageText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width: wp(10),
    height: wp(10),
  },
});
