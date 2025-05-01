// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {View, Text, StyleSheet} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Home from '../screens/Home/home';
// import Cart from '../screens/Cart/Cart';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {responsiveFontSize} from 'react-native-responsive-dimensions';

// const ProfileScreen = () => (
//   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text>Profile Screen</Text>
//   </View>
// );

// const SettingsScreen = () => (
//   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text>Settings Screen</Text>
//   </View>
// );

// const Tab = createBottomTabNavigator();

// // Dummy data for badge counts (replace with Redux/Context/API)
// const cartItemCount = 3;
// const favouriteItemCount = 2;

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({color, focused}) => {
//           let iconName;

//           switch (route.name) {
//             case 'Home':
//               iconName = focused ? 'home' : 'home-outline';
//               break;
//             case 'Catalog':
//               iconName = focused ? 'search' : 'search-outline';
//               break;
//             case 'Cart':
//               iconName = focused ? 'cart' : 'cart-outline';
//               break;
//             case 'Favourites':
//               iconName = focused ? 'heart' : 'heart-outline';
//               break;
//             case 'Profile':
//               iconName = focused ? 'person' : 'person-outline';
//               break;
//             default:
//               iconName = 'ellipse-outline';
//           }

//           const badgeCount =
//             route.name === 'Cart'
//               ? cartItemCount
//               : route.name === 'Favourites'
//               ? favouriteItemCount
//               : 0;

//           return (
//             <View
//               style={{width: wp('8%'), height: hp('3.5%'), margin: wp('1%')}}>
//               <Ionicons name={iconName} size={wp('7%')} color={color} />
//               {badgeCount > 0 && (
//                 <View style={styles.badge}>
//                   <Text style={styles.badgeText}>{badgeCount}</Text>
//                 </View>
//               )}
//             </View>
//           );
//         },
//         tabBarLabel: ({focused}) => (
//           <Text
//             style={{
//               color: focused ? '#000' : 'gray',
//               fontSize: responsiveFontSize(1.5),
//               fontWeight: focused ? 'bold' : 'normal',
//               marginBottom: hp('0.5%'), // Adjust label upwards to avoid overlap
//             }}>
//             {route.name}
//           </Text>
//         ),
//         tabBarActiveTintColor: '#c3e703',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {
//           height: hp('11%'), // Increased height to prevent system nav overlap
          
//            paddingTop: hp('0.5%'),
//         },
//         headerShown: false,
//       })}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Catalog" component={ProfileScreen} />
//       <Tab.Screen name="Cart" component={Cart} />
//       <Tab.Screen name="Favourites" component={ProfileScreen} />
//       <Tab.Screen name="Profile" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   badge: {
//     position: 'absolute',
//     right: -wp('2%'),
//     top: -hp('0.5%'),
//     backgroundColor: '#000',
//     borderRadius: wp('3%'),
//     minWidth: wp('4.5%'),
//     height: hp('2.5%'),
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: wp('1%'),
//   },
//   badgeText: {
//     color: 'white',
//     fontSize: responsiveFontSize(1.3),
//     fontWeight: 'bold',
//   },
// });

// export default TabNavigator;



import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/home';
import Cart from '../screens/Cart/Cart';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const cartItemCount = 3;
const favouriteItemCount = 2;

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Catalog':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Cart':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'Favourites':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          const badgeCount =
            route.name === 'Cart'
              ? cartItemCount
              : route.name === 'Favourites'
              ? favouriteItemCount
              : 0;

          return (
            <View style={{ width: wp('8%'), height: hp('3.5%'), margin: wp('1%') }}>
              <Ionicons name={iconName} size={wp('7%')} color={color} />
              {badgeCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{badgeCount}</Text>
                </View>
              )}
            </View>
          );
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              color: focused ? '#000' : 'gray',
              fontSize: responsiveFontSize(1.5),
              fontWeight: focused ? 'bold' : 'normal',
              marginBottom: hp('0.5%'),
            }}>
            {route.name}
          </Text>
        ),
        tabBarActiveTintColor: '#c3e703',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: hp('8%') + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : hp('1%'),
          paddingTop: hp('1%'),
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Catalog" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favourites" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -wp('2%'),
    top: -hp('0.5%'),
    backgroundColor: '#000',
    borderRadius: wp('3%'),
    minWidth: wp('4.5%'),
    height: hp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('1%'),
  },
  badgeText: {
    color: 'white',
    fontSize: responsiveFontSize(1.3),
    fontWeight: 'bold',
  },
});

export default TabNavigator;
