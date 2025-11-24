// 商品卡片组件
import React from 'react';
import { Star, Plus } from 'lucide-react';
import type { Product } from '../../types';
import { TiltCard } from '../common/TiltCard';
import { useStore } from '../../store/useStore';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <TiltCard 
      className="bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:border-cyan-500/50 cursor-pointer group relative overflow-hidden"
      onClick={onClick}
    >
      {/* 装饰性角落光晕 */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-cyan-500/10 to-transparent -mr-6 -mt-6 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all"></div>

      {/* 图片区 */}
      <div className="h-32 flex items-center justify-center mb-4 bg-slate-900/50 rounded-lg border border-slate-700/30 group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] transition-all relative">
        {React.createElement(product.image, { className: "w-16 h-16 text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500" })}
        <div className="absolute top-2 right-2 text-xs font-mono text-slate-600">
          ID_{product.id.toString().padStart(3, '0')}
        </div>
        {product.stock < 5 && (
          <div className="absolute bottom-2 right-2 text-xs text-red-400 font-bold animate-pulse">
            仅剩 {product.stock} 件
          </div>
        )}
      </div>

      {/* 信息区 */}
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <span className="text-xs bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded shrink-0 ml-2">
            {product.category}
          </span>
        </div>
        
        {/* 评分 */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-slate-600"} 
            />
          ))}
          <span className="text-xs text-slate-500 ml-2">{product.rating}</span>
        </div>

        {/* 价格与购买按钮 */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold font-mono text-pink-400">
            ¥{product.price}
          </span>
          <button 
            onClick={handleAddToCart}
            className="p-2 bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-900 rounded-lg transition-all"
            title="加入购物车"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </TiltCard>
  );
};
