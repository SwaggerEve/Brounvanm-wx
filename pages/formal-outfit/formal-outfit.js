const { backHome } = require("../../utils/nav");
const { getDetail } = require("../../utils/mockData");
const { runPageAction } = require("../../utils/pageActions");

const pageKey = "formalOutfit";

Page({
  data: {
    detail: Object.assign({ sectionTitle: "服务内容" }, getDetail(pageKey)),
    lastAction: ""
  },
  handleCardTap() {
    runPageAction(this, pageKey, "card", this.data.detail.title);
  },
  handleItemTap(event) {
    runPageAction(this, pageKey, "item", event.currentTarget.dataset.value);
  },
  onShareAppMessage() {
    return {
      title: this.data.detail.title,
      path: "/pages/formal-outfit/formal-outfit"
    };
  },
  backHome
});
