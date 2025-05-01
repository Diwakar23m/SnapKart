

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CATEGORIES = [
  {
    key: 'phones',
    label: 'Phone',
    imageUri:
      'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone.png',
  },
  {
    key: 'consoles',
    label: 'Console',
    imageUri:
      'https://w7.pngwing.com/pngs/279/913/png-transparent-playstation-4-xbox-360-xbox-1-ultra-hd-blu-ray-xbox-one-xbox-electronics-gadget-video-game-thumbnail.png',
  },
  {
    key: 'laptops',
    label: 'Laptop',
    imageUri: 'https://www.pngarts.com/files/4/HP-Laptop-PNG-Image.png',
  },
  {
    key: 'cameras',
    label: 'Camera',
    imageUri:
      'https://img.freepik.com/free-psd/sleek-black-dslr-camera-with-large-lens-is-shown-against-transparent-background-ideal-photography-videography-projects_632498-28557.jpg?semt=ais_hybrid&w=740',
  },
  {
    key: 'audio',
    label: 'Headphone',
    imageUri:
      'https://icon2.cleanpng.com/20231024/lru/transparent-headphones-white-headphone-black-background-closed-white-closed-headphones-on-black-background-1711047585343.webp',
  },
];

const Categories = () => {
  const navigation = useNavigation(); // Use the navigation hook

  const handleSeeAll = () => {
    navigation.navigate('categories'); // Navigate to the Search screen
  };


  const handleSelectCategory = (categoryLabel) => {
    navigation.navigate('Search', { selectedCategory: categoryLabel });
  };
  

  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Categories</Text>

        <TouchableOpacity style={styles.seeAllContainer} onPress={handleSeeAll}>
          <Text style={styles.seeAllText}>See all</Text>
          <View style={styles.seeAllIconWrapper}>
            <Icon name="chevron-forward-outline" size={wp(3.5)} color="#000" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll List */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.key}
            style={styles.item}
            onPress={() => handleSelectCategory(cat.label)}
          >
            <View style={styles.categoryIconWrapper}>
              <Image
                source={{ uri: cat.imageUri }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.label}>{cat.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    borderTopLeftRadius: hp(2),
    borderTopRightRadius: hp(2),
    marginTop: hp(1),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  headerTitle: {
    fontSize: responsiveFontSize(2.5),
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
  seeAllIconWrapper: {
    backgroundColor: '#f0f0f0',
    padding: wp(0.5),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingLeft: 0,
  },
  item: {
    alignItems: 'center',
    marginRight: wp(5),
  },
  categoryIconWrapper: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(9),
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(0.5),
    overflow: 'hidden',
  },
  image: {
    width: wp(12),
    height: wp(12),
  },
  label: {
    fontSize: responsiveFontSize(1.6),
    color: '#333',
    textAlign: 'center',
  },
});
