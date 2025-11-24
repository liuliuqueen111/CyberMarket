// 霓虹按钮组件 - 赛博朋克风格
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false 
}) => {
  const baseStyle = "px-4 py-2 rounded font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]",
    secondary: "bg-pink-500/20 text-pink-400 border border-pink-500/50 hover:bg-pink-500/40 hover:shadow-[0_0_15px_rgba(244,114,182,0.5)]",
    danger: "bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/40",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/10"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed grayscale' : ''} ${className}`}
    >
      {children}
    </button>
  );
};
