import React from 'react';
import { Settings } from 'lucide-react';
import { categoryItems } from '../../lib/data';
import { cn } from '../../lib/utils';
import { SettingsPanel } from '../settings/SettingsPanel';

export function CategorySidebar() {
  const [selectedId, setSelectedId] = React.useState('all');
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  return (
    <>
      <div className="w-[271px] h-full bg-[#010101] border-r border-[#333333] flex flex-col pt-4 pb-4 shrink-0">
        <h2 className="px-4 mb-4 text-[16px] font-semibold text-white tracking-[-0.3px]">
          Categories
        </h2>

        <div className="flex flex-col gap-1 px-4 flex-1">
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

        {/* Settings Button at Bottom */}
        <div className="px-4 pt-4 mt-auto border-t border-[#333333]">
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="
              group flex items-center gap-2 w-full h-10 px-3 rounded-[10px]
              bg-transparent hover:bg-[#181818]
              transition-all duration-150
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#E5FF00]
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#010101]
            "
          >
            <Settings className="w-4 h-4 text-[#F0F0F0] group-hover:text-white transition-colors" />
            <span className="text-[16px] font-normal tracking-[-0.3px] text-[#F0F0F0] group-hover:text-white transition-colors">
              Settings
            </span>
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}
