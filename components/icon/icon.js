const { getIconData } = require("../../utils/icons");

Component({
  properties: {
    name: { type: String, value: "info" },
    color: { type: String, value: "#5D3A1A" },
    size: { type: Number, value: 24 }
  },
  data: {
    src: ""
  },
  lifetimes: {
    attached() {
      this.updateIcon();
    }
  },
  observers: {
    "name,color": function () {
      this.updateIcon();
    }
  },
  methods: {
    updateIcon() {
      this.setData({
        src: getIconData(this.data.name, this.data.color)
      });
    }
  }
});
