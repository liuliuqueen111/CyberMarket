// Zustand 状态管理 Store
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, CartItem, FilterState } from '../types';
import { MOCK_PRODUCTS } from '../data/mockData';

interface StoreState {
  // 商品数据
  products: Product[];
  
  // 购物车
  cart: CartItem[];
  addToCart: (product: Product, specs?: Record<string, any>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  
  // 筛选和排序
  filters: FilterState;
  setSearchTerm: (term: string) => void;
  setActiveCategory: (category: string) => void;
  setActiveMood: (mood: string) => void;
  setSortBy: (sortBy: 'default' | 'priceAsc' | 'priceDesc') => void;
  setCurrentPage: (page: number) => void;
  resetFilters: () => void;
  
  // 计算属性
  getFilteredProducts: () => Product[];
  getCartTotal: () => number;
  getCartCount: () => number;
}

const initialFilters: FilterState = {
  searchTerm: '',
  activeCategory: '全部',
  activeMood: '全部',
  sortBy: 'default',
  currentPage: 1,
};

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // 初始状态
      products: MOCK_PRODUCTS,
      cart: [],
      filters: initialFilters,
      
      // 购物车操作
      addToCart: (product, specs = {}) => {
        set((state) => {
          const existing = state.cart.find(item => item.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map(item => 
                item.id === product.id 
                  ? { ...item, quantity: item.quantity + 1 } 
                  : item
              )
            };
          }
          // 排除 image 字段
          const { image, ...productWithoutImage } = product;
          return {
            cart: [...state.cart, { ...productWithoutImage, quantity: 1, specs } as CartItem]
          };
        });
      },
      
      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter(item => item.id !== id)
        }));
      },
      
      updateQuantity: (id, delta) => {
        set((state) => ({
          cart: state.cart.map(item => {
            if (item.id === id) {
              const newQty = Math.max(1, item.quantity + delta);
              return { ...item, quantity: newQty };
            }
            return item;
          })
        }));
      },
      
      clearCart: () => set({ cart: [] }),
      
      // 筛选器操作
      setSearchTerm: (term) => {
        set((state) => ({
          filters: { ...state.filters, searchTerm: term, currentPage: 1 }
        }));
      },
      
      setActiveCategory: (category) => {
        set((state) => ({
          filters: { ...state.filters, activeCategory: category, currentPage: 1 }
        }));
      },
      
      setActiveMood: (mood) => {
        set((state) => ({
          filters: { ...state.filters, activeMood: mood, currentPage: 1 }
        }));
      },
      
      setSortBy: (sortBy) => {
        set((state) => ({
          filters: { ...state.filters, sortBy, currentPage: 1 }
        }));
      },
      
      setCurrentPage: (page) => {
        set((state) => ({
          filters: { ...state.filters, currentPage: page }
        }));
      },
      
      resetFilters: () => {
        set({ filters: initialFilters });
      },
      
      // 计算方法
      getFilteredProducts: () => {
        const { products, filters } = get();
        let result = [...products];
        
        // 按分类筛选
        if (filters.activeCategory !== '全部') {
          result = result.filter(p => p.category === filters.activeCategory);
        }
        
        // 按情绪筛选
        if (filters.activeMood !== '全部') {
          result = result.filter(p => p.mood === filters.activeMood);
        }
        
        // 按搜索词筛选
        if (filters.searchTerm) {
          result = result.filter(p => 
            p.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
          );
        }
        
        // 排序
        if (filters.sortBy === 'priceAsc') {
          result.sort((a, b) => a.price - b.price);
        } else if (filters.sortBy === 'priceDesc') {
          result.sort((a, b) => b.price - a.price);
        }
        
        return result;
      },
      
      getCartTotal: () => {
        return get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
      
      getCartCount: () => {
        return get().cart.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'cyber-shop-storage',
      partialize: (state) => ({ cart: state.cart }), // 只持久化购物车
    }
  )
);
