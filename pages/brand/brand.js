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
    navDetail("favorite");
  }
});
