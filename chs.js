/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "BEGIN": "开始",
    "Universe": "宇宙",
    "Universe Essence": "宇宙精华",
    "Unlock Quarks": "解锁夸克",
    "Unlock Hadrons": "解锁强子",
    "Unlock Photons": "解锁光子",
    "Unlock Universal Upgrades": "解锁通用升级",
    ", and are multiplying Hadron gain by": "，并且将 强子 增益乘以",
    ", but divide Anti-Blue Quark gain by": "，但将 反蓝夸克 增益除以",
    ", but divide Anti-Green Quark gain by": "，但将 反绿夸克 增益除以",
    ", but divide Anti-Red Quark gain by": "，但将 反红夸克 增益除以",
    "Amount:": "数量:",
    "Auto:": "自动:",
    "Cost:": "成本:",
    "Created by": "作者",
    "Currently:": "当前:",
    "Dimensional Depths": "维度深度",
    "Exit the Void.": "退出虚空。",
    "Export Save": "导出存档",
    "Force an Annihilation reset, and reset Photonic Matter & all Photons to gain": "强制湮灭重置，并重置光子物质和所有光子以获得",
    "Hadrons": "强子",
    "Import Save": "导入存档",
    "Level:": "等级:",
    "Annihilate all previous progress to gain": "湮灭所有以前的进度以获得",
    "Annihilation Energy": "湮灭能量",
    "Anti-Blue Quarks, which multiply Blue Quark gain by": "反蓝夸克，将蓝夸克增益乘以",
    "Anti-Green Quarks, which multiply Green Quark gain by": "反绿夸克，将绿夸克增益乘以",
    "Anti-Red Quarks, which multiply Red Quark gain by": "反红夸克，将红夸克增益乘以",
    "Blue Quarks, which multiply Red Quark gain by": "蓝夸克，将红夸克增益乘以",
    "Charge your Quarks.": "给你的夸克充电。",
    "Dimensional Depths, which boost Universe Growth Speed by": "维度深度，将宇宙增长速度提高",
    "In the Void, all Universal Upgrades are disabled, and Annihilation Upgrades are replaced by Void Upgrades.": "在虚空中，所有通用升级都被禁用，湮灭升级被虚空升级取代。",
    "Max All": "全部最大",
    "Next at": "下一个在 ",
    "Options": "选项",
    "Reach": "达到",
    "Req:": "要求:",
    "Sell All Wave Accelerators": "出售所有波加速器",
    "Space-Time Fabric": "Space-Time Fabric",
    "Total Quarks": "总夸克",
    "Ultrawaves.": "超声波。",
    "Universe Essence.": "宇宙精华。",
    "Unlock Antiquarks": "解锁反夸克",
    "Unlock Void": "解锁虚空",
    "Photonic Matter": "光子物质",
    "Reset your Hadrons for a Boost": "重置你的强子以获得提升",
    "Depth": "深度",
    "to delve into Dimensional Depth": "深入研究维度深度",
    "Total Annihilation Energy, which makes the Universe's size boost its growth rate by": "总湮灭能量，这使得宇宙的大小增加了",
    "Void Upgrades can be purchased twice: 1 Purchase = Works in Void, 2 Purchases = Works in & out of Void": "虚空升级可以购买两次：1 次购买 = 在虚空中工作，2 次购买 = 在虚空内外工作",
    "You have completed": "你完成了",
    "Your Anti-Quarks have generated": "你的 反夸克 生成了",
    "Your Space-Time Fabric have generated": "你的 时空结构 生成了",
    "Your universe has a volume of": "你的宇宙体积为",
    "Hadronic Boosters, which are strengthening Quark & Gluon effects by": "强子助推器，增强夸克和胶子效果",
    "Makes Total Universal Upgrade Level add extra Hadronic Boosters.": "使总通用升级等级增加额外的强子助推器。",
    "Makes Unspent Annihilation Energy strengthen all Quark effects.": "使未消耗的湮灭能量增强所有夸克效果。",
    "Next at Dimensional Depth": "下一个在维度深度",
    "of Gluon": "胶子",
    "Quark Charge, which strengthens all Quark effects by": "夸克充电，通过以下方式增强所有夸克效应",
    "Red Quarks, which multiply Green Quark gain by": "红夸克，将绿夸克增益乘以",
    "Respec Universal Upgrades": "重洗通用升级",
    "Space-Time Fabric is gained based on your Universe's size, but slows down over time since last Dimensional Depth": "时空结构是根据你的宇宙大小获得的，但自上次维度深度以来会随着时间的推移而减慢",
    "Your Space-Time Fabric has generated": "你的 时空结构 生成了",
    "Annihilation Energy.": "湮灭能量。",
    "Improve the Dimensional Depth effect.": "提高维度深度效果。",
    "Green Quarks, which multiply Blue Quark gain by": "绿夸克，将蓝夸克增益乘以",
    "Dimensional Depths lower their goal.": "维度深度降低了他们的目标。",
    "Unlock Quarks to unlock new Universal Upgrades": "解锁夸克以解锁新的通用升级",
    "Unlock Universal Upgrades to unlock new Universal Upgrades": "解锁通用升级以解锁新的通用升级",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "AE": "AE",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Annihilation Boost ": "湮灭提升 ",
    "Wave Accelerator ": "波加速器 ",
    "Universal Slowdown is slowing down your Universe's growth beyond ": "宇宙减速正在减缓你宇宙的增长速度 ",
    "Offline Progress: ": "离线进度: ",
    "Req: ": "要求: ",
    "Universal Compaction is halting your Universe's growth beyond ": "宇宙压缩正在阻止你的宇宙成长",
    "Antiquark Upgrade Power: ": "反夸克升级力量: ",
    "Universal Slowdown starts ": "通用减速开始于 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^\(×([\d\.]+)\)$/,
    /^\(\+([\d\.]+)\/s\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\{\{(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+) m$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);