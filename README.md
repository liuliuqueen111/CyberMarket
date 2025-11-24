# 🌐 CyberMarket - 游戏装备商店

CybeMarket 是一个科技类游戏装备商店，为玩家提供沉浸式的装备采购体验。商店集成了从装备浏览、详情查看到购物车管理一系列商店采购功能。

## ✨ 核心功能

我提供了丰富的装备浏览体验，支持智能搜索功能，用户可以通过装备名称快速定位心仪物品。使用多维度筛选可以让玩家根据装备类型和游戏需求进行精准筛选，找到所需的战斗装备、潜行工具和医疗植入体。

购物车系统采用侧边抽屉设计，玩家可以实时调整装备数量，查看总价，并享受数据持久化的便利，即使关闭浏览器也不会丢失购物记录。每个装备都配备了详细的参数说明、视觉效果预览和库存状态显示。

## 🎨 交互体验

商店的界面融入了大量赛博朋克元素，包括霓虹发光效果、3D倾斜卡片动画和流畅的页面切换。商品卡片在鼠标悬停时会产生动态倾斜效果，响应式设计确保了在不同设备上的完美适配，从桌面电脑到移动设备都能提供一致的高质量体验。

## 🏗️ 技术架构

项目基于 React 18 和 TypeScript 构建，采用 Vite 作为开发和构建工具。Tailwind CSS 提供了强大的样式系统，支持复杂的视觉效果和响应式布局。Zustand 作为轻量级状态管理解决方案，负责处理购物车、筛选条件等应用状态。Lucide React 图标库为装备提供了丰富的视觉标识。

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```
访问 http://localhost:5173 查看应用

### 3. 构建生产版本
```bash
npm run build
```

## 📁 项目结构说明

```
src/
├── components/              # 组件目录
│   ├── common/             # 通用组件
│   │   ├── TiltCard.tsx           # 3D 倾斜卡片
│   │   ├── NeonButton.tsx         # 按钮
│   │   ├── Navbar.tsx             # 导航栏
│   │   ├── Paginator.tsx          # 分页器
│   │   ├── BackgroundDecoration.tsx # 背景装饰
│   │   └── index.ts               # 导出文件
│   ├── business/           # 业务组件
│   │   ├── ProductCard.tsx        # 商品卡片
│   │   ├── FilterBar.tsx          # 筛选栏
│   │   ├── CartDrawer.tsx         # 购物车抽屉
│   │   └── index.ts
│   └── pages/              # 页面组件
│       ├── ProductListPage.tsx    # 商品列表页
│       ├── ProductDetailPage.tsx  # 商品详情页
│       └── index.ts
├── store/                  # 状态管理
│   └── useStore.ts                # Zustand 全局状态
├── data/                   # 数据层
│   └── mockData.ts                # Mock 商品数据
├── types/                  # TypeScript 类型定义
│   └── index.ts
├── App.tsx                 # 主应用组件
├── main.tsx               # 应用入口
└── index.css              # 全局样式
```
## 🔧 技术细节

### 状态管理（Zustand）
使用 Zustand 管理全局状态，主要包括：

```typescript
{
  products: Product[],      // 商品列表
  cart: CartItem[],        // 购物车
  filters: {               // 筛选条件
    searchTerm: string,
    activeCategory: string,
    activeMood: string,
    sortBy: string,
    currentPage: number
  }
}

- addToCart(product)        // 添加到购物车
- removeFromCart(id)        // 从购物车移除
- updateQuantity(id, delta) // 更新商品数量
- setSearchTerm(term)       // 设置搜索词
- setActiveCategory(cat)    // 设置分类筛选
- getFilteredProducts()     // 获取过滤后的商品
```

### 组件通信
1. **父子组件通信**：通过 Props 传递数据和回调函数
2. **全局状态**：通过 Zustand Store 共享状态
3. **事件处理**：使用回调函数处理用户交互

### 响应式设计
使用 Tailwind CSS 断点：
```css
/* 移动端：默认单列 */
grid-cols-1

/* 平板：2列 */
sm:grid-cols-2

/* 桌面：3列 */
lg:grid-cols-3
```
## 🐛 常见问题

### 1. 样式不生效
确保 `index.css` 中正确引入了 Tailwind：
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. 购物车数据丢失
购物车数据已通过 `zustand/middleware` 的 `persist` 功能持久化到 localStorage，正常情况下不会丢失。

### 3. 开发服务器无法启动
确保已安装所有依赖：
```bash
npm install
```


