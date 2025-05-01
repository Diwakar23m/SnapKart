
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const Checkin = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.header}>Dark Theme</Text>
            <Text style={styles.loginText}>Login</Text>

            <TextInput placeholder="Email Id" style={styles.input} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />

            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createAccountBtn}>
              <Text style={styles.createAccountText}>create new account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryBtn}>
              <Text style={styles.secondaryBtnText}>Apply Dark Theme</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryBtn}>
              <Text style={styles.secondaryBtnText}>Change Language</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: rw(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: rf(3.5),
    fontWeight: 'bold',
    marginBottom: rh(3),
  },
  loginText: {
    fontSize: rf(3),
    fontWeight: 'bold',
    marginBottom: rh(5),
  },
  input: {
    width: rw(90),
    height: rh(6.8),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: rw(3),
    marginVertical: rh(1),
    fontSize: rf(2),
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginRight: rw(5),
    marginBottom: rh(2),
  },
  forgotText: {
    fontSize: rf(1.8),
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#000',
    width: rw(90),
    height: rh(6.5),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: rh(2),
  },
  loginButtonText: {
    color: '#fff',
    fontSize: rf(2.2),
    fontWeight: '600',
  },
  createAccountBtn: {
    marginBottom: rh(3),
  },
  createAccountText: {
    fontSize: rf(2),
    color: '#000',
  },
  secondaryBtn: {
    width: rw(90),
    height: rh(6.5),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rh(2),

  },
  secondaryBtnText: {
    fontSize: rf(2.2),
    color: '#000',
  },
});

export default Checkin;
