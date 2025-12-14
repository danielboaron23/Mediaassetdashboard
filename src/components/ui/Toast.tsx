import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Toast({ show, message, onClose, duration = 4000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(show);
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
      // Small delay to allow enter animation
      requestAnimationFrame(() => setIsVisible(true));
      
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Wait for exit animation to finish before removing from DOM
        setTimeout(onClose, 300);
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!shouldRender) return null;

  return (
    <div 
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-[12px] px-[20px] py-[16px]",
        "bg-[#1A3D1A] border border-[#2D5A2D] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.3)]",
        "transition-all duration-300 ease-out transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
      )}
    >
      <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-transparent">
        <Check className="w-[20px] h-[20px] text-[#4ADE80]" />
      </div>
      <span className="text-[14px] font-medium text-[#F0F0F0] whitespace-nowrap">{message}</span>
    </div>
  );
}
