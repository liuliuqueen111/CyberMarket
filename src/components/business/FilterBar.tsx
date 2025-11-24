// 筛选器组件
import React from 'react';
import { useStore } from '../../store/useStore';
import { CATEGORIES, MOODS } from '../../data/mockData';

export const FilterBar: React.FC = () => {
  const { filters, setActiveCategory, setActiveMood, setSortBy, resetFilters } = useStore();

  return (
    <div className="mb-8 space-y-6">
      {/* 头部控制栏 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            装备列表
          </h1>
          <p className="text-slate-400 text-sm">2077年最新战术与生活配件库存</p>
        </div>
        
        {/* 排序选择器 */}
        <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg border border-slate-700/50">
          <select 
            className="bg-transparent text-sm px-3 py-1 focus:outline-none text-slate-300 cursor-pointer"
            value={filters.sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="default">综合排序</option>
            <option value="priceAsc">价格：低到高</option>
            <option value="priceDesc">价格：高到低</option>
          </select>
        </div>
      </div>

      {/* 过滤器 */}
      <div className="space-y-3">
        {/* 分类 Filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs uppercase tracking-widest text-slate-500 py-1.5 mr-2 self-center">
            Category //
          </span>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all border ${
                filters.activeCategory === cat 
                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300' 
                  : 'bg-slate-800 border-transparent text-slate-400 hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 场景 Filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs uppercase tracking-widest text-slate-500 py-1.5 mr-2 self-center">
            Mood //
          </span>
          {MOODS.map(mood => (
            <button
              key={mood}
              onClick={() => setActiveMood(mood)}
              className={`px-3 py-1 rounded text-xs font-medium transition-all border border-dashed ${
                filters.activeMood === mood 
                  ? 'bg-pink-500/10 border-pink-500 text-pink-300' 
                  : 'bg-transparent border-slate-700 text-slate-500 hover:text-slate-300'
              }`}
            >
              #{mood}
            </button>
          ))}
          
          {/* 重置按钮 */}
          {(filters.activeCategory !== '全部' || filters.activeMood !== '全部' || filters.searchTerm) && (
            <button
              onClick={resetFilters}
              className="px-3 py-1 rounded text-xs font-medium bg-red-500/10 border border-red-500/50 text-red-400 hover:bg-red-500/20 transition-all ml-2"
            >
              重置筛选
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
