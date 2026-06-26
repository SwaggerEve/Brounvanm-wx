const { backHome, navTo, navDetail, copyWechat, openExternal } = require("../../utils/nav");

Page({
  backHome,
  copyWechat,
  goTiers() {
    navTo("tiers");
  },
  goServices() {
    wx.switchTab({ url: "/pages/services/services" });
  },
  wechatToast() {
    openExternal("wechat");
  },
  videoToast() {
    openExternal("video");
  }
});
