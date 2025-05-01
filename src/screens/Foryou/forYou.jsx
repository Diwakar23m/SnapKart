



import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import ForYouProductCart from '../../components/ForYouProductCart';

const ForYou = ({ onSeeAll = () => {}, onSelect = () => {} }) => (
  <View style={styles.wrapper}>
    {/* Header */}
    <View style={styles.headerRow}>
      <View style={styles.titleRow}>
        <Text style={styles.headerTitle}>For You</Text>
        {/* <View style={styles.timerBox}>
          <Text style={styles.timerText}>02:59:23</Text>
        </View> */}
      </View>
      <TouchableOpacity style={styles.seeAllContainer} onPress={onSeeAll}>
        <Text style={styles.seeAllText}>See all</Text>
        <View style={styles.iconWrapper}>
          <Icon name="chevron-forward-outline" size={wp(3.5)} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
    <ForYouProductCart/>
  </View>
);

export default ForYou;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingVertical: hp(2),
   // paddingHorizontal: wp(5),
    // borderTopLeftRadius: hp(2),
    // borderTopRightRadius: hp(2),
    //marginTop: hp(0.5),
    marginBottom: hp(1),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1.5),
    paddingHorizontal: wp(5),
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: '#000',
    marginRight: wp(2),
  },
  timerBox: {
    backgroundColor: '#c3e703',
    paddingVertical: hp(0.2),
    paddingHorizontal: wp(2),
    borderRadius: wp(1.5),
  },
  timerText: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
    color: '#000',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: responsiveFontSize(1.6),
    color: '#000',
    marginRight: wp(1),
  },
  iconWrapper: {
    backgroundColor: '#eee',
    paddingHorizontal: wp(0.5),
    paddingVertical: wp(0.5),
    borderRadius: wp(5),
  },
});
