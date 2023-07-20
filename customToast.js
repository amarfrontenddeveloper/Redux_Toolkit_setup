import React from 'react';
import {Image, StyleSheet, View, Text, Platform} from 'react-native';
import Toast from 'react-native-toast-message';
import {Colors} from './constants';

const image = {
  check: require('../assets/img/check.png'),
  close: require('../assets/img/close.png'),
};

const toastConfig = {
  successResponse: ({text1}) => (
    <View style={styles.successContainer}>
      <View style={{flex: 0.05, alignItems: 'flex-start'}}>
        <Image style={styles.iconStyle} source={image.check} />
      </View>
      <View style={{flex: 1, paddingLeft: 10}}>
        <Text style={styles.titleStyle}>{text1}</Text>
      </View>
    </View>
  ),
  errorResponse: ({text1}) => (
    <View style={styles.errorContainer}>
      <View style={{flex: 0.1, alignItems: 'center'}}>
        <Image style={styles.iconStyle} source={image.close} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.titleStyle}>{text1}</Text>
      </View>
    </View>
  ),
};

export const successToast = message => {
  Toast.show({
    type: 'successResponse',
    text1: message,
    position: Platform.OS === 'android' ? 'top' : 'bottom',
    visibilityTime: 5000,
  });
};

export const errorToast = message => {
  Toast.show({
    type: 'errorResponse',
    text1: message,
    position: Platform.OS === 'android' ? 'top' : 'bottom',
    visibilityTime: 2500,
  });
};

export default toastConfig;

const styles = StyleSheet.create({
  titleStyle: {
    color: 'white',
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '400',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  errorIconStyle: {
    width: 17,
    height: 17,
  },
  errorContainer: {
    width: '95%',
    backgroundColor: Colors.watermelon,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    minHeight: 40,
  },
  successContainer: {
    height: 55,
    width: '90%',
    backgroundColor: Colors.caribbeanGreen,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
