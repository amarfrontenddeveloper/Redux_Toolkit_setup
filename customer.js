import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { useSelector } from 'react-redux';
import * as api from '@/services/api';

const initialState = {
  customerLoading: false,
  customerTrendingLoading: false,
  feedPostInfo: null,
  followClubListInfo: null,
  masterClubList: null,
  expertProfileList: null,
  selectedExpertList: null,
  channelMasterList: null,
  trendingChannelList: null,
  myChannelList: null,
  activePostList: null,
  pastPostList: null,
  channelInfo: null,
  feedFilter: null,
  channelFilter: null,
  clubsFilter: null,
  filterDataStore: null,
  channelProfileInfo: null,
  feedPostDetail: null,
  feedChannelDetail: null,
  channelPostHistory: null,
  feedClubPostBlock: null,
  feedRecordCount: 0,
  channelRecordCount: 0,
  trendingRecordCount: 0,
  channelMasterSubscribe: null,
  feedLikeCount: null,
  searchData: '',
  channelFilterData: null,
  //feedSearchData: null,
  //clubSearchData: null,
  //channelSearchData: null,
  feedClubPostStatus: null,
  feedPostFilterData: null,
  contactUsData: null,
  clubCommentsData: null,
  isTrendingFinished: false,
  isTrendingPaginating: false,
  isFeedPaginating: false,
  isFeedFinished: false,
  isChannelPaginating: false,
  isChannelFinished: false,
  activePostMessage: null,

};

export const customerFeedPost = createAsyncThunk(
  'customer/customerFeedPost',
  async ({ Mobile_No, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      return await api.getFeedPost(Mobile_No, pageNumber, pageSize);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerFollowClubList = createAsyncThunk(
  'customer/userFollowClubList',
  async ({ mobile_no }, { rejectWithValue }) => {
    try {
      return await api.getFollowClubList(mobile_no);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const customerMasterClubList = createAsyncThunk(
  'customer/customerMasterClubList',
  async (_, { rejectWithValue }) => {
    try {
      return await api.getMasterClub();
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const customerAddFollowClub = createAsyncThunk(
  'customer/customerAddFollowClub',
  async ({ clubId, mobileno }, { rejectWithValue }) => {
    try {
      return await api.addFollowClub(clubId, mobileno);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerAddUnFollowClub = createAsyncThunk(
  'customer/customerAddUnFollowClub',
  async ({ clubId, mobileno }, { rejectWithValue }) => {
    try {
      return await api.addUnFollowClub(clubId, mobileno);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerChannelMasterLike = createAsyncThunk(
  'customer/customerChannelMasterLike',
  async ({ channelId, like, mobileno }, { rejectWithValue }) => {
    try {
      return await api.channelMasterLike(channelId, like, mobileno);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerFeedPostLike = createAsyncThunk(
  'customer/customerFeedPostLike',
  async ({ FeedPostID, like, Mobileno }, { rejectWithValue }) => {
    try {
      return await api.feedPostLike(FeedPostID, like, Mobileno);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerFeedLikeCount = createAsyncThunk(
  'customer/customerFeedLikeCount',
  async ({ Mobileno }, { rejectWithValue }) => {
    try {
      return await api.getFeedLikeCount(Mobileno);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerActivePastPostLike = createAsyncThunk(
  'customer/customerActivePastPostLike',
  async ({ channelPostId, like, mobile_No }, { rejectWithValue }) => {
    try {
      return await api.activepastPostLike(channelPostId, like, mobile_No);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerIdeaTracker = createAsyncThunk(
  'customer/customerIdeaTracker',
  async (
    { channelPostId, mobile_No, istargetprice, isstoploss },
    { rejectWithValue },
  ) => {
    try {
      return await api.activePostIdeaTracker(
        channelPostId,
        mobile_No,
        istargetprice,
        isstoploss,
      );
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerChannelMasterSubscribe = createAsyncThunk(
  'customer/customerChannelMasterSubscribe',
  async ({ channelId, subscriber, mobile_No }, { rejectWithValue }) => {
    try {
      return await api.channelMasterSubscribe(channelId, subscriber, mobile_No);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerChannelMaster = createAsyncThunk(
  'customer/customerChannelMaster',
  async ({ mobileno, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      return await api.getChannelMaster(mobileno, pageNumber, pageSize);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const myChannels = createAsyncThunk(
  'customer/myChannel',
  async ({ Mobile_No }, { rejectWithValue }) => {
    try {
      return await api.getMyChannels(Mobile_No);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const customerTrendingChannel = createAsyncThunk(
  'customer/customerTrendingChannel',
  async ({ Mobile_No, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      return await api.getTrendingChannel(Mobile_No, pageNumber, pageSize);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerAddFeedPost = createAsyncThunk(
  'customer/customerAddFeedPost',
  async ({ addFeedPostData }, { rejectWithValue }) => {
    //// console.log(' add Feed Post Data=>', addFeedPostData);
    try {
      return await api.addFeedPost(addFeedPostData);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const customerGetClubPosts = createAsyncThunk(
  'customer/customerGetClubPosts',
  async ({ number, club_id }, { rejectWithValue }) => {
    try {
      return await api.getClubPosts(number, club_id);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const fetchExpertProfile = createAsyncThunk(
  'customer/fetchExpertProfile',
  async ({ number }, { rejectWithValue }) => {
    try {
      return await api.getExpertProfile(number);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const postAddChannelMaster = createAsyncThunk(
  'customer/postAddChannelMaster',
  async ({ channelMasterParam }, { rejectWithValue }) => {
    try {
      return await api.addChannelMaster(channelMasterParam);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const customerGetActivePosts = createAsyncThunk(
  'customer/customerGetActivePosts',
  async ({ Mobile_No, channelid }, { rejectWithValue }) => {
    try {
      return await api.getActivePost(Mobile_No, channelid);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const addChannelPost = createAsyncThunk(
  'customer/addChannelPost',
  async ({ addChannelPostData }, { rejectWithValue }) => {
    try {
      return await api.addChannelPost(addChannelPostData);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerPastPost = createAsyncThunk(
  'customer/customerPastPost',
  async ({ Mobile_No, channelid }, { rejectWithValue }) => {
    try {
      return await api.getPastPost(Mobile_No, channelid);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerChannelProfile = createAsyncThunk(
  'customer/customerChannelProfile',
  async ({ Mobile_No, ChannelId }, { rejectWithValue }) => {
    try {
      return await api.getChannelProfile(Mobile_No, ChannelId);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const customerFeedPostDetail = createAsyncThunk(
  'customer/customerFeedPostDetail',
  async ({ mobileno, clublistid }, { rejectWithValue }) => {
    try {
      return await api.getFeedPostDetail(mobileno, clublistid);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerGetFeedChannelDetail = createAsyncThunk(
  'customer/customerGetFeedChannelDetail',
  async ({ Mobile_No, ChannelPostId }, { rejectWithValue }) => {
    try {
      return await api.getFeedChannelDetail(Mobile_No, ChannelPostId);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const customerGetChannelPostHistory = createAsyncThunk(
  'customer/customerGetChannelPostHistory',
  async ({ Mobile_No, HistoryId }, { rejectWithValue }) => {
    try {
      return await api.getchannelPostHistory(Mobile_No, HistoryId);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const customerFeedClubPostBlock = createAsyncThunk(
  'customer/customerFeedClubPostBlock',
  async ({ FeedPostID, mobileno, block }, { rejectWithValue }) => {
    try {
      return await api.feedClubPostBlock(FeedPostID, mobileno, block);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const customerFeedClubPostStatus = createAsyncThunk(
  'customer/customerFeedClubPostStatus',
  async ({ Mobileno }, { rejectWithValue }) => {
    try {
      return await api.feedClubBlockStatus(Mobileno);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerClubDetailsComments = createAsyncThunk(
  'user/customerClubDetailsComments',
  async ({ feedPostId, message, userId }, { rejectWithValue }) => {
    try {
      return await api.clubDetailsComments(feedPostId, message, userId);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerFeedPostFilter = createAsyncThunk(
  'customer/customerFeedPostFilter',
  async (
    {
      Mobile_No,
      Club,
      Channel,
      Expert,
      Investor,
      ExpertAndInvestor,
      pageNumber,
      pageSize,
    },
    { rejectWithValue },
  ) => {
    try {
      return await api.feedPostFilter(
        Mobile_No,
        Club,
        Channel,
        Expert,
        Investor,
        ExpertAndInvestor,
        pageNumber,
        pageSize,
      );
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerChannelMasterFilter = createAsyncThunk(
  'customer/customerChannelMasterFilter',
  async (
    {
      Mobile_No,
      Expert,
      Investor,
      ExpertAndInvestor,
      PaidAccess,
      FreeAccess,
      pageNumber,
      pageSize,
    },
    { rejectWithValue },
  ) => {
    try {
      return await api.channelMasterFilter(
        Mobile_No,
        Expert,
        Investor,
        ExpertAndInvestor,
        PaidAccess,
        FreeAccess,
        pageNumber,
        pageSize,
      );
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const addChannelMaster = createAsyncThunk(
  'user/customerAddChannelMaster',
  async (
    {
      mobile_No,
      name,
      idealfor,
      benefits,
      subscription,
      coAdChannel,
      description,
      imageurl,
      coAdList,
    },
    { rejectWithValue },
  ) => {
    try {
      return await api.addChannelMasters(
        mobile_No,
        name,
        idealfor,
        benefits,
        subscription,
        coAdChannel,
        description,
        imageurl,
        coAdList,
      );
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const customerContactUsDetails = createAsyncThunk(
  'user/customerContactUsDetails',
  async ({ contactInfoData }, { rejectWithValue }) => {
    try {
      return await api.contactUsDetails(contactInfoData);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addExpertId(state, action) {
      state.selectedExpertList = action.payload;
    },
    setChannelInfo(state, action) {
      state.channelInfo = action.payload;
    },
    setFeedFilter(state, action) {
      state.feedFilter = action.payload;
    },
    setChannelFilter(state, action) {
      state.channelFilter = action.payload;
    },
    setClubsFilter(state, action) {
      state.clubsFilter = action.payload;
    },
    setFilterDataStore(state, action) {
      state.filterDataStore = action.payload;
    },
    setSearchData(state, action) {
      // console.log('setSearchData', setSearchData);
      state.searchData = action.payload;
    },
    setChannelFilterData(state, action) {
      // console.log('setSearchData', setSearchData);
      state.channelFilterData = action.payload;
    },
    setActivePostMessage(state, action) {
      // console.log('setSearchData', setSearchData);
      state.activePostMessage = action.payload;
    },
    // setFeedSearchData(state, action) {
    //   state.feedSearchData = action.payload;
    // },
    // setClubSearchData(state, action) {
    //   state.clubSearchData = action.payload;
    // },
    // setChannelSearchData(state, action) {
    //   state.channelSearchData = action.payload;
    // },
  },
  extraReducers: builder => {
    builder.addCase(customerFeedPost?.pending, (state, action) => {
      const feedPaginating = action?.meta?.arg?.pageNumber > 0;
      state.isFeedPaginating = feedPaginating;
      state.customerLoading = true;
    });
    builder.addCase(customerFeedPost?.fulfilled, (state, action) => {
      let feedPost = action.payload ?? [];
      if (feedPost?.items?.length === 0) {
        state.isFeedFinished = true;
      } else {
        state.isFeedFinished = false;
        state.feedPostInfo = feedPost?.items;
      }
      state.feedRecordCount = feedPost?.totalRecords;
      state.isFeedPaginating = false;
      state.customerLoading = false;
    });
    builder.addCase(customerFeedPost.rejected, state => {
      state.customerLoading = false;
      state.isFeedPaginating = false;
      state.feedPostInfo = null;
    });

    builder.addCase(customerChannelMaster?.pending, (state, action) => {
      const channelPaginating = action?.meta?.arg?.pageNumber > 0;
      state.isChannelPaginating = channelPaginating;
      state.customerLoading = true;
    });
    builder.addCase(customerChannelMaster?.fulfilled, (state, action) => {
      let channel_list = action.payload?.items ?? [];
      if (channel_list.length === 0) {
        state.isChannelFinished = true;
      } else {
        state.isChannelFinished = false;
        state.channelMasterList = channel_list;
      }
      state.channelRecordCount = channel_list?.totalRecords;
      state.isChannelPaginating = false;
      state.customerLoading = false;
    });
    builder.addCase(customerChannelMaster.rejected, state => {
      state.customerLoading = false;
      state.isChannelPaginating = false;
      state.channelMasterList = null;
    });

    builder.addCase(customerTrendingChannel?.pending, (state, action) => {
      const paginating = action?.meta?.arg?.pageNumber > 0;
      state.isTrendingPaginating = paginating;
      state.customerTrendingLoading = true;
    });
    builder.addCase(customerTrendingChannel?.fulfilled, (state, action) => {
      let trending_channel_list = action.payload ?? [];
      if (trending_channel_list?.items?.length === 0) {
        state.isTrendingFinished = true;
      } else {
        state.isTrendingFinished = false;
        state.trendingChannelList = trending_channel_list;
      }
      state.trendingRecordCount = action.payload?.totalRecords;
      state.isTrendingPaginating = false;
      state.customerTrendingLoading = false;
    });
    builder.addCase(customerTrendingChannel.rejected, state => {
      state.customerTrendingLoading = false;
      state.isTrendingPaginating = false;
      state.trendingChannelList = null;
    });

    builder.addCase(customerFeedLikeCount.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerFeedLikeCount.fulfilled, (state, action) => {
      const feed_Count = action.payload?.data ?? [];
      state.feedLikeCount = feed_Count;
      state.customerLoading = false;
    });
    builder.addCase(customerFeedLikeCount.rejected, state => {
      state.customerLoading = false;
      state.feedLikeCount = null;
    });
    builder.addCase(customerFollowClubList?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerFollowClubList?.fulfilled, (state, action) => {
      state.customerLoading = false;
      state.followClubListInfo = action?.payload?.data;
    });
    builder.addCase(customerFollowClubList.rejected, state => {
      state.customerLoading = false;
      state.followClubListInfo = null;
    });
    builder.addCase(customerMasterClubList?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerMasterClubList?.fulfilled, (state, action) => {
      state.customerLoading = false;
      state.masterClubList = action.payload;
    });
    builder.addCase(customerMasterClubList.rejected, state => {
      state.customerLoading = false;
      state.masterClubList = null;
    });
    builder.addCase(customerAddFollowClub?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerAddFollowClub?.fulfilled, (state, action) => {
      state.customerLoading = false;
    });
    builder.addCase(customerAddFollowClub.rejected, state => {
      state.customerLoading = false;
    });
    builder.addCase(customerAddUnFollowClub?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerAddUnFollowClub?.fulfilled, (state, action) => {
      state.customerLoading = false;
    });
    builder.addCase(customerAddUnFollowClub.rejected, state => {
      state.customerLoading = false;
    });
    builder.addCase(myChannels?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(myChannels?.fulfilled, (state, action) => {
      let my_channel_list = action.payload?.data ?? [];
      state.myChannelList = my_channel_list;
      state.customerLoading = false;
    });
    builder.addCase(myChannels.rejected, state => {
      state.customerLoading = false;
      state.myChannelList = null;
    });

    builder.addCase(customerAddFeedPost?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerAddFeedPost?.fulfilled, (state, action) => {
      state.customerLoading = false;
    });
    builder.addCase(customerAddFeedPost.rejected, state => {
      state.customerLoading = false;
    });
    builder.addCase(customerGetClubPosts?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerGetClubPosts?.fulfilled, (state, action) => {
      state.customerLoading = false;
    });
    builder.addCase(customerGetClubPosts.rejected, state => {
      state.customerLoading = false;
    });
    builder.addCase(fetchExpertProfile?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(fetchExpertProfile?.fulfilled, (state, action) => {
      const expert_data = action?.payload?.data ?? [];
      state.customerLoading = false;
      state.expertProfileList = expert_data;
    });
    builder.addCase(fetchExpertProfile.rejected, state => {
      state.customerLoading = false;
    });
    builder.addCase(postAddChannelMaster?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(postAddChannelMaster?.fulfilled, (state, action) => {
      state.customerLoading = false;
    });
    builder.addCase(postAddChannelMaster.rejected, state => {
      state.customerLoading = false;
    });
    builder.addCase(customerGetActivePosts?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerGetActivePosts?.fulfilled, (state, action) => {
      let active_post = action.payload.data ?? [];
      state.activePostList = active_post;
      state.customerLoading = false;
    });
    builder.addCase(customerGetActivePosts.rejected, state => {
      state.customerLoading = false;
      state.activePostList = null;
    });
    builder.addCase(customerPastPost?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerPastPost?.fulfilled, (state, action) => {
      let past_post = action.payload.data ?? [];
      state.pastPostList = past_post;
      state.customerLoading = false;
    });
    builder.addCase(customerPastPost.rejected, state => {
      state.customerLoading = false;
      state.pastPostList = null;
    });
    builder.addCase(addChannelPost?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(addChannelPost?.fulfilled, state => {
      state.customerLoading = false;
    });
    builder.addCase(addChannelPost.rejected, state => {
      state.customerLoading = false;
    });
    builder.addCase(customerChannelProfile?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerChannelProfile?.fulfilled, (state, action) => {
      state.customerLoading = false;
      state.channelProfileInfo = action.payload;
    });
    builder.addCase(customerChannelProfile.rejected, state => {
      state.customerLoading = false;
      state.channelProfileInfo = null;
    });
    builder.addCase(customerFeedPostDetail?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerFeedPostDetail?.fulfilled, (state, action) => {
      const feed_details = action.payload.data ?? [];
      state.customerLoading = false;
      state.feedPostDetail = feed_details;
    });
    builder.addCase(customerFeedPostDetail.rejected, state => {
      state.customerLoading = false;
      state.feedPostDetail = null;
    });
    builder.addCase(customerGetFeedChannelDetail?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(
      customerGetFeedChannelDetail?.fulfilled,
      (state, action) => {
        const channel_details = action.payload.data ?? [];
        state.customerLoading = false;
        state.feedChannelDetail = channel_details;
      },
    );
    builder.addCase(customerGetFeedChannelDetail.rejected, state => {
      state.customerLoading = false;
      state.feedChannelDetail = null;
    });
    builder.addCase(customerGetChannelPostHistory?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(
      customerGetChannelPostHistory?.fulfilled,
      (state, action) => {
        const channel_history = action.payload.data ?? [];
        state.customerLoading = false;
        state.channelPostHistory = channel_history;
      },
    );
    builder.addCase(customerGetChannelPostHistory.rejected, state => {
      state.customerLoading = false;
      state.channelPostHistory = null;
    });
    builder.addCase(customerFeedClubPostBlock?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerFeedClubPostBlock?.fulfilled, (state, action) => {
      const club_block = action.payload.data ?? [];
      state.customerLoading = false;
      state.feedClubPostBlock = club_block;
    });
    builder.addCase(customerFeedClubPostBlock.rejected, state => {
      state.customerLoading = false;
      state.feedClubPostBlock = null;
    });
    builder.addCase(customerFeedClubPostStatus?.pending, state => {
      state.feedClubPostStatus = true;
    });
    builder.addCase(customerFeedClubPostStatus?.fulfilled, (state, action) => {
      state.customerLoading = false;
      state.feedClubPostStatus = action.payload;
    });
    builder.addCase(customerFeedClubPostStatus.rejected, state => {
      state.customerLoading = false;
      state.feedClubPostStatus = null;
    });
    builder.addCase(customerClubDetailsComments?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerClubDetailsComments?.fulfilled, (state, action) => {
      state.customerLoading = false;
      state.clubCommentsData = action.payload;
    });
    builder.addCase(customerClubDetailsComments.rejected, state => {
      state.customerLoading = false;
      state.clubCommentsData = null;
    });
    builder.addCase(customerChannelMasterSubscribe?.pending, state => {
      state.channelMasterSubscribe = true;
    });
    builder.addCase(
      customerChannelMasterSubscribe?.fulfilled,
      (state, action) => {
        state.customerLoading = false;
        state.channelMasterSubscribe = action.payload;
      },
    );
    builder.addCase(customerChannelMasterSubscribe.rejected, state => {
      state.customerLoading = false;
      state.channelMasterSubscribe = null;
    });

    builder.addCase(customerFeedPostFilter?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerFeedPostFilter?.fulfilled, (state, action) => {
      const filterData = action.payload;
      state.customerLoading = false;
      state.feedPostFilterData = filterData?.items;
    });
    builder.addCase(customerFeedPostFilter.rejected, state => {
      state.customerLoading = false;
      state.feedPostFilterData = null;
    });

    builder.addCase(customerChannelMasterFilter?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerChannelMasterFilter?.fulfilled, (state, action) => {
      const filterData = action.payload;
      state.customerLoading = false;
      state.channelFilterData = filterData?.items;
    });
    builder.addCase(customerChannelMasterFilter.rejected, state => {
      state.customerLoading = false;
      state.channelFilterData = null;
    });

    builder.addCase(customerContactUsDetails?.pending, state => {
      state.customerLoading = true;
    });
    builder.addCase(customerContactUsDetails?.fulfilled, (state, action) => {
      state.customerLoading = false;
      state.contactUsData = action.payload;
    });
    builder.addCase(customerContactUsDetails.rejected, state => {
      state.customerLoading = false;
      state.contactUsData = null;
    });
    // when purging reset back to the initial state
    builder.addCase(PURGE, () => initialState);
  },
});

export default customerSlice.reducer;

export const {
  addExpertId,
  setChannelInfo,
  setFeedFilter,
  setChannelFilter,
  setClubsFilter,
  setSearchData,
  setChannelFilterData,
  setFeedSearchData,
  setClubSearchData,
  setChannelSearchData,
  setFilterDataStore,
  setActivePostMessage,
} = customerSlice.actions;

export const customerSelectors = () => {
  const feedPostInfo = useSelector(state => state.customer?.feedPostInfo);
  const feedRecordCount = useSelector(state => state.customer?.feedRecordCount);
  const feedLikeCount = useSelector(state => state.customer?.feedLikeCount);
  const followClubList = useSelector(
    state => state.customer.followClubListInfo,
  );
  const masterClubList = useSelector(state => state?.customer?.masterClubList);
  const expertProfileList = useSelector(
    state => state?.customer?.expertProfileList,
  );
  const dropdownData = useSelector(state => state?.customer?.dropdownValues);
  const selectedExpertList = useSelector(
    state => state?.customer?.selectedExpertList,
  );
  const channelMasterList = useSelector(
    state => state?.customer?.channelMasterList,
  );
  const channelRecordCount = useSelector(
    state => state.customer?.channelRecordCount,
  );
  const trendingChannelList = useSelector(
    state => state?.customer?.trendingChannelList,
  );
  const trendingRecordCount = useSelector(
    state => state.customer?.trendingRecordCount,
  );
  const myChannelList = useSelector(state => state?.customer?.myChannelList);
  const activePostList = useSelector(state => state?.customer?.activePostList);
  const pastPostList = useSelector(state => state?.customer?.pastPostList);
  const channelProfileInfo = useSelector(
    state => state?.customer?.channelProfileInfo,
  );
  const channelInfo = useSelector(state => state?.customer?.channelInfo);
  const feedFilter = useSelector(state => state?.customer?.feedFilter);
  const channelFilter = useSelector(state => state?.customer?.channelFilter);
  const clubsFilter = useSelector(state => state?.customer?.clubsFilter);

  const filterDataStore = useSelector(
    state => state?.customer?.filterDataStore,
  );

  const feedPostDetail = useSelector(state => state?.customer?.feedPostDetail);
  const feedChannelDetail = useSelector(
    state => state?.customer?.feedChannelDetail,
  );
  const channelPostHistory = useSelector(
    state => state?.customer?.channelPostHistory,
  );
  const feedClubPostBlock = useSelector(
    state => state?.customer?.feedClubPostBlock,
  );
  const channelMasterSubscribe = useSelector(
    state => state?.customer?.channelMasterSubscribe,
  );
  const searchData = useSelector(state => state?.customer?.searchData);

  const channelFilterData = useSelector(
    state => state?.customer?.channelFilterData,
  );

  const feedClubPostStatus = useSelector(
    state => state?.customer?.feedClubPostStatus,
  );
  const feedPostFilterData = useSelector(
    state => state?.customer?.feedPostFilterData,
  );
  const contactUsData = useSelector(state => state?.customer?.contactUsData);
  const clubCommentsData = useSelector(
    state => state?.customer?.clubCommentsData,
  );
  activePostMessage
  const activePostMessage = useSelector(
    state => state?.customer?.activePostMessage,
  );
  return {
    feedPostInfo,
    feedRecordCount,
    channelRecordCount,
    trendingRecordCount,
    followClubList,
    masterClubList,
    expertProfileList,
    dropdownData,
    selectedExpertList,
    channelMasterList,
    trendingChannelList,
    myChannelList,
    activePostList,
    pastPostList,
    channelProfileInfo,
    channelInfo,
    feedFilter,
    channelFilter,
    clubsFilter,
    feedPostDetail,
    filterDataStore,
    feedChannelDetail,
    channelPostHistory,
    feedClubPostBlock,
    channelMasterSubscribe,
    feedLikeCount,
    feedClubPostStatus,
    searchData,
    channelFilterData,
    //feedSearchData,
    //clubSearchData,
    //channelSearchData,
    feedPostFilterData,
    contactUsData,
    clubCommentsData,
    activePostMessage,
  };
};
