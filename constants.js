import axios from 'axios';

export const regex = {
  email: /^\w+([\+.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password:
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/,
  fullName: /^(?=.*[A-Za-z_ ])[A-Za-z_ ]{1,}$/,
  phone: /^(?=.*[+])[+]{1}?([91]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/,
  phoneLastTen: /^(?=.*[0-9])[0-9]{10}$/,
  phoneFirstThree: /^(?=.*[+])[+]{1}?([0-9]{2})$/,
  otp: /^(?=.*[0-9])[0-9]{6}$/,
};

export const COMMON = {
  apiBaseUrl() {
    return 'http://103.117.66.70:5013/';
    //return 'http://103.117.66.70:5008/';
    // return 'https://api.expertinvester.com/';
  },
  apiLocalUrl() {
    return '';
  },
  stringFormat(s, ...args) {
    return s.replace(/{([0-9]+)}/g, (match, index) =>
      typeof args[index] === 'undefined' ? match : args[index],
    );
  },
  formatNumber(number) {
    let formattedNumber = Number?.parseInt(number)?.toFixed(2);
    let num = formattedNumber?.toLocaleString('en-IN');
    return num;
  },
  convertor(string) {
    return string?.replace('+', '%2B');
  },
};

export const initialState = {
  login_response: null,
  error: false,
};

export const POST_METHOD = 'post';
export const GET_METHOD = 'get';

export const APPLICATION_JSON_HEADER = { 'Content-Type': 'application/json' };

export const fontFamily = {
  Inter_Black: 'Inter-Black',
  Inter_Bold: 'Inter-Bold',
  Inter_ExtraBold: 'Inter-ExtraBold',
  Inter_ExtraLight: 'Inter-ExtraLight',
  Inter_Light: 'Inter-Light',
  Inter_Medium: 'Inter-Medium',
  Inter_Regular: 'Inter-Regular',
  Inter_SemiBold: 'Inter-SemiBold',
  Inter_Thin: 'Inter-Thin',
  PlayfairDisplaySC_Regular: 'PlayfairDisplaySC-Regular',
  PlayfairDisplaySC_Black: 'PlayfairDisplaySC-Black',
  PlayfairDisplaySC_BlackItalic: 'PlayfairDisplaySC-BlackItalic',
  PlayfairDisplaySC_Bold: 'PlayfairDisplaySC-Bold',
  PlayfairDisplaySC_BoldItalic: 'PlayfairDisplaySC-BoldItalic',
  PlayfairDisplaySC_Italic: 'PlayfairDisplaySC-Italic',
  Montserrat_Medium: 'Montserrat-Medium',
  Montserrat_Regular: 'Montserrat-Regular',
  Montserrat_SemiBold: 'Montserrat-SemiBold',
  Montserrat_Bold: 'Montserrat-Bold',
  bilobaFlower: '#A5A6F6',
};

export const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  primaryColor: '#ED1C24',
  red: '#FF6565',
  gray: '#87898E',
  otpInput: '#DADADA',
  lightRed: '#FEEDEE',
  darkRed: '#925652',
  lightBlack: '#BBBCBF',
  golden: '#FFCD1E',
  darkBrown: '#6E241E',
  lightGreen: '#97F987',
  lightGray: '#F7F8F9',
  lightPink: '#FEEFF0',
  pantone: '#472D2D',
  mediumRed: '#ED1C24',
  darkWhite: '#F2F0F0',
  darkBlue: '#151940',
  whiteBlue: '#F5F6FA',
  metallicCopper: '#6E241E',
  blueWhale: '#03314B',
  Medium_Slate_Blue: '#8666E5',
  violetBlue: '#3500D4',
  magnolia: '#F3F3FF',
  regentGrey: '#8198A5',
  pinkLemonade: '#F61C7A',
  bilobaFlower: '#A5A6F6',
  borderColor: '#F1F5FA',
  camoGreen: '#496333',
  naplesYellow: '#FFD859',
  lavenderBlue: '#908FEC',
  osloGrey: '#87898E',
  paleSky: '#6C727F',
  mountainMist: '#979797',
  pattensBlue: '#DEF4FF',
  orangePeel: '#FF9E03',
  blueDress: '#177CDA',
  classicRose: '#FDCDE7',
  carouselPink: '#FCDDEC',
  feta: '#F3FBED',
  moss: '#849360',
  vividCerise: '#D32276',
  watermelon: '#FF4B55',
  brownSugar: '#E6A376',
  whiteSmoke: '#F5F5F5',
  silkBlue: '#4987C4',
  catskillWhite: '#F1F5FA',
  iceCold: '#A1F7F6',
  blueGrey: '#647F92',
  caribbeanGreen: '#1DCC98',
  dragonGreen: '#62F393',
  formDataBorder: '#F4F4F6',
  titanWhite: '#E8F1FF',
  forgetMeNot: '#FFEFEB',
  addButtonBg: '#436BFA',
  gray: '#808080',
  greyGoose: '#CFCFCF',
};
export const PAGE_SIZE = 5;
