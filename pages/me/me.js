const { navTo, navDetail, openExternal } = require("../../utils/nav");
const { initialMemberState, joinedMemberState } = require("../../data/memberData");

Page({
  data: initialMemberState,
  joinMember() {
    if (this.data.isMember) {
      return;
    }
    this.setData(joinedMemberState);
    wx.showToast({
      title: "已模拟加入会员",
      icon: "none",
      duration: 1500
    });
  },
  selectTier(event) {
    this.setData({
      selectedTier: event.currentTarget.dataset.tier
    });
  },
  goQr() {
    navTo("qr");
  },
  goDetail(event) {
    navDetail(event.currentTarget.dataset.key);
  },
  shopToast() {
    openExternal("shop");
  }
});
