import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import ScreenWrapper from '../../wrappers/ScreenWrapper';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleResend = () => {
    if (!canResend) return;
    console.log('Resend OTP clicked');
    // Reset timer
    setTimer(10);
    setCanResend(false);
    // Add your resend API logic here
  };

  // Timer countdown effect
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScreenWrapper style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.logoWrapper}>
            <Image
              source={require('../../assets/onbording/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.heading}>Enter OTP</Text>
          <Text style={styles.subheading}>We’ve sent a code to your phone</Text>

         

          <View style={styles.otpWrapper}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
          </View>
          <TouchableOpacity onPress={handleResend} disabled={!canResend}>
            <Text
              style={[
                styles.resendText,
                { color: canResend ? '#000' : '#999' },
              ]}
            >
              {canResend ? 'Resend OTP' : `Resend in 00:${timer < 10 ? `0${timer}` : timer}`}
            </Text>
          </TouchableOpacity>
        </View>
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingTop: hp(4),
  },
  logoWrapper: {
    alignItems: 'center',
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
  resendText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    marginBottom: hp(3),
    fontWeight: '600',
    marginTop:hp(2)
  },
  otpWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
   
  },
  otpInput: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(1),
    backgroundColor: '#f3f3f3',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    color: '#000',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginHorizontal: wp(1),
  },
});

export default Otp;
