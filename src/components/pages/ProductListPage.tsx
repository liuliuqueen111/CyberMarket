// 商品列表页组件
import React, { useMemo } from 'react';
import { Terminal } from 'lucide-react';
import { useStore } from '../../store/useStore';
import type { Product } from '../../types';
import { ProductCard } from '../business/ProductCard';
import { FilterBar } from '../business/FilterBar';
import { Paginator } from '../common/Paginator';

interface ProductListPageProps {
  onProductClick: (product: Product) => void;
}

const ITEMS_PER_PAGE = 12;

export const ProductListPage: React.FC<ProductListPageProps> = ({ onProductClick }) => {
  const { filters, setCurrentPage, getFilteredProducts } = useStore();
  
  // 获取过滤后的商品
  const filteredProducts = useMemo(() => getFilteredProducts(), [
    filters.activeCategory, 
    filters.activeMood, 
    filters.searchTerm, 
    filters.sortBy
  ]);

  // 分页逻辑
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (filters.currentPage - 1) * ITEMS_PER_PAGE, 
    filters.currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      {/* 筛选栏 */}
      <FilterBar />

      {/* 商品网格 */}
      {currentProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-500">
          <Terminal className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="mb-2">未找到匹配的装备数据...</p>
          <p className="text-sm text-slate-600">尝试调整筛选条件或搜索关键词</p>
        </div>
      )}

      {/* 分页器 */}
      <Paginator 
        currentPage={filters.currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
