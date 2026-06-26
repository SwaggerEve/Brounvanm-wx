const NFC_SCENE = 1011;
const VERIFY_URL = "/pages/verify/verify";
const TAB_ROUTES = [
  "pages/home/home",
  "pages/services/services",
  "pages/brand/brand",
  "pages/me/me"
];

App({
  globalData: {
    lastNfcRouteAt: 0
  },

  onLaunch(options) {
    this.routeNfcToVerify(options);
  },

  onShow(options) {
    this.routeNfcToVerify(options);
  },

  routeNfcToVerify(options) {
    if (!this.isNfcLaunch(options)) {
      return;
    }

    const now = Date.now();
    if (now - this.globalData.lastNfcRouteAt < 1000) {
      return;
    }
    this.globalData.lastNfcRouteAt = now;

    setTimeout(() => {
      const pages = getCurrentPages();
      const current = pages.length ? pages[pages.length - 1].route : "";

      if (current === "pages/verify/verify") {
        return;
      }

      if (current && !TAB_ROUTES.includes(current)) {
        wx.redirectTo({
          url: VERIFY_URL,
          fail: () => wx.reLaunch({ url: VERIFY_URL })
        });
        return;
      }

      wx.navigateTo({
        url: VERIFY_URL,
        fail: () => wx.reLaunch({ url: VERIFY_URL })
      });
    }, 80);
  },

  isNfcLaunch(options) {
    if (!options) {
      return false;
    }

    if (Number(options.scene) === NFC_SCENE) {
      return true;
    }

    const query = options.query || {};
    if (query.nfc === "1" || query.source === "nfc") {
      return true;
    }

    if (typeof query.q === "string") {
      let decoded = query.q;
      try {
        decoded = decodeURIComponent(query.q);
      } catch (error) {}
      return decoded.indexOf("source=nfc") > -1 || decoded.indexOf("nfc=1") > -1;
    }

    return false;
  }
});
