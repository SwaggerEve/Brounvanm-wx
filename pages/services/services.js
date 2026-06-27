const { navTo, navDetail } = require("../../utils/nav");

Page({
  goDetail(event) {
    const key = event.currentTarget.dataset.key;
    if (key === "wechat") {
      navTo("qr");
      return;
    }
    navDetail(key);
  }
});
