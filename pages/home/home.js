const { navTo, navDetail, openExternal } = require("../../utils/nav");

Page({
  goVerify() {
    navTo("verify");
  },
  goServices() {
    wx.switchTab({ url: "/pages/services/services" });
  },
  goQr() {
    navTo("qr");
  },
  goTiers() {
    navTo("tiers");
  },
  goDetail(event) {
    navDetail(event.currentTarget.dataset.key);
  },
  shopToast() {
    openExternal("shop");
  }
});
