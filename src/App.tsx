import { useState } from 'react';
import type { Product } from './types';
import { BackgroundDecoration } from './components/common/BackgroundDecoration';
import { Navbar } from './components/common/Navbar';
import { CartDrawer } from './components/business/CartDrawer';
import { ProductListPage } from './components/pages/ProductListPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';

type ViewType = 'list' | 'detail';

function App() {
  const [view, setView] = useState<ViewType>('list');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setView('list');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* 背景装饰 */}
      <BackgroundDecoration />

      {/* 导航栏 */}
      <Navbar 
        onCartOpen={() => setIsCartOpen(true)}
        onLogoClick={handleBackToList}
      />

      {/* 主内容区 */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {view === 'list' && (
          <ProductListPage onProductClick={handleProductClick} />
        )}

        {view === 'detail' && selectedProduct && (
          <ProductDetailPage 
            product={selectedProduct}
            onBack={handleBackToList}
          />
        )}
      </main>

      {/* 购物车抽屉 */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}

export default App;
