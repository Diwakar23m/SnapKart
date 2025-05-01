import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import All_Products from '../../data/Allitem/allitem';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from '../../wrappers/ScreenWrapper';
import { useRoute } from '@react-navigation/native';

const Search = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [likedItems, setLikedItems] = useState({});
  const [activeSlide, setActiveSlide] = useState({});
  const navigation = useNavigation();
  const route = useRoute();
  
  const { selectedCategory: selectedCategoryParam } = route.params || {}; // ✅ Renamed here
  

  useEffect(() => {
    if (selectedCategoryParam) {
      setSearchQuery(selectedCategoryParam);
      setSelectedCategory(selectedCategoryParam);
    }
  }, [selectedCategoryParam]);

  const Categories = [
    {
      name: 'Laptop',
      icon: {
        uri: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spacegray-select-202110_GEO_GB?wid=1144&hei=1376&fmt=jpeg&qlt=95&.v=1632738728000',
      },
    },
    {
      name: 'Phone',
      icon: {
        uri: 'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone.png',
      },
    },
    {
      name: 'Console',
      icon: {
        uri: 'https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png',
      },
    },
    {
      name: 'Camera',
      icon: {
        uri: 'https://static.bhphoto.com/images/multiple_images/images500x500/1613999881_IMG_1449011.jpg',
      },
    },
    {
      name: 'Headphone',
      icon: {
        uri: 'https://m.media-amazon.com/images/I/71RdFGkLJML._AC_UF1000,1000_QL80_.jpg',
      },
    },
  ];

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const handleCategorySelect = category => {
    setSelectedCategory(category);
    //setSearchQuery(category);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const clearCategory = () => {
    setSelectedCategory(null);
  };

  const toggleLike = id => {
    setLikedItems(prev => ({...prev, [id]: !prev[id]}));
  };

  const handleCardPress = item => {
    navigation.navigate('ProductDetails', {product: item});
  };



  
  const filteredProducts = All_Products.filter(item => {
    const query = selectedCategory
      ? selectedCategory.trim().toLowerCase()
      : searchQuery.trim().toLowerCase();
  
    const categoryNames = Categories.map(cat => cat.name.toLowerCase());
    const isCategoryMatch = categoryNames.includes(query);
  
    if (isCategoryMatch) {
      return item.category?.toLowerCase() === query;
    }
  
    return (
      item.title.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query)
    );
  });

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <FlatList
            data={item.images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(img, index) => index.toString()}
            onScroll={e => {
              const slide = Math.round(
                e.nativeEvent.contentOffset.x /
                  e.nativeEvent.layoutMeasurement.width,
              );
              setActiveSlide(prev => ({...prev, [item.id]: slide}));
            }}
            renderItem={({item: imgUrl}) => (
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: imgUrl}}
                  style={styles.sliderImage}
                  resizeMode="contain"
                />
              </View>
            )}
            contentContainerStyle={{alignItems: 'center'}}
          />
          <View style={styles.dotsWrapper}>
            {item.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeSlide[item.id] === index ? styles.activeDot : null,
                ]}
              />
            ))}
          </View>
          <TouchableOpacity
            style={styles.heartIcon}
            onPress={() => toggleLike(item.id)}>
            <Icon
              name={likedItems[item.id] ? 'heart' : 'heart-outline'}
              size={wp(4)}
              color={likedItems[item.id] ? 'red' : '#333'}
            />
          </TouchableOpacity>
        </View>
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
  };

  const renderCategoryItem = ({item}) => (
    <View style={styles.categoryItemContainer}>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => handleCategorySelect(item.name)}>
        <Image source={item.icon} style={styles.categoryIcon} />
        <Text style={styles.categoryText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.locationBar}>
          <Icon name="search-outline" size={wp(5)} color="#888" />
          <TextInput
            style={styles.locationInput}
            placeholder="Search a product"
            value={searchQuery}
            onChangeText={handleSearch}
            returnKeyType="search"
          />
          {searchQuery ? (
            <TouchableOpacity onPress={clearSearch} style={styles.clearIcon}>
              <Icon name="close-outline" size={wp(5)} color="#888" />
            </TouchableOpacity>
          ) : null}
        </View>

       
        {(searchQuery.trim() !== '' || selectedCategory) && (
          <View style={styles.searchHeaderRow}>
            <Text style={styles.searchResultsText}>
              Showing results for{' '}
              <Text style={styles.searchQueryText}>
                "{searchQuery.trim() !== '' ? searchQuery : selectedCategory}"
              </Text>
            </Text>

            {selectedCategory && (
              <TouchableOpacity onPress={clearCategory}>
                <Text style={styles.clearFilterText}>
                  Clear Filter: {selectedCategory}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {searchQuery.trim() === '' && !selectedCategory ? (
          <FlatList
            data={Categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          />
        ) : filteredProducts.length > 0 ? (
          <FlatList
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContainer}
          />
        ) : (
          <View style={styles.noResultContainer}>
            <Text style={styles.noResultText}>No products found!</Text>
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(2),
    paddingTop: hp(1),
  },
  searchResultsText: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
    color: '#888',
    marginLeft: wp(2),
    marginBottom: hp(1),
  },
  searchQueryText: {
    fontSize: responsiveFontSize(1.8),
    color: '#000',
  },
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.7),
    backgroundColor: '#f2f2f2',
    borderRadius: wp(3),
    marginBottom: hp(2),
    marginHorizontal: wp(2),
  },
  locationInput: {
    flex: 1,
    fontSize: responsiveFontSize(1.5),
    color: '#333',
    fontWeight: '500',
    marginLeft: wp(2),
  },
  clearIcon: {
    marginLeft: wp(1),
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  categoryItemContainer: {
    alignItems: 'center',
    marginBottom: hp(0),
  },
  categoryButton: {
    width: wp(28),
    height: wp(28),
    backgroundColor: '#f0f0f0',
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(1),
    padding: wp(2),
    marginRight: wp(1.3),
  },
  categoryIcon: {
    width: wp(15),
    height: wp(15),
    marginBottom: hp(0.5),
  },
  categoryText: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: hp(5),
    paddingHorizontal: wp(2),
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: wp(3),
    paddingVertical: hp(1.5),
    overflow: 'hidden',
  },
  imageContainer: {
    width: wp(37),
    height: wp(35),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderImage: {
    width: wp(30),
    height: wp(30),
    resizeMode: 'cover',
    alignSelf: 'center',
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
    marginBottom: hp(1),
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
  noResultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultText: {
    fontSize: responsiveFontSize(2),
    color: '#666',
  },
  dotsWrapper: {
    position: 'absolute',
    bottom: hp(1),
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
  searchHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    marginBottom: hp(1),
  },

  clearFilterText: {
    color: 'blue',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '500',
  },
});
