import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '@/services/api';
import { PURGE } from 'redux-persist';
import { useSelector } from 'react-redux';

const initialState = {
  userLoading: false,
  isUserExists: null,
  isLoggedIn: false,
  otpResponse: null,
  countryList: null,
  ideasList: null,
  userLoginInfo: null,
  userLike: false,
  userSubscriber: false,
  feedLike: false,
  userDetails: null,
};

export const userSendOtp = createAsyncThunk(
  //action type string
  'user/userSendOtp',
  // callback function
  async ({ mobile_no }, { rejectWithValue }) => {
    try {
      return await api.sendOtp(mobile_no);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const userConfirmOtp = createAsyncThunk(
  'user/userConfirmOtp',
  async ({ mobile_no, otp }, { rejectWithValue }) => {
    try {
      return await api.confirmOtp(mobile_no, otp);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const userExist = createAsyncThunk(
  'user/userExist',
  async ({ mobile_no }, { rejectWithValue }) => {
    //// console.log('redux', mobile_no);
    try {
      return await api.CheckUserExists(mobile_no);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const userSetPin = createAsyncThunk(
  'user/userSetPin',
  async ({ mobile_no, password }, { rejectWithValue }) => {
    try {
      return await api.setNewPin(mobile_no, password);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const userLoginPin = createAsyncThunk(
  'user/userLoginPin',
  async ({ mobileno, password }, { rejectWithValue }) => {
    try {
      return await api.enterLoginPin(mobileno, password);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const userAddExpertInvestor = createAsyncThunk(
  'user/userAddExpertInvestor',
  async ({ expertInvestorFormData }, { rejectWithValue }) => {
    try {
      return await api.addExpertInvestor(expertInvestorFormData);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const userAddInvestor = createAsyncThunk(
  'user/userAddInvestor',
  async (
    {
      mobileno,
      name,
      usertype,
      email,
      aboutus,
      experttype,
      experience,
      knowledgelevel,
      ideas,
    },
    { rejectWithValue },
  ) => {
    try {
      return await api.postAddInvestor(
        mobileno,
        name,
        usertype,
        email,
        aboutus,
        experttype,
        experience,
        knowledgelevel,
        ideas,
      );
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const updateUserDetails = createAsyncThunk(
  'user/userUpdateUserDetails',
  async ({ userDetailParams }, { rejectWithValue }) => {
    // console.log('userDetailParams', userDetailParams);
    try {
      return await api.postUpdateUserDetails(userDetailParams);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const updateUserProfilePic = createAsyncThunk(
  'user/updateUserProfilePic',
  async ({ updateProfilePic }, { rejectWithValue }) => {
    try {
      return await api.postUpdateUserProfilePic(updateProfilePic);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const userAddExpert = createAsyncThunk(
  'user/userAddExpert',
  async ({ expertFormData }, { rejectWithValue }) => {
    try {
      return await api.postAddExpert(expertFormData);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const userGetCountryList = createAsyncThunk(
  'user/userGetCountryList',
  async (_, { rejectWithValue }) => {
    try {
      return await api.getCountryList();
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const userGetIdeaOn = createAsyncThunk(
  'user/userGetIdeaOn',
  async ({ countryName }, { rejectWithValue }) => {
    try {
      return await api.getIdeasOn(countryName);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const userChannelMasterLike = createAsyncThunk(
  'user/userChannelMasterLike',
  async ({ channelId, like, mobileno }, { rejectWithValue }) => {
    try {
      return await api.channelMasterLike(channelId, like, mobileno);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const userFeedPostLike = createAsyncThunk(
  'user/userFeedPostLike',
  async ({ FeedPostID, like, Mobileno }, { rejectWithValue }) => {
    try {
      return await api.feedPostLike(FeedPostID, like, Mobileno);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const userMasterSubscriber = createAsyncThunk(
  'user/userSubscriber',
  async ({ channelId, subscriber }, { rejectWithValue }) => {
    try {
      return await api.channelMasterLike(channelId, subscriber);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const userGetUserDetails = createAsyncThunk(
  'user/userGetUserDetails',
  async ({ mobileno }, { rejectWithValue }) => {
    try {
      return await api.getUserDetails(mobileno);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(userSendOtp.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userSendOtp.fulfilled, (state, action) => {
      state.userLoading = false;
      state.otpResponse = action.payload;
    });
    builder.addCase(userSendOtp.rejected, (state) => {
      state.userLoading = false;
      state.otpResponse = null;
    });
    builder.addCase(userConfirmOtp?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userConfirmOtp?.fulfilled, state => {
      state.userLoading = false;
    });
    builder.addCase(userConfirmOtp.rejected, state => {
      state.userLoading = false;
    });
    builder.addCase(userExist?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userExist?.fulfilled, (state, action) => {
      state.userLoading = false;
      state.isUserExists = action.payload;
    });
    builder.addCase(userExist.rejected, state => {
      state.userLoading = false;
      state.isUserExists = null;
    });
    builder.addCase(userLoginPin?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userLoginPin?.fulfilled, (state, action) => {
      const user_info = action.payload?.data ?? [];
      state.userLoading = false;
      state.userLoginInfo = user_info;
    });
    builder.addCase(userLoginPin.rejected, state => {
      state.userLoading = false;
      state.userLoginInfo = null;
    });
    builder.addCase(userAddExpertInvestor?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userAddExpertInvestor?.fulfilled, state => {
      state.userLoading = false;
    });
    builder.addCase(userAddExpertInvestor.rejected, state => {
      state.userLoading = false;
    });
    builder.addCase(userAddInvestor?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userAddInvestor?.fulfilled, state => {
      state.userLoading = false;
    });
    builder.addCase(userAddInvestor.rejected, state => {
      state.userLoading = false;
    });
    builder.addCase(userGetCountryList?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userGetCountryList?.fulfilled, (state, action) => {
      const countries = action.payload;
      state.userLoading = false;
      state.countryList = countries?.data;
    });
    builder.addCase(userGetCountryList.rejected, state => {
      state.userLoading = false;
      state.countryList = null;
    });
    builder.addCase(userGetIdeaOn?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userGetIdeaOn?.fulfilled, (state, action) => {
      const ideas = action.payload;
      state.userLoading = false;
      state.ideasList = ideas?.data;
    });
    builder.addCase(userGetIdeaOn.rejected, state => {
      state.userLoading = false;
      state.ideasList = null;
    });
    builder.addCase(userAddExpert?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userAddExpert?.fulfilled, state => {
      state.userLoading = false;
    });
    builder.addCase(userAddExpert.rejected, state => {
      state.userLoading = false;
    });
    builder.addCase(userChannelMasterLike?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userChannelMasterLike?.fulfilled, state => {
      state.userLoading = false;
    });
    builder.addCase(userChannelMasterLike.rejected, state => {
      state.userLoading = false;
    });
    builder.addCase(userMasterSubscriber?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userMasterSubscriber?.fulfilled, state => {
      state.userLoading = false;
    });
    builder.addCase(userMasterSubscriber.rejected, state => {
      state.userLoading = false;
    });
    builder.addCase(userFeedPostLike?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userFeedPostLike?.fulfilled, state => {
      state.userLoading = false;
    });
    builder.addCase(userFeedPostLike.rejected, state => {
      state.userLoading = false;
    });
    builder.addCase(userGetUserDetails?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(userGetUserDetails?.fulfilled, (state, action) => {
      const userData = action?.payload;
      state.userDetails = userData?.data;
      state.userLoading = false;
    });
    builder.addCase(userGetUserDetails.rejected, state => {
      state.userLoading = false;
      state.userDetails = null;
    });
    builder.addCase(updateUserDetails?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(updateUserDetails?.fulfilled, state => {
      state.userLoading = false;
    });
    builder.addCase(updateUserDetails.rejected, state => {
      state.userLoading = false;
    });
    builder.addCase(updateUserProfilePic?.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(updateUserProfilePic?.fulfilled, state => {
      state.userLoading = false;
    });
    builder.addCase(updateUserProfilePic.rejected, state => {
      state.userLoading = false;
    });

    // when purging reset back to the initial state
    builder.addCase(PURGE, () => initialState);
  },
});

// Action creators are generated for each case reducer function
export const { isLogin } = userSlice.actions;
export default userSlice.reducer;

export const UserSelectors = () => {
  const userLoading = useSelector(state => state?.user?.userLoading);
  const isUserExists = useSelector(state => state?.user?.isUserExists);
  const isLoggedIn = useSelector(state => state?.user?.isLoggedIn);
  const otpResponse = useSelector(state => state?.user?.otpResponse);
  const countryList = useSelector(state => state.user?.countryList);
  const ideasList = useSelector(state => state?.user?.ideasList);
  const userLoginInfo = useSelector(state => state?.user?.userLoginInfo);
  const userLike = useSelector(state => state?.user?.userLike);
  const feedLike = useSelector(state => state?.user?.feedLike);
  const userSubscriber = useSelector(state => state?.user?.userSubscriber);
  const userDetails = useSelector(state => state?.user?.userDetails);
  return {
    userLoading,
    isUserExists,
    isLoggedIn,
    otpResponse,
    countryList,
    ideasList,
    userLoginInfo,
    userLike,
    userSubscriber,
    feedLike,
    userDetails,
  };
};
