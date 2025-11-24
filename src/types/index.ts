// 类型定义文件
import type { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  mood: string;
  image: LucideIcon;
  rating: number;
  stock: number;
  description: string;
}

export interface CartItem extends Omit<Product, 'image'> {
  quantity: number;
  specs?: Record<string, any>;
  image?: LucideIcon; // 可选，因为从 localStorage 恢复时无法序列化
}

export interface FilterState {
  searchTerm: string;
  activeCategory: string;
  activeMood: string;
  sortBy: 'default' | 'priceAsc' | 'priceDesc';
  currentPage: number;
}
