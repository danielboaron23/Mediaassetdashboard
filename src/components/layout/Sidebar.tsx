import React from 'react';
import { categoryItems } from '../../lib/data';
import { cn } from '../../lib/utils';

export function CategorySidebar() {
  const [selectedId, setSelectedId] = React.useState('all');

  return (
    <div className="w-[271px] h-full bg-[#010101] border-r border-[#333333] flex flex-col pt-4 pb-4 shrink-0">
      <h2 className="px-4 mb-4 text-[16px] font-semibold text-white tracking-[-0.3px]">
        Categories
      </h2>

      <div className="flex flex-col gap-1 px-4">
        {categoryItems.map((item) => {
          const isSelected = selectedId === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={cn(
                "group flex items-center justify-between w-full h-10 px-3 rounded-[10px] transition-all",
                isSelected 
                  ? "bg-[#282828]" 
                  : "bg-transparent hover:bg-[#181818]"
              )}
            >
              <div className="flex items-center gap-2">
                <item.icon 
                  className={cn(
                    "w-4 h-4",
                    isSelected ? "text-[#E5FF00]" : "text-[#F0F0F0] group-hover:text-white"
                  )} 
                />
                <span 
                  className={cn(
                    "text-[16px] font-normal tracking-[-0.3px]",
                    isSelected ? "text-[#E5FF00]" : "text-[#F0F0F0] group-hover:text-white"
                  )}
                >
                  {item.label}
                </span>
              </div>

              {item.count !== undefined && (
                <div 
                  className={cn(
                    "h-5 px-2 rounded-full flex items-center justify-center text-[12px] font-normal leading-none min-w-[24px]",
                    isSelected 
                      ? "bg-[#5D5D5D] text-[#E5FF00]" 
                      : "bg-[#282828] text-[#F0F0F0]"
                  )}
                >
                  {item.count}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
