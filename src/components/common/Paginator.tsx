// 分页器组件
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-12 gap-2">
      <button 
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft />
      </button>
      
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`w-8 h-8 rounded flex items-center justify-center font-mono text-sm transition-all ${
            currentPage === i + 1 
              ? 'bg-cyan-600 text-white shadow-[0_0_10px_rgba(34,211,238,0.5)]' 
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          {i + 1}
        </button>
      ))}
      
      <button 
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
