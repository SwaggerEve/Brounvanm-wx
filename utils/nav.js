function navTo(page) {
  wx.navigateTo({ url: `/pages/${page}/${page}` });
}

function navDetail(key) {
  const routes = {
    favorite: "favorite",
    nfcGuide: "nfc-guide",
    careGuide: "care-guide",
    afterSale: "after-sale",
    stepGift: "step-gift",
    newPriority: "new-priority",
    careReminder: "care-reminder",
    shoeCabinet: "shoe-cabinet",
    referral: "referral",
    verifyRecord: "verify-record",
    profile: "profile",
    oxford: "oxford",
    loafer: "loafer",
    formalOutfit: "formal-outfit",
    casualOutfit: "casual-outfit"
  };
  const page = routes[key] || "detail";
  const query = page === "detail" ? `?key=${key}` : "";
  wx.navigateTo({ url: `/pages/${page}/${page}${query}` });
}

function openExternal(type) {
  const titles = {
    shop: "微信小店链接待接入",
    wechat: "公众号链接待接入",
    video: "视频号链接待接入"
  };
  toast(titles[type] || "链接待接入");
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
