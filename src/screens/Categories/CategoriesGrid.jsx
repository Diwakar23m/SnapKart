
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native'; // ✅ import navigation hook
import ScreenWrapper from '../../wrappers/ScreenWrapper';

const ELECTRONICS = [
  {
    key: 'phone',
    label: 'Phone',
    imageUri:
      'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone.png',
  },
  {
    key: 'laptop',
    label: 'Laptop',
    imageUri: 'https://www.pngarts.com/files/4/HP-Laptop-PNG-Image.png',
  },
  {
    key: 'console',
    label: 'Console',
    imageUri:
      'https://w7.pngwing.com/pngs/279/913/png-transparent-playstation-4-xbox-360-xbox-1-ultra-hd-blu-ray-xbox-one-xbox-electronics-gadget-video-game-thumbnail.png',
  },
  {
    key: 'camera',
    label: 'Camera',
    imageUri:
      'https://img.freepik.com/free-psd/sleek-black-dslr-camera-with-large-lens-is-shown-against-transparent-background-ideal-photography-videography-projects_632498-28557.jpg?semt=ais_hybrid&w=740',
  },
  {
    key: 'headphones',
    label: 'Headphone',
    imageUri:
      'https://icon2.cleanpng.com/20231024/lru/transparent-headphones-white-headphone-black-background-closed-white-closed-headphones-on-black-background-1711047585343.webp',
  },
  
];

const CategoriesGrid = () => {
  const navigation = useNavigation(); // ✅ access navigation

  const handleSelect = (label) => {
    navigation.navigate('Search', { selectedCategory: label }); // ✅ pass label to Search screen
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item.label)}>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: item.imageUri}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.header}>Categories</Text>
        <FlatList
          data={ELECTRONICS}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
};

export default CategoriesGrid;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: hp(5),
    paddingHorizontal: wp(4),
  },
  header: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: hp(1.5),
    textAlign: 'center',
    paddingBottom: hp(3),
  },
  list: {
    paddingBottom: hp(2),
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  item: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: wp(1),
  },
  imageWrapper: {
    width: wp(24),
    height: wp(24),
    borderRadius: wp(12),
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(0.5),
    overflow: 'hidden',
  },
  image: {
    width: wp(14),
    height: wp(14),
  },
  label: {
    fontSize: responsiveFontSize(1.6),
    color: '#333',
    textAlign: 'center',
  },
});
