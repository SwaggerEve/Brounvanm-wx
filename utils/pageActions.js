const { actionMap } = require("../data/actionData");

function runPageAction(page, key, type, value) {
  const config = actionMap[key] || {};
  const title = config[type] || "已记录";
  const records = wx.getStorageSync("brounvanmActionRecords") || [];
  records.unshift({
    key,
    type,
    value: value || "",
    time: formatTime(new Date())
  });
  wx.setStorageSync("brounvanmActionRecords", records.slice(0, 20));
  wx.showToast({
    title,
    icon: "none",
    duration: 1500
  });
  if (page && page.setData) {
    page.setData({
      lastAction: title
    });
  }
}

function formatTime(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

module.exports = {
  runPageAction
};
