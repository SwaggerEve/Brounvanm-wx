const details = {
  shop: {
    title: "微信小店",
    subtitle: "精选商品 · 随心选购",
    desc: "这里展示 Brounvanm 微信小店模拟入口，可用于承接新品、步履之礼和精选商品。",
    items: ["Classic Oxford 经典牛津鞋", "Loafer 乐福鞋 · 限量版", "会员专属优先购"]
  },
  wechat: {
    title: "公众号",
    subtitle: "品牌动态 · 保养知识",
    desc: "关注 Brounvanm 公众号，获取新品发布、真皮保养和会员活动消息。",
    items: ["品牌动态", "保养知识", "会员活动"]
  },
  video: {
    title: "视频号",
    subtitle: "穿搭 · 工艺 · 活动",
    desc: "这里展示 Brounvanm 视频号模拟入口，用于承接穿搭灵感和工艺内容。",
    items: ["商务正装穿搭", "真皮工艺短片", "会员活动回顾"]
  },
  favorite: {
    title: "收藏我们",
    subtitle: "方便下次访问",
    desc: "收藏 Brounvanm 小程序后，可快速进入正品验证、会员服务和专属顾问。",
    items: ["正品验证", "会员服务", "专属顾问"]
  },
  nfcGuide: {
    title: "如何使用 NFC 验真？",
    subtitle: "详细操作步骤说明",
    desc: "将手机 NFC 区域靠近 Brounvanm 鞋盒或吊牌内的 NFC 贴片，即可打开小程序正品验证页。",
    items: ["打开手机 NFC", "靠近 NFC 贴片", "进入正品验证页", "添加专属顾问"]
  },
  careGuide: {
    title: "真皮保养指南",
    subtitle: "让鞋履保持温润光泽",
    desc: "真皮鞋履需要温和、克制的日常护理。保持干爽、避免极端环境，并定期做基础护理，可帮助鞋面维持自然纹理与穿着舒适度。",
    sectionTitle: "保养要点",
    items: ["避免长时间泡水", "避免暴晒", "穿后通风", "定期护理", "建议轮换穿着"]
  },
  afterSale: {
    title: "售后与维修政策",
    subtitle: "服务范围与流程",
    desc: "通过专属顾问提交鞋履问题，可获得售后咨询、养护建议和维修流程说明。",
    items: ["提交问题", "顾问确认", "给出方案", "跟进服务"]
  },
  stepGift: {
    title: "步履之礼",
    subtitle: "复购会员专属礼遇",
    desc: "为感谢老客持续选择 Brounvanm，会员复购后可获得专属步履之礼。礼遇以实用、耐用和鞋履护理为核心，帮助每一双真皮鞋更好地陪伴日常穿着。",
    sectionTitle: "礼遇内容",
    items: ["复购后登记会员信息", "专属顾问确认礼遇资格", "赠送鞋履护理相关礼品", "优先获得新品与养护提醒", "礼遇随订单或售后服务一并安排"]
  },
  newPriority: {
    title: "新品优先",
    subtitle: "提前获取新品资讯",
    desc: "会员可优先获取新品发布、试穿建议和微信小店上新提醒。",
    items: ["新品预告", "优先通知", "搭配建议"]
  },
  careReminder: {
    title: "保养提醒",
    subtitle: "定期养护提示",
    desc: "根据穿着周期提供真皮鞋履养护提醒，帮助保持鞋面状态。",
    items: ["清洁提醒", "护理提醒", "换季收纳"]
  },
  shoeCabinet: {
    title: "老客品鉴官",
    subtitle: "品鉴官邀请制",
    desc: "品鉴官不是花钱买来的，而是由深度参与换来的。Brounvanm 希望让真正长期穿着、真实反馈的老客，成为品牌的一部分。目前仅 127 位品鉴官。",
    sectionTitle: "品鉴官规则",
    items: ["条件：拥有 2 双以上 Brounvanm 鞋履，并加入企微满 1 年", "权利：新鞋上市前 2 周优先试穿，寄样到家", "权利：每季 1 次与主理人线上闭门交流", "权利：参与鞋款命名建议", "义务：试穿后提交真实体验反馈"]
  },
  referral: {
    title: "推荐有礼",
    subtitle: "分享品牌服务",
    desc: "推荐好友了解 Brounvanm，可获得会员关系成长记录和专属福利提醒。",
    items: ["推荐好友", "顾问登记", "福利提醒"]
  },
  verifyRecord: {
    title: "验证记录",
    subtitle: "查看正品验证历史",
    desc: "这里展示模拟正品验证记录，所有 NFC 贴片同款，不写入鞋款信息。",
    items: ["2026-06-26 NFC 芯片验证通过", "官方正品保障", "已建议添加专属顾问"]
  },
  profile: {
    title: "个人资料",
    subtitle: "会员基础信息",
    desc: "这里展示 Brounvanm 会员模拟资料。",
    items: ["昵称：Brounvanm 会员", "等级：Silver · 购鞋会员", "状态：已加入"]
  },
  oxford: {
    title: "Classic Oxford 经典牛津鞋",
    subtitle: "2026 夏季新品",
    desc: "经典牛津鞋模拟详情，适合商务正装、日常通勤与重要场合。",
    items: ["真皮鞋面", "稳重楦型", "会员优先了解"]
  },
  loafer: {
    title: "Loafer 乐福鞋 · 限量版",
    subtitle: "会员优先购",
    desc: "乐福鞋模拟详情，兼顾轻松穿脱和 Smart Casual 搭配。",
    items: ["限量款提醒", "周末出行", "会员优先购"]
  },
  formalOutfit: {
    title: "商务正装×牛津鞋",
    subtitle: "3套搭配方案",
    desc: "围绕牛津鞋构建商务正装穿搭，适合会议、通勤和正式宴请。",
    items: ["深色西装", "白色衬衫", "经典牛津鞋"]
  },
  casualOutfit: {
    title: "Smart Casual 乐福鞋搭配",
    subtitle: "周末出行灵感",
    desc: "围绕乐福鞋构建轻商务穿搭，适合周末出行和轻松会面。",
    items: ["针织 Polo", "休闲西裤", "乐福鞋"]
  }
};

function getDetail(key) {
  return details[key] || {
    title: "Brounvanm 服务",
    subtitle: "品牌会员服务",
    desc: "这里展示 Brounvanm 模拟服务详情。",
    items: ["正品验证", "专属顾问", "会员服务"]
  };
}

module.exports = {
  getDetail
};
