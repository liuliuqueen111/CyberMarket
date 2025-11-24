// Mock
import {
  // 武器
  Zap, Sword, Crosshair, Target, Flame, Bomb,

  // 护具
  Shield, Lock, Eye, Headphones, Glasses,

  // 工具/设备
  Cpu, Wrench, Settings, Cog, Hammer,
  TerminalSquare, MonitorSpeaker, Type, HardDriveIcon, WifiIcon,
  Car,

  // 医疗/植入体
  Heart, Brain, Activity, Pill, Syringe,

  // 载具/交通
  Plane, Rocket, Anchor, MapPin,

  // 消耗品
  Battery, Fuel, Droplets, Package,

  // 软件/数据
  Database, Code, Search, Cloud, Server,

  // 杂项
  Star, Moon, Sun, Snowflake, Gem, Crown, Trophy
} from 'lucide-react';
import type { Product } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "量子光刃",
    price: 2999,
    category: "武器",
    mood: "战斗",
    image: Zap,
    rating: 4.8,
    stock: 5,
    description: "使用高能等离子体切割一切物质，虽然续航只有30分钟，但足以解决大多数麻烦。内置AI辅助瞄准系统，命中率提升200%。"
  },
  {
    id: 2,
    name: "纳米剑",
    price: 1899,
    category: "武器",
    mood: "战斗",
    image: Sword,
    rating: 4.6,
    stock: 15,
    description: "由纳米机器人组成的液态金属剑刃，可以根据战斗需要改变形状。重量仅0.5kg，却能切割穿甲钢板。"
  },
  {
    id: 3,
    name: "智能狙击步枪",
    price: 4599,
    category: "武器",
    mood: "战斗",
    image: Crosshair,
    rating: 4.9,
    stock: 8,
    description: "配备AI瞄准系统和自适应弹道计算，射程超过2公里。内置消音器和光学迷彩伪装功能。"
  },
  {
    id: 4,
    name: "等离子手枪",
    price: 1299,
    category: "武器",
    mood: "战斗",
    image: Target,
    rating: 4.4,
    stock: 25,
    description: "发射高温等离子弹的便携式手枪。过热保护系统可防止武器损坏，弹容量20发。"
  },
  {
    id: 5,
    name: "火焰喷射器",
    price: 2199,
    category: "武器",
    mood: "战斗",
    image: Flame,
    rating: 4.2,
    stock: 12,
    description: "喷射可控纳米火焰的近距离防御武器。火焰温度可达3000°C，燃料续航时间15分钟。"
  },
  {
    id: 6,
    name: "EMP手雷",
    price: 399,
    category: "武器",
    mood: "战斗",
    image: Bomb,
    rating: 4.7,
    stock: 50,
    description: "释放强力电磁脉冲的智能手雷。有效范围20米，可瘫痪所有电子设备，安全距离5米。"
  },
  {
    id: 7,
    name: "光学迷彩披风",
    price: 1500,
    category: "护具",
    mood: "潜行",
    image: Shield,
    rating: 4.9,
    stock: 12,
    description: "能够折射99%的可见光，城市夜行者的必备单品。注意：不防红外线探测。内置温度调节系统。"
  },
  {
    id: 8,
    name: "智能防弹衣",
    price: 899,
    category: "护具",
    mood: "战斗",
    image: Lock,
    rating: 4.5,
    stock: 30,
    description: "纳米纤维编织的防弹衣，可抵御9mm子弹直射。内置生命体征监测器和自动急救注射系统。"
  },
  {
    id: 9,
    name: "AR护目镜",
    price: 699,
    category: "护具",
    mood: "黑客",
    image: Eye,
    rating: 4.8,
    stock: 20,
    description: "增强现实护目镜，显示系统信息、威胁分析和导航数据。夜视功能和热成像扫描。"
  },
  {
    id: 10,
    name: "神经干扰耳机",
    price: 349,
    category: "护具",
    mood: "潜行",
    image: Headphones,
    rating: 4.3,
    stock: 40,
    description: "阻挡精神干扰和心灵感应的防护耳机。内置白噪音发生器和反监听系统。"
  },
  {
    id: 11,
    name: "全息投影眼镜 ",
    price: 1299,
    category: "护具",
    mood: "探索",
    image: Glasses,
    rating: 4.6,
    stock: 18,
    description: "可投影全息图像的智能眼镜。用于伪装身份、显示虚拟界面或创建幻觉效果。"
  },

  {
    id: 12,
    name: "神经元接入芯片 V3",
    price: 8999,
    category: "植入体",
    mood: "黑客",
    image: Cpu,
    rating: 5.0,
    stock: 3,
    description: "提升你的黑客入侵速度300%。副作用：偶尔会看到不存在的霓虹独角兽。兼容所有主流神经接口。"
  },
  {
    id: 13,
    name: "肌肉增强植入体",
    price: 12999,
    category: "植入体",
    mood: "战斗",
    image: Heart,
    rating: 4.7,
    stock: 5,
    description: "纳米机器人增强的肌肉纤维，提升力量500%，反应速度提升300%。手术恢复时间2周。"
  },
  {
    id: 14,
    name: "大脑加速器",
    price: 15999,
    category: "植入体",
    mood: "黑客",
    image: Brain,
    rating: 4.9,
    stock: 2,
    description: "提升大脑处理速度10倍，让你成为真正的人工智能接口。副作用：偶尔会忘记现实世界。"
  },
  {
    id: 15,
    name: "代谢调节器",
    price: 4999,
    category: "植入体",
    mood: "生存",
    image: Activity,
    rating: 4.4,
    stock: 8,
    description: "调节新陈代谢，72小时无需进食饮水。自动排毒和伤口愈合加速功能。"
  },
  {
    id: 16,
    name: "疼痛抑制器",
    price: 2999,
    category: "植入体",
    mood: "战斗",
    image: Pill,
    rating: 4.6,
    stock: 15,
    description: "完全抑制疼痛信号，让你在战斗中保持清醒。内置止痛药自动注射系统。"
  },
  {
    id: 17,
    name: "肾上腺素刺激器",
    price: 1999,
    category: "植入体",
    mood: "战斗",
    image: Syringe,
    rating: 4.3,
    stock: 25,
    description: "紧急情况下释放肾上腺素，提升战斗力300%。每次使用后需要24小时恢复。"
  },

  {
    id: 18,
    name: "万能工具箱",
    price: 799,
    category: "工具",
    mood: "实用",
    image: Wrench,
    rating: 4.5,
    stock: 35,
    description: "纳米机器人组成的智能工具箱，可变形为任何工具形状。内置数据库包含10万个工具模板。"
  },
  {
    id: 19,
    name: "黑客终端",
    price: 2499,
    category: "工具",
    mood: "黑客",
    image: Settings,
    rating: 4.8,
    stock: 10,
    description: "便携式黑客终端，内置多种入侵工具和病毒库。支持无线和有线连接，加密强度AAA级。"
  },
  {
    id: 20,
    name: "纳米维修机器人",
    price: 1599,
    category: "工具",
    mood: "实用",
    image: Cog,
    rating: 4.6,
    stock: 20,
    description: "微型维修机器人，可修复任何机械设备。内置零件库，可3D打印缺失部件。"
  },
  {
    id: 21,
    name: "等离子切割枪",
    price: 1199,
    category: "工具",
    mood: "战斗",
    image: Hammer,
    rating: 4.4,
    stock: 28,
    description: "高温等离子切割工具，可切割任何金属材料。温度可调，最大可达5000°C。"
  },
  {
    id: 22,
    name: "力场发生器",
    price: 3499,
    category: "工具",
    mood: "防御",
    image: Wrench,
    rating: 4.7,
    stock: 12,
    description: "生成可调节大小的力场护盾。能量来源：便携式核电池，续航时间4小时。"
  },

  {
    id: 23,
    name: "全息投影键盘",
    price: 899,
    category: "外设",
    mood: "黑客",
    image: Type,
    rating: 4.5,
    stock: 22,
    description: "投影在任意平面的虚拟键盘，支持多语言和盲打模式。防水防尘，永不磨损。"
  },
  {
    id: 24,
    name: "神经接口手套",
    price: 1299,
    category: "外设",
    mood: "黑客",
    image: MonitorSpeaker,
    rating: 4.7,
    stock: 18,
    description: "通过神经信号控制设备的智能手套。支持触觉反馈和力反馈模拟。"
  },
  {
    id: 25,
    name: "增强现实眼镜",
    price: 699,
    category: "外设",
    mood: "探索",
    image: TerminalSquare,
    rating: 4.3,
    stock: 30,
    description: "显示增强现实信息的智能眼镜。内置GPS、翻译器和威胁检测系统。"
  },
  {
    id: 26,
    name: "量子硬盘",
    price: 1999,
    category: "外设",
    mood: "黑客",
    image: HardDriveIcon,
    rating: 4.9,
    stock: 15,
    description: "存储容量无限的量子硬盘。数据加密强度最高，可存储整个城市的监控录像。"
  },
  {
    id: 27,
    name: "神经网络路由器",
    price: 599,
    category: "外设",
    mood: "黑客",
    image: WifiIcon,
    rating: 4.4,
    stock: 40,
    description: "通过神经信号传输数据的路由器。传输速度无限，安全性极高。"
  },

  {
    id: 28,
    name: "反重力滑板",
    price: 4500,
    category: "载具",
    mood: "探索",
    image: Zap,
    rating: 4.6,
    stock: 8,
    description: "无需轮子，直接悬浮。最高时速80km/h，小心撞墙。内置防撞力场和自动平衡系统。"
  },
  {
    id: 29,
    name: "隐形无人机",
    price: 3299,
    category: "载具",
    mood: "潜行",
    image: Plane,
    rating: 4.8,
    stock: 12,
    description: "光学隐形微型无人机，配备高清摄像头和红外扫描仪。续航时间3小时，控制距离5公里。"
  },
  {
    id: 30,
    name: "磁悬浮摩托",
    price: 8999,
    category: "载具",
    mood: "探索",
    image: Car,
    rating: 4.7,
    stock: 6,
    description: "磁悬浮驱动的智能摩托车，最高时速200km/h。自动驾驶和防碰撞系统，能源效率极高。"
  },
  {
    id: 31,
    name: "便携式飞行器",
    price: 15999,
    category: "载具",
    mood: "探索",
    image: Rocket,
    rating: 4.9,
    stock: 3,
    description: "折叠式个人飞行器，可垂直起降。巡航速度150km/h，续航时间2小时。"
  },
  {
    id: 32,
    name: "水下呼吸器",
    price: 2499,
    category: "载具",
    mood: "探索",
    image: Anchor,
    rating: 4.5,
    stock: 15,
    description: "纳米过滤膜水下呼吸装置，可在水下呼吸4小时。内置鱼鳃模拟技术和深度计。"
  },
  {
    id: 33,
    name: "GPS干扰器",
    price: 799,
    category: "载具",
    mood: "潜行",
    image: MapPin,
    rating: 4.2,
    stock: 25,
    description: "干扰GPS信号的便携设备，有效范围500米。防止追踪和定位。"
  },

  {
    id: 34,
    name: "纳米修复喷雾",
    price: 199,
    category: "消耗品",
    mood: "战斗",
    image: Droplets,
    rating: 4.7,
    stock: 100,
    description: "能在几秒钟内修复轻微的机械损伤或生物组织撕裂。纳米机器人技术，愈合率95%。"
  },
  {
    id: 35,
    name: "能量电池组",
    price: 299,
    category: "消耗品",
    mood: "实用",
    image: Battery,
    rating: 4.4,
    stock: 150,
    description: "高密度能量电池，兼容所有标准接口。容量5000mAh，快速充电技术。"
  },
  {
    id: 36,
    name: "合成燃料棒",
    price: 149,
    category: "消耗品",
    mood: "实用",
    image: Fuel,
    rating: 4.3,
    stock: 200,
    description: "高能合成燃料，可为任何设备提供能源。燃烧效率300%，无污染排放。"
  },
  {
    id: 37,
    name: "医疗纳米机器人",
    price: 499,
    category: "消耗品",
    mood: "生存",
    image: Package,
    rating: 4.8,
    stock: 80,
    description: "注射式纳米医疗机器人，可自动修复内部损伤。有效期6个月，单次使用。"
  },
  {
    id: 38,
    name: "解毒剂胶囊",
    price: 99,
    category: "消耗品",
    mood: "生存",
    image: Pill,
    rating: 4.6,
    stock: 300,
    description: "通用解毒剂，可中和99%的毒素和辐射。口服5分钟见效，副作用轻微。"
  },

  {
    id: 39,
    name: "夜之城全息地图",
    price: 59,
    category: "软件",
    mood: "探索",
    image: Search,
    rating: 4.0,
    stock: 999,
    description: "包含所有隐藏的拉面摊位标记。路痴救星。实时更新，包含地下通道和安全屋位置。"
  },
  {
    id: 40,
    name: "AI黑客助手",
    price: 299,
    category: "软件",
    mood: "黑客",
    image: Code,
    rating: 4.7,
    stock: 50,
    description: "智能黑客辅助程序，可自动分析系统漏洞并生成入侵代码。学习能力强，更新频繁。"
  },
  {
    id: 41,
    name: "虚拟身份生成器",
    price: 199,
    category: "软件",
    mood: "潜行",
    image: Database,
    rating: 4.5,
    stock: 75,
    description: "生成完美虚拟身份的软件，包括银行账户、社会保障号和数字足迹。防检测率99.9%。"
  },
  {
    id: 42,
    name: "加密通讯软件",
    price: 149,
    category: "软件",
    mood: "潜行",
    image: Cloud,
    rating: 4.6,
    stock: 100,
    description: "端到端量子加密通讯软件。支持语音、视频和文件传输，绝对安全。"
  },
  {
    id: 43,
    name: "威胁分析系统",
    price: 399,
    category: "软件",
    mood: "战斗",
    image: Server,
    rating: 4.8,
    stock: 40,
    description: "实时分析周围威胁的AI系统。预测危险概率，建议最佳应对策略。"
  },

  {
    id: 44,
    name: "便携式黑洞发生器",
    price: 12000,
    category: "杂项",
    mood: "混沌",
    image: Star,
    rating: 4.5,
    stock: 1,
    description: "仅供娱乐用途。请勿在居住区开启。后果自负。微型黑洞持续时间3秒钟。"
  },
  {
    id: 45,
    name: "幸运符芯片",
    price: 999,
    category: "杂项",
    mood: "幸运",
    image: Gem,
    rating: 4.1,
    stock: 20,
    description: "据说能带来好运的量子芯片。科学依据存疑，但用户评价很高。"
  },
  {
    id: 46,
    name: "全息宠物生成器",
    price: 799,
    category: "杂项",
    mood: "娱乐",
    image: Crown,
    rating: 4.3,
    stock: 30,
    description: "生成各种全息宠物的设备。从电子龙到虚拟猫，应有尽有。陪伴度满分。"
  },
  {
    id: 47,
    name: "时间膨胀装置",
    price: 25000,
    category: "杂项",
    mood: "混沌",
    image: Moon,
    rating: 4.9,
    stock: 1,
    description: "让时间变慢的实验性装置。有效范围5米，时间膨胀倍率10倍。小心使用。"
  },
  {
    id: 48,
    name: "记忆水晶",
    price: 1499,
    category: "杂项",
    mood: "复古",
    image: Snowflake,
    rating: 4.4,
    stock: 15,
    description: "存储和回放记忆的晶体设备。可记录重要时刻，防止遗忘。"
  },
  {
    id: 49,
    name: "情绪调节器",
    price: 699,
    category: "杂项",
    mood: "平衡",
    image: Sun,
    rating: 4.2,
    stock: 25,
    description: "调节情绪的便携设备。通过神经信号调整大脑化学物质，快速恢复平静。"
  },
  {
    id: 50,
    name: "预言骰子",
    price: 299,
    category: "杂项",
    mood: "神秘",
    image: Trophy,
    rating: 3.9,
    stock: 50,
    description: "据说能预测未来的量子骰子。每次投掷消耗能量，准确率约30%。娱乐用途。"
  }
];

export const CATEGORIES = ["全部", "武器", "护具", "植入体", "工具", "外设", "载具", "消耗品", "软件", "杂项"];
export const MOODS = ["全部", "战斗", "潜行", "黑客", "实用", "探索", "生存", "防御", "娱乐", "幸运", "平衡", "神秘", "混沌", "复古"];
