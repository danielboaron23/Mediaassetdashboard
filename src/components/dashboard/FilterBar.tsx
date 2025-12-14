import React from 'react';
import { Search, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FilterBarProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  onSearchChange?: (query: string) => void;
}

export function FilterBar({ viewMode, setViewMode, onSearchChange }: FilterBarProps) {
  return (
    <div className="flex items-center justify-between w-full mb-6">
      {/* Search and Sort Group */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative w-[288px] h-8">
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-[#BABABA]" />
          </div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="w-full h-full bg-[#282828] border border-[#333333] rounded-lg pl-8 pr-3 text-[14px] text-[#F0F0F0] placeholder-[#BABABA] focus:outline-none focus:border-[#E5FF00] transition-colors"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative h-8">
           <button className="h-full bg-[#282828] border border-[#333333] rounded-lg px-3 flex items-center gap-2 text-[14px] text-[#BABABA] hover:bg-[#333333] transition-colors min-w-[190px] justify-between">
             <span>Sort: Recently Added</span>
             <ChevronDown className="w-4 h-4 text-[#F0F0F0]" />
           </button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex items-center bg-transparent rounded-lg border border-transparent overflow-hidden h-8">
        <button
          onClick={() => setViewMode('grid')}
          className={cn(
            "h-8 w-10 flex items-center justify-center transition-colors rounded-l-lg",
            viewMode === 'grid' 
              ? "bg-[#282828] text-[#F0F0F0]" 
              : "bg-transparent text-[#BABABA] hover:bg-[#282828]/50"
          )}
        >
          <LayoutGrid className="w-5 h-5" />
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={cn(
            "h-8 w-10 flex items-center justify-center transition-colors rounded-r-lg border-l border-[#333333]",
            viewMode === 'list' 
              ? "bg-[#282828] text-[#F0F0F0]" 
              : "bg-transparent text-[#BABABA] hover:bg-[#282828]/50"
          )}
        >
          <List className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
