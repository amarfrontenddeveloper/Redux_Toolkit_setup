import axios from 'axios';
import {
  AUTHORIZATION_HEADER_NAME,
  getAuthorizationHeaderValue,
  setAuthToken,
} from '@/utils/auth';

import { COMMON } from '@/utils/constants';
import { PlatformOS } from '@/config';

const API_METHOD = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH',
};

const API_END_POINT = {
  SEND_OTP: '/api/Login/SendOTP',
  CONFIRM_OTP: '/api/Login/ConfirmOTP',
  ADD_EXPERT_INVESTOR: '/api/ExpertInvestor/AddExpertInvester',
  CHECK_USER_EXIST: '/api/Login/CheckUserExists?Mobile_No={0}',
  SET_NEW_PIN: '/api/Login/SetPIN',
  ENTER_LOGIN_PIN: '/api/Login/LoginIn',
  // GET_FEED_POST: '/GetFeedPost?Mobile_No={0}&pageNumber={1}&pageSize={2}',
  GET_FEED_POST: '/api/FeedPost/GetFeedPost?Mobile_No={0}&pageNumber={1}&pageSize={2}',
  FEED_POST_LIKE: '/UpdateFeedPostlike?FeedPostID={0}&like={1}&Mobileno={2}',
  GET_FEED_LIKE_COUNT: 'GetLikeCount?Mobileno={0}',
  GET_USER_CLUB_POSTED_LIST: '/api/Club/GetUserClubPostedlist?mobileno={0}',
  // GET_USER_FOLLOW_CLUB_LIST: '/api/Club/GetUserFollowClub?mobileno={0}',
  // GET_MASTER_CLUB_LIST: '/api/Club/GetMasterclublist?mobileno={0}',
  GET_USER_FOLLOW_CLUB_LIST: '/api/Club/GetMasterclublist?mobileno={0}',
  ADD_USER_FOLLOW_CLUB_LIST: '/api/Club/AddUserFollowClub',
  ADD_USER_UN_FOLLOW_CLUB_LIST: '/api/Club/UserUnFollowClubListUpdate',
  CHANNEL_MASTER_LIKE: '/api/Channel/UpdateChannelMasterLike',
  CHANNEL_MASTER_SUBSCRIBE: '/api/Channel/UpdateChannelMasterSubscriber',
  GET_CHANNEL_MASTER:
    '/api/Channel/GetChannelMasterList?Mobile_No={0}&pageNumber={1}&pageSize={2}',
  GET_TRENDING_CHANNEL:
    '/api/Channel/GetTrandingChannelMasterList?Mobile_No={0}&pageNumber={1}&pageSize={2}',
  GET_MY_CHANNELS: '/api/Channel/GetChannelSubscriber?Mobile_No={0}',
  ADD_INVESTOR: '/api/ExpertInvestor/AddInvester',
  GET_INVESTOR_DETAILS: '/api/ExpertInvestor/GetInvesterdetails?mobileno={0}',
  GET_COUNTRY_LIST: '/api/ExpertInvestor/GetCountrylist',
  GET_IDEA_ON: '/api/ExpertInvestor/GetIdeaonlist?countryname={0}',
  ADD_EXPERT: '/api/ExpertInvestor/AddExpert',
  ADD_FEED_POST: '/AddFeedPost',
  CLUB_DETAILS_LIST:
    '/api/Club/GetUserClublistDetail?mobileno={0}&clublistid={1}',
  GET_EXPERT_PROFILE: '/api/Channel/GetExpertProfile?Mobile_No={0}',
  ADD_CHANNEL_MASTER: '/api/Channel/AddchannelMaster',
  GET_ACTIVE_POST:
    '/api/Channel/GetChannelActivePost?Mobile_No={0}&channelid={1}',
  ACTIVE_PAST_POST_LIKE: '/api/Channel/UpdateChannelPostLike',
  ACTIVE_POST_IDEA_TRACKER: '/api/Channel/UpdateChannelPostActivePast',
  ADD_CHANNEL_POST: '/api/Channel/AddchannelPost',
  GET_PAST_POST: '/api/Channel/GetChannelPastPost?Mobile_No={0}&channelid={1}',
  GET_CHANNEL_PROFILE:
    '/api/Channel/GetChannelProfile?Mobile_No={0}&ChannelId={1}',
  GET_FEED_POST_DETAIL:
    '/api/Club/GetClubDetailComments?mobileno={0}&clublistid={1}',
  GET_FEED_CHANNEL_DETAIL:
    '/api/Channel/GetChannelPostDetail?Mobile_No={0}&ChannelPostId={1}',
  GET_CHANNEL_POST_HISTORY:
    '/api/Channel/GetChannelPostIdHistory?Mobile_No={0}&HistoryId={1}',
  FEED_CLUB_BLOCK: '/FeedPostblock?FeedPostID={0}&mobileno={1}&block={2}',
  FEED_CLUB_BLOCK_STATUS: '/GetFeedBlockStatus?Mobileno={0}',
  FEED_POST_FILTER:
    '/api/Filter/GetFeedPostFilter?Mobile_No={0}&Club={1}&Channel={2}&Expert={3}&Investor={4}&ExpertAndInvestor={5}&pageNumber={6}&pageSize={7}',
  CHANNEL_MASTER_FILTER:
    'api/Filter/GetChannelMasterFilterList?Mobile_No={0}&Expert={1}&Investor={2}&ExpertAndInvestor={3}&PaidAccess={4}&FreeAccess={5}&pageNumber={6}&pageSize={7}',
  GET_USER_DETAILS: '/api/ExpertInvestor/GetUserDetails?mobileno={0}',
  UPDATE_USER_DETAILS: '/api/ExpertInvestor/UpdateUserDetails',
  UPDATE_USER_PROFILE_PIC: '/api/Login/UpdateUserProfile',
  CONTACT_US_API: '/api/ExpertInvestor/AddContactDetails',
  CLUB_COMMENTS: '/api/Club/AddClubComments',
};

export const sendOtp = async number => {
  return await _baseRequest(API_END_POINT.SEND_OTP, API_METHOD.post, {
    Mobile_NO: number,
  }).then(loginResponse => {
    console.log('login Response=>', loginResponse);
    return loginResponse;
  });
};
export const confirmOtp = async (number, otp) => {
  return await _baseRequest(API_END_POINT.CONFIRM_OTP, API_METHOD.post, {
    mobileno: number,
    otp: otp,
  }).then(response => {
    //// console.log('confirm otp Response=>', response);
    return response;
  });
};
export const CheckUserExists = async number => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.CHECK_USER_EXIST, number),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};
export const setNewPin = async (number, password) => {
  return await _baseRequest(API_END_POINT.SET_NEW_PIN, API_METHOD.post, {
    mobileno: number,
    password: password,
  }).then(response => {
    return response;
  });
};
export const enterLoginPin = async (mobileno, password) => {
  return await _baseRequest(API_END_POINT.ENTER_LOGIN_PIN, API_METHOD.post, {
    mobileno: mobileno,
    password: password,
  }).then(response => {
    // // console.log('login pin Response=>', response);
    return response;
  });
};
export const addExpertInvestor = async formDataExpertInvestor => {
  return await _baseRequest(
    API_END_POINT.ADD_EXPERT_INVESTOR,
    API_METHOD.post,
    formDataExpertInvestor,
  ).then(response => {
    return response;
  });
};

export const addChannelMasters = async (
  mobile_No,
  name,
  idealfor,
  benefits,
  subscription,
  coAdChannel,
  description,
  imageurl,
  coAdList,
) => {
  return await _baseRequest(API_END_POINT.ADD_INVESTOR, API_METHOD.post, {
    mobile_No: mobile_No,
    name: name,
    idealfor: idealfor,
    benefits: benefits,
    subscription: subscription,
    coAdChannel: coAdChannel,
    description: description,
    imageurl: imageurl,
    coAdList: coAdList,
  }).then(response => {
    //// console.log('add Channel Master Response=>', response);
    return response;
  });
};

export const postAddInvestor = async (
  mobileno,
  name,
  usertype,
  email,
  aboutus,
  experttype,
  experience,
  knowledgelevel,
  ideas,
) => {
  return await _baseRequest(API_END_POINT.ADD_INVESTOR, API_METHOD.post, {
    mobileno: mobileno,
    name: name,
    usertype: usertype,
    aboutus: aboutus,
    email: email,
    experttype: experttype,
    experience: experience,
    knowledgelevel: knowledgelevel,
    ideaOnlist: ideas,
  }).then(response => {
    // console.log('add investor Response=>', response);
    return response;
  });
};

export const postAddExpert = async expertFormData => {
  return await _baseRequest(
    API_END_POINT.ADD_EXPERT,
    API_METHOD.post,
    expertFormData,
    {
      'Content-type': 'multipart/form-data',
    },
  ).then(response => {
    // console.log('add expert Response=>', response);
    return response;
  });
};
export const getInvestorDetails = async number => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_INVESTOR_DETAILS, number),
  ).then(response => {
    // console.log('Investor details Response=>', response);
    return response;
  });
};
export const getFeedPost = async (Mobile_No, pageNumber, pageSize) => {
  return await _baseRequest(
    COMMON.stringFormat(
      API_END_POINT.GET_FEED_POST,
      Mobile_No,
      pageNumber,
      pageSize,
    ),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};

export const getFeedLikeCount = async Mobileno => {
  // // console.log('mobi', Mobileno);
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_FEED_LIKE_COUNT, '%2B919898989898'),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};

export const getClubPostedList = async number => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_USER_CLUB_POSTED_LIST, number),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};
export const getFollowClubList = async number => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_USER_FOLLOW_CLUB_LIST, number),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};
export const getMasterClub = async () => {
  return await _baseRequest(
    API_END_POINT.GET_MASTER_CLUB_LIST,
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};

export const addFollowClub = async (clubId, number) => {
  return await _baseRequest(
    API_END_POINT.ADD_USER_FOLLOW_CLUB_LIST,
    API_METHOD.post,
    {
      clublistId: clubId,
      mobileno: number,
    },
  ).then(response => {
    return response;
  });
};

export const addUnFollowClub = async (clubId, number) => {
  return await _baseRequest(
    API_END_POINT.ADD_USER_UN_FOLLOW_CLUB_LIST,
    API_METHOD.post,
    {
      clublistId: clubId,
      mobileno: number,
    },
  ).then(response => {
    return response;
  });
};

export const channelMasterSubscribe = async (
  channelId,
  subscriber,
  mobile_No,
) => {
  return await _baseRequest(
    API_END_POINT.CHANNEL_MASTER_SUBSCRIBE,
    API_METHOD.post,
    {
      channelId: channelId,
      subscriber: subscriber,
      mobile_No: mobile_No,
    },
  ).then(response => {
    // console.log('channel Master Subscribe =>', response);
    return response;
  });
};

export const getChannelMaster = async (number, pageNumber, pageSize) => {
  return await _baseRequest(
    COMMON.stringFormat(
      API_END_POINT.GET_CHANNEL_MASTER,
      number,
      pageNumber,
      pageSize,
    ),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};

export const getTrendingChannel = async (number, pageNumber, pageSize) => {
  return await _baseRequest(
    COMMON.stringFormat(
      API_END_POINT.GET_TRENDING_CHANNEL,
      number,
      pageNumber,
      pageSize,
    ),
    API_METHOD.get,
  ).then(response => {
    console.log('response...', response);
    return response;
  });
};

export const getMyChannels = async number => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_MY_CHANNELS, number),
    API_METHOD.get,
  ).then(response => {
    //console.log('My Channel API response', response);
    return response;
  });
};
export const getIdeasOn = async countryName => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_IDEA_ON, countryName),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};
export const getCountryList = async () => {
  return await _baseRequest(
    API_END_POINT.GET_COUNTRY_LIST,
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};
export const addFeedPost = async addFeedPostData => {
  return await _baseRequest(
    API_END_POINT.ADD_FEED_POST,
    API_METHOD.post,
    addFeedPostData,
    {
      'Content-type': 'multipart/form-data',
    },
  ).then(response => {
    return response;
  });
};
export const addChannelPost = async addChannelPostData => {
  return await _baseRequest(
    API_END_POINT.ADD_CHANNEL_POST,
    API_METHOD.post,
    addChannelPostData,
    {
      'Content-type': 'multipart/form-data',
    },
  ).then(response => {
    return response;
  });
};
export const getClubPosts = async (number, club_id) => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.CLUB_DETAILS_LIST, number, club_id),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};
export const getExpertProfile = async number => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_EXPERT_PROFILE, number),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};
export const addChannelMaster = async channelMasterParam => {
  return await _baseRequest(
    API_END_POINT.ADD_CHANNEL_MASTER,
    API_METHOD.post,
    channelMasterParam,
  ).then(response => {
    return response;
  });
};
export const getActivePost = async (Mobile_No, channelid) => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_ACTIVE_POST, Mobile_No, channelid),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};
export const getPastPost = async (Mobile_No, channelid) => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_PAST_POST, Mobile_No, channelid),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};

export const activepastPostLike = async (channelPostId, like, mobile_No) => {
  return await _baseRequest(
    API_END_POINT.ACTIVE_PAST_POST_LIKE,
    API_METHOD.post,
    {
      channelPostId: channelPostId,
      like: like,
      mobile_No: mobile_No,
    },
  ).then(response => {
    // console.log('Active_Past Post Like =>', response);
    return response;
  });
};
export const activePostIdeaTracker = async (
  channelPostId,
  mobile_No,
  istargetprice,
  isstoploss,
) => {
  return await _baseRequest(
    API_END_POINT.ACTIVE_POST_IDEA_TRACKER,
    API_METHOD.post,
    {
      channelPostId: channelPostId,
      mobile_No: mobile_No,
      istargetprice: istargetprice,
      isstoploss: isstoploss,
    },
  ).then(response => {
    // console.log('Active_Past Post Like =>', response);
    return response;
  });
};

export const channelMasterLike = async (channelId, like, mobileno) => {
  return await _baseRequest(
    API_END_POINT.CHANNEL_MASTER_LIKE,
    API_METHOD.post,
    {
      channelId: channelId,
      like: like,
      mobileno: mobileno,
    },
  ).then(response => {
    // console.log('channel Master Like =>', response);
    return response;
  });
};

export const feedPostLike = async (FeedPostID, like, Mobileno) => {
  return await _baseRequest(
    COMMON.stringFormat(
      API_END_POINT.FEED_POST_LIKE,
      FeedPostID,
      like,
      Mobileno,
    ),
    API_METHOD.post,
  ).then(response => {
    return response;
  });
};

export const channelSubscriber = async (channelId, subscriber, mobile_No) => {
  return await _baseRequest(API_END_POINT.CHANNEL_SUBSCRIBER, API_METHOD.post, {
    channelId: channelId,
    subscriber: subscriber,
    mobile_No: mobile_No,
  }).then(response => {
    // console.log('subscriber response=>', response);
    return response;
  });
};

export const getChannelProfile = async (number, channel_id) => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_CHANNEL_PROFILE, number, channel_id),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};

export const getFeedPostDetail = async (mobileno, clublistid) => {
  return await _baseRequest(
    COMMON.stringFormat(
      API_END_POINT.GET_FEED_POST_DETAIL,
      mobileno,
      clublistid,
    ),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};

export const getChannelPostHistory = async (Mobile_No, HistoryId) => {
  return await _baseRequest(
    COMMON.stringFormat(
      API_END_POINT.GET_CHANNEL_POST_HISTORY,
      Mobile_No,
      HistoryId,
    ),
    API_METHOD.get,
  ).then(response => {
    // console.log('Channel post history=>', response);
    return response;
  });
};
export const getFeedChannelDetail = async (Mobile_No, ChannelPostId) => {
  return await _baseRequest(
    COMMON.stringFormat(
      API_END_POINT.GET_FEED_CHANNEL_DETAIL,
      Mobile_No,
      ChannelPostId,
    ),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};
export const feedClubPostBlock = async (FeedPostID, mobileno, block) => {
  //// console.log('feedPostLike changed status', FeedPostID, mobileno, block);
  return await _baseRequest(
    COMMON.stringFormat(
      API_END_POINT.FEED_CLUB_BLOCK,
      FeedPostID,
      mobileno,
      block,
    ),
    API_METHOD.post,
  ).then(response => {
    return response;
  });
};

export const feedClubBlockStatus = async Mobileno => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.FEED_CLUB_BLOCK_STATUS, Mobileno),
    API_METHOD.get,
  ).then(response => {
    // // console.log('club Post Status>>', response);
    return response;
  });
};
export const feedPostFilter = async (
  Mobile_No,
  Club,
  Channel,
  Expert,
  Investor,
  ExpertAndInvestor,
  pageNumber,
  pageSize,
) => {
  return await _baseRequest(
    COMMON.stringFormat(
      API_END_POINT._POST_FILTER,
      Mobile_No,
      Club,
      Channel,
      Expert,
      Investor,
      ExpertAndInvestor,
      pageNumber,
      pageSize,
    ),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};

export const channelMasterFilter = async (
  Mobile_No,
  Expert,
  Investor,
  ExpertAndInvestor,
  PaidAccess,
  FreeAccess,
  pageNumber,
  pageSize,
) => {
  return await _baseRequest(
    COMMON.stringFormat(
      API_END_POINT.CHANNEL_MASTER_FILTER,
      Mobile_No,
      Expert,
      Investor,
      ExpertAndInvestor,
      PaidAccess,
      FreeAccess,
      pageNumber,
      pageSize,
    ),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};

export const getUserDetails = async mobileno => {
  return await _baseRequest(
    COMMON.stringFormat(API_END_POINT.GET_USER_DETAILS, mobileno),
    API_METHOD.get,
  ).then(response => {
    return response;
  });
};

export const postUpdateUserDetails = async userDetailParams => {
  return await _baseRequest(
    API_END_POINT.UPDATE_USER_DETAILS,
    API_METHOD.post,
    userDetailParams,
  ).then(response => {
    // console.log('Update User Details Response=>', response);
    return response;
  });
};

export const postUpdateUserProfilePic = async updateProfilePic => {
  return await _baseRequest(
    API_END_POINT.UPDATE_USER_PROFILE_PIC,
    API_METHOD.post,
    updateProfilePic,
    {
      'Content-type': 'multipart/form-data',
    },
  ).then(response => {
    //// console.log('Update Profile Pic Response=>', response);
    return response;
  });
};

export const contactUsDetails = async contactInfoData => {
  return await _baseRequest(
    API_END_POINT.CONTACT_US_API,
    API_METHOD.post,
    contactInfoData,
  ).then(response => {
    return response;
  });
};

export const clubDetailsComments = async (PostId, message, userId) => {
  return await _baseRequest(API_END_POINT.CLUB_COMMENTS, API_METHOD.post, {
    feedPostId: feedPostId,
    message: message,
    userId: userId,
  }).then(response => {
    console.log('Club Comments res', response);
    return response;
  });
};

const _baseRequest = async (
  url = '',
  method = API_METHOD.get,
  data = PlatformOS === 'ios' ? undefined : {},
  headers,
) => {
  return await apiClient
    .request({
      method,
      url,
      headers,
      data,
      timeoutErrorMessage: 'Request timeout',
    })
    .then(response => response.data)
    .catch(err =>
      Promise.reject({
        name: err.name,
        message: err.message,
        status: err.response?.status || -1,
        data: err.response?.data,
      }),
    );
};

const _authorizedRequest = async (
  url = '',
  method = API_METHOD.get,
  data = {},
  headers = '',
) => {
  return await getAuthorizationHeaderValue().then(authHeaderValue => {
    if (!headers) {
      headers = {};
    }
    headers[AUTHORIZATION_HEADER_NAME] = authHeaderValue || '';
    return _baseRequest(url, method, data, headers);
  });
};

const apiClient = axios.create({
  baseURL: COMMON.apiBaseUrl(),
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 10000,
});
