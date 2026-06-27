const { runPageAction } = require("../../utils/pageActions");

Component({
  properties: {
    detail: {
      type: Object,
      value: {}
    },
    actionKey: {
      type: String,
      value: ""
    }
  },
  methods: {
    handleCardTap() {
      runPageAction(this, this.data.actionKey, "card", this.data.detail.title);
    },
    handleItemTap(event) {
      runPageAction(this, this.data.actionKey, "item", event.currentTarget.dataset.value);
    }
  }
});
