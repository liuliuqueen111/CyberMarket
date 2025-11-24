// 背景装饰组件
import React from 'react';

export const BackgroundDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,20,30,0.9)_2px,transparent_2px),linear-gradient(90deg,rgba(18,20,30,0.9)_2px,transparent_2px)] bg-[size:40px_40px] opacity-20"></div>
    </div>
  );
};
