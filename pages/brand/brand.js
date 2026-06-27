const { navDetail, openExternal } = require("../../utils/nav");

Page({
  goDetail(event) {
    navDetail(event.currentTarget.dataset.key);
  },
  wechatToast() {
    openExternal("wechat");
  },
  videoToast() {
    openExternal("video");
  },
  favToast() {
    wx.setStorageSync("brounvanmFavorite", {
      favorited: true,
      time: Date.now()
    });
    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"]
    });
    wx.showModal({
      title: "已收藏 Brounvanm",
      content: "已为你记录收藏状态。添加到我的小程序请点击右上角“...”并选择“添加到我的小程序”。",
      confirmText: "知道了",
      showCancel: false
    });
  }
});
