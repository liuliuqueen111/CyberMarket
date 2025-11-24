// 商品详情页组件
import React from 'react';
import { ChevronLeft, ShoppingCart, Cpu, Heart } from 'lucide-react';
import type { Product } from '../../types';
import { NeonButton } from '../common/NeonButton';
import { useStore } from '../../store/useStore';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBack }) => {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="animate-fade-in">
      {/* 返回按钮 */}
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-slate-400 hover:text-cyan-400 transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> 
        返回列表
      </button>
      
      {/* 详情内容 */}
      <div className="grid md:grid-cols-2 gap-12 bg-slate-800/30 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
        {/* 装饰背景 */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-cyan-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
        
        {/* 左侧：产品展示 */}
        <div className="flex items-center justify-center bg-slate-900/50 rounded-xl border border-slate-700/50 aspect-square relative group">
          {React.createElement(product.image, { className: "w-48 h-48 text-slate-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-500" })}
          <div className="absolute bottom-4 w-full px-8 flex justify-between text-xs font-mono text-slate-600">
            <span>SYS_READY</span>
            <span>MODEL_V2.0</span>
          </div>
          
          {/* 库存提示 */}
          {product.stock < 10 && (
            <div className="absolute top-4 right-4 bg-red-500/20 border border-red-500/50 text-red-400 px-3 py-1 rounded text-xs font-bold">
              库存紧张: {product.stock} 件
            </div>
          )}
        </div>

        {/* 右侧：详细信息 */}
        <div className="space-y-6">
          {/* 标签 */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded font-bold border border-pink-500/30">
                {product.mood} STYLE
              </span>
              <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                {product.category}
              </span>
            </div>
            
            {/* 标题 */}
            <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
            
            {/* 评分 */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-slate-600'}`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-slate-400 text-sm">{product.rating} / 5.0</span>
            </div>
            
            {/* 描述 */}
            <p className="text-slate-400 leading-relaxed border-l-2 border-cyan-500/50 pl-4">
              {product.description}
            </p>
          </div>

          {/* 规格参数 */}
          <div className="bg-black/20 p-4 rounded-lg border border-white/5 space-y-3">
            <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
              <Cpu size={16} /> 规格参数
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between border-b border-slate-700/50 pb-1">
                <span className="text-slate-500">耐用度</span>
                <span className="text-cyan-400">98%</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/50 pb-1">
                <span className="text-slate-500">重量</span>
                <span className="text-cyan-400">1.2 kg</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/50 pb-1">
                <span className="text-slate-500">产地</span>
                <span className="text-cyan-400">Neo-Tokyo</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/50 pb-1">
                <span className="text-slate-500">保修</span>
                <span className="text-cyan-400">3 年</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/50 pb-1">
                <span className="text-slate-500">库存</span>
                <span className={`font-bold ${product.stock < 5 ? 'text-red-400' : 'text-cyan-400'}`}>
                  {product.stock} 件
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-700/50 pb-1">
                <span className="text-slate-500">发货</span>
                <span className="text-cyan-400">24h</span>
              </div>
            </div>
          </div>

          {/* 价格与操作 */}
          <div className="pt-6 flex items-center justify-between border-t border-white/10">
            <div className="text-3xl font-bold font-mono text-pink-400">
              ¥{product.price.toLocaleString()}
            </div>
            <div className="flex gap-4">
              <NeonButton variant="ghost">
                <Heart size={18} /> 收藏
              </NeonButton>
              <NeonButton variant="primary" onClick={handleAddToCart}>
                <ShoppingCart size={18} /> 加入购物车
              </NeonButton>
            </div>
          </div>
        </div>
      </div>

      {/* 动画样式 */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
