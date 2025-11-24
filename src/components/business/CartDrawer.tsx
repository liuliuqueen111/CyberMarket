// 购物车抽屉组件
import React from 'react';
import { ShoppingCart, X, Trash2 } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { NeonButton } from '../common/NeonButton';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, products } = useStore();
  const cartTotal = getCartTotal();
  
  // 获取完整产品信息
  const getProductById = (id: number) => products.find(p => p.id === id);

  return (
    <div className={`fixed inset-0 z-[100] flex justify-end transition-all ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* 遮罩层 */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>
      
      {/* 抽屉内容 */}
      <div 
        className={`relative w-full max-w-md bg-slate-900 border-l border-cyan-500/30 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-slate-800/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShoppingCart className="text-cyan-400" /> 购物车
          </h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X />
          </button>
        </div>

        {/* 购物车商品列表 */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <div className="mb-4">您的装备库是空的</div>
              <NeonButton variant="ghost" onClick={onClose}>
                去采购
              </NeonButton>
            </div>
          ) : (
            cart.map(item => {
              const product = getProductById(item.id);
              const IconComponent = product?.image;
              
              return (
                <div 
                  key={item.id} 
                  className="flex gap-4 bg-slate-800/30 p-3 rounded border border-white/5 relative group"
                >
                  {/* 商品图标 */}
                  <div className="w-16 h-16 bg-slate-900 rounded flex items-center justify-center shrink-0">
                    {IconComponent && <IconComponent className="w-8 h-8 text-slate-400" />}
                  </div>
                
                {/* 商品信息 */}
                <div className="flex-1">
                  <h4 className="font-bold text-slate-200 text-sm mb-1">{item.name}</h4>
                  <div className="text-pink-400 font-mono text-sm">¥{item.price}</div>
                  
                  {/* 数量控制 */}
                  <div className="flex items-center gap-3 mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center bg-slate-700 rounded hover:bg-cyan-500 hover:text-black transition-colors text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm font-mono w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center bg-slate-700 rounded hover:bg-cyan-500 hover:text-black transition-colors text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* 删除按钮 */}
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-3 right-3 text-slate-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              );
            })
          )}
        </div>

        {/* 底部结算 */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-slate-800/50">
            <div className="flex justify-between items-center mb-4 text-lg font-bold">
              <span className="text-slate-300">总计</span>
              <span className="text-cyan-400 font-mono">¥{cartTotal.toLocaleString()}</span>
            </div>
            <NeonButton variant="secondary" className="w-full py-3">
              确认结账 (Checkout)
            </NeonButton>
          </div>
        )}
      </div>
    </div>
  );
};
