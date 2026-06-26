const { backHome } = require("../../utils/nav");
const { getDetail } = require("../../utils/mockData");

Page({
  data: {
    detail: Object.assign({ sectionTitle: "服务内容" }, getDetail("favorite"))
  },
  backHome
});
