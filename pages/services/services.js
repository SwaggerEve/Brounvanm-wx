const { navDetail } = require("../../utils/nav");

Page({
  goDetail(event) {
    navDetail(event.currentTarget.dataset.key);
  }
});
