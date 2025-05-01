// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   Platform,
// } from 'react-native';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import CustomHeader from '../../components/customHeader';
// import Categories from '../../components/categories';
// import FlashSale from '../FlashSale/flashSale';
// import ForYou from '../Foryou/forYou';

// const Home = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#fff" />
//       <CustomHeader />
//       <Categories />
//       <FlashSale/>
//       <ForYou/>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eee',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
// });

// export default Home;



import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomHeader from '../../components/customHeader';
import Categories from '../../components/categories';
import FlashSale from '../FlashSale/flashSale';
import ForYou from '../Foryou/forYou';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <CustomHeader />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Categories />
        <FlashSale />
        <ForYou/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    paddingBottom: hp(0),
  },
});

export default Home;
