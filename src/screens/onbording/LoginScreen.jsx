// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import {
//   responsiveFontSize,
// } from 'react-native-responsive-dimensions';
// import LinearGradient from 'react-native-linear-gradient';
// import ScreenWrapper from '../../wrappers/ScreenWrapper';

// const LoginScreen = () => {
//   const [phone, setPhone] = useState('');

//   return (
//     <ScreenWrapper>
//       <StatusBar backgroundColor='transparent' />
//       <ImageBackground
//         source={require('../../assets/onbording/ecommerce-splash.jpg')}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//       >
//         <View style={styles.container}>
//           <LinearGradient
//             colors={[
//               'transparent',
//               'rgba(255,255,255,0.9)',
//               'rgba(255,255,255,1)',
//             ]}
//             style={styles.gradientOverlay}
//           >
//             {/* Logo centered */}
//             <View style={styles.logoWrapper}>
//               <Image
//                 source={require('../../assets/onbording/logo.png')}
//                 style={styles.logo}
//                 resizeMode="contain"
//               />
//             </View>

//             <Text style={styles.heading}>India’s fastest app</Text>
//             <Text style={styles.subheading}>Log in or sign up</Text>

//             {/* Phone input */}
//             <View style={styles.inputWrapper}>
//               <Text style={styles.countryCode}>+91</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Phone Number"
//                 keyboardType="number-pad"
//                 placeholderTextColor="#999"
//                 value={phone}
//                 maxLength={10}
//                 onChangeText={text => setPhone(text.replace(/[^0-9]/g, ''))}
//               />
//             </View>

//             {/* Continue button */}
//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>Continue</Text>
//             </TouchableOpacity>
//           </LinearGradient>
//         </View>
//       </ImageBackground>
//     </ScreenWrapper>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     // width: '100%',
//     // height: '100%',
//   },
//   gradientOverlay: {
//     flex: 1,
//     paddingHorizontal: wp(5),
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     justifyContent: 'flex-end',
//   },
//   container: {
//     width: '100%',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logoWrapper: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     marginBottom: hp(3),
//   },
//   logo: {
//     width: wp(20),
//     height: wp(20),
//     borderRadius:wp(10)
//   },
//   heading: {
//     fontSize: responsiveFontSize(3),
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: hp(1),
//     textAlign: 'center',
//   },
//   subheading: {
//     fontSize: responsiveFontSize(1.8),
//     color: '#666',
//     marginBottom: hp(2),
//     textAlign: 'center',
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f3f3f3',
//     borderRadius: wp(2),
//     width: '100%',
//     paddingHorizontal: wp(4),
//     paddingVertical: hp(0.7),
//     marginBottom: hp(1.5),
//     borderWidth: 2,
//     borderColor: '#e0e0e0',
//   },
//   countryCode: {
//     fontSize: responsiveFontSize(2),
//     marginRight: wp(2),
//     color: '#000',
//   },
//   input: {
//     flex: 1,
//     fontSize: responsiveFontSize(2),
//     color: '#000',
//   },
//   button: {
//     width: '100%',
//     backgroundColor: '#c3e703',
//     borderRadius: wp(2),
//     paddingVertical: hp(1.8),
//     alignItems: 'center',
//     marginBottom: hp(2),
//   },
//   buttonText: {
//     fontSize: responsiveFontSize(2),
//     fontWeight: '600',
//     color: '#000',//e0e0e0
//   },
// });

// export default LoginScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  return (
    <>
      {/* True translucent status bar */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ImageBackground
        source={require('../../assets/onbording/ecommerce-splash.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover">
        {/* Only left/right/bottom safe padding */}
        <SafeAreaView style={styles.safeArea}>
          <LinearGradient
            colors={[
              'transparent',
              'rgba(255,255,255,0.9)',
              'rgba(255,255,255,1)',
            ]}
            style={styles.gradientOverlay}>
            <View style={styles.contentContainer}>
              {/* Logo */}
              <View style={styles.logoWrapper}>
                <Image
                  source={require('../../assets/onbording/logo.png')}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              {/* Headings */}
              <Text style={styles.heading}>India’s fastest app</Text>
              <Text style={styles.subheading}>Log in or sign up</Text>

              {/* Phone input */}
              <View style={styles.inputWrapper}>
                <Text style={styles.countryCode}>+91</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  keyboardType="number-pad"
                  placeholderTextColor="#999"
                  value={phone}
                  maxLength={10}
                  onChangeText={text => setPhone(text.replace(/[^0-9]/g, ''))}
                />
              </View>

              {/* Continue button */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Tabs')} // replace with your target screen name
              >
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  gradientOverlay: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: hp(3),
    padding: wp(3),
  },
  logoWrapper: {
    marginBottom: hp(3),
  },
  logo: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
  },
  heading: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: hp(1),
    textAlign: 'center',
  },
  subheading: {
    fontSize: responsiveFontSize(1.8),
    color: '#666',
    marginBottom: hp(2),
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: wp(2),
    width: '100%',
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.7),
    marginBottom: hp(1),
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  countryCode: {
    fontSize: responsiveFontSize(2),
    marginRight: wp(2),
    color: '#000',
  },
  input: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    color: '#000',
  },
  button: {
    width: '100%',
    backgroundColor: '#c3e703',
    borderRadius: wp(2),
    paddingVertical: hp(1.8),
    alignItems: 'center',
    marginBottom: hp(0),
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: '#000',
  },
});

export default LoginScreen;
