import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

interface ToastProps {
  isVisible: boolean;
  message?: string;
  onClose?: () => void;
}

export function Toast({ isVisible, message = "Asset uploaded successfully", onClose }: ToastProps) {
  React.useEffect(() => {
    if (isVisible && onClose) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 flex items-center gap-3 bg-[#1A3D1A] border border-[#2D5A2D] rounded-[12px] px-5 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.3)] z-50 min-w-[320px]"
        >
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-transparent">
            <Check className="w-5 h-5 text-[#4ADE80]" strokeWidth={3} />
          </div>
          <span className="text-[14px] font-medium text-[#F0F0F0]">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
