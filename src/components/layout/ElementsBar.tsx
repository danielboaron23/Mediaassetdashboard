import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { mainNavItems } from '../../lib/data';
import { cn } from '../../lib/utils';

export function ElementsBar() {
  const [selectedId, setSelectedId] = React.useState('brand');

  return (
    <div className="w-[80px] h-full bg-[#010101] border-r border-[#333333] flex flex-col items-center p-[8px] z-20 shrink-0">
      <div className="flex flex-col items-center gap-[4px] w-full">
        {/* Collapse Button */}
        <div className="h-[56px] w-full flex items-center justify-center shrink-0">
          <button className="w-6 h-6 rounded-full bg-[#282828] flex items-center justify-center text-white hover:bg-[#333333] transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Nav Items */}
        {mainNavItems.map((item, index) => {
          const isSelected = selectedId === item.id;
          
          return (
            <React.Fragment key={item.id}>
              <button
                onClick={() => setSelectedId(item.id)}
                className={cn(
                  "flex flex-col items-center justify-center w-[64px] py-[8px] px-[9px] rounded-[8px] gap-[2px] transition-all shrink-0",
                  isSelected 
                    ? "bg-[#333333] text-white" 
                    : "text-[#BABABA] hover:bg-[#181818] hover:text-[#F0F0F0]"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-[11px] font-normal leading-[1.4] text-center whitespace-nowrap">{item.label}</span>
              </button>
              
              {/* Divider after Media (0) and Text (3) */}
              {(index === 0 || index === 3) && (
                 <div className="h-[17px] w-[54px] flex items-center justify-center shrink-0">
                   <div className="h-px w-full bg-[#333333]" />
                 </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
