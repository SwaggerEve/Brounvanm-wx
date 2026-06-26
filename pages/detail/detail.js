const { backHome } = require("../../utils/nav");
const { getDetail } = require("../../utils/mockData");

Page({
  data: {
    detail: normalizeDetail(getDetail())
  },

  onLoad(options) {
    this.setData({
      detail: normalizeDetail(getDetail(options.key))
    });
  },

  backHome
});

function normalizeDetail(detail) {
  return Object.assign({ sectionTitle: "服务内容" }, detail);
}
