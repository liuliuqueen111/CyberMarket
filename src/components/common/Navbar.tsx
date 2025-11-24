// 导航栏组件
import React from 'react';
import { ShoppingCart, Search, Terminal } from 'lucide-react';
import { useStore } from '../../store/useStore';

interface NavbarProps {
  onCartOpen: () => void;
  onLogoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartOpen, onLogoClick }) => {
  const { filters, setSearchTerm, getCartCount } = useStore();
  const cartCount = getCartCount();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={onLogoClick}
        >
          <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Terminal className="text-slate-900 w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            CYBER<span className="text-white">MARKET</span>
          </span>
        </div>

        {/* 搜索框 */}
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="relative group">
            <input
              type="text"
              placeholder="检索神经网络数据库..."
              className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
              value={filters.searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-slate-500 w-4 h-4 group-focus-within:text-cyan-400 transition-colors" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="relative p-2 hover:bg-white/5 rounded-full transition-colors group"
            onClick={onCartOpen}
          >
            <ShoppingCart className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 移动端搜索框 */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索商品..."
            className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
            value={filters.searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-slate-500 w-4 h-4" />
        </div>
      </div>
    </nav>
  );
};
