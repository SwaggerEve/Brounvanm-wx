const { detailRoutes, externalTitles } = require("../data/navigationData");

function navTo(page) {
  wx.navigateTo({ url: `/pages/${page}/${page}` });
}

function navDetail(key) {
  const page = detailRoutes[key] || "detail";
  const query = page === "detail" ? `?key=${key}` : "";
  wx.navigateTo({ url: `/pages/${page}/${page}${query}` });
}

function openExternal(type) {
  toast(externalTitles[type] || "链接待接入");
}

function backHome() {
  wx.switchTab({ url: "/pages/home/home" });
}

function toast(title) {
  wx.showToast({
    title,
    icon: "none",
    duration: 1500
  });
}

function copyWechat() {
  wx.setClipboardData({
    data: "Brounvanm_Service",
    success() {
      toast("已复制企业微信号：Brounvanm_Service");
    }
  });
}

module.exports = {
  navTo,
  navDetail,
  openExternal,
  backHome,
  toast,
  copyWechat
};
