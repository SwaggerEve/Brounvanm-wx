const { navTo, navDetail } = require("../../utils/nav");

Page({
  data: {
    isMember: false,
    selectedTier: ""
  },
  joinMember() {
    if (this.data.isMember) {
      return;
    }
    this.setData({
      isMember: true,
      selectedTier: "basic"
    });
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
    navDetail("shop");
  }
});
