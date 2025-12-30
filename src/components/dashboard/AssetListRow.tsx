import React from 'react';
import { Star, MoreVertical } from 'lucide-react';
import { Asset } from '../../lib/data';
import { cn } from '../../lib/utils';

interface AssetListRowProps {
  asset: Asset;
  onClick?: (asset: Asset) => void;
}

export function AssetListRow({ asset, onClick }: AssetListRowProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent click when clicking action buttons
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    onClick?.(asset);
  };

  return (
    <div 
      className="flex items-center gap-4 py-2 w-full border-b border-[#333333] hover:bg-[#181818]/50 transition-colors group px-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Thumbnail */}
      <div className="relative w-[70px] h-[40px] shrink-0 rounded-[2px] overflow-hidden border border-[#333333] bg-[#181818]">
        <img 
          src={asset.thumbnail} 
          alt={asset.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Metadata Container - Using flex with large gaps as per Figma */}
      <div className="flex-1 flex items-center gap-[60px] xl:gap-[100px] 2xl:gap-[160px] min-w-0">
        {/* Title */}
        <div className="w-[140px] shrink-0">
          <p className="text-[14px] text-[#F0F0F0] truncate" title={asset.title}>{asset.title}</p>
        </div>

        {/* File Size */}
        <div className="w-[53px] shrink-0 hidden md:block">
          <p className="text-[14px] text-[#F0F0F0]">{asset.fileSize}</p>
        </div>

        {/* Format */}
        <div className="w-[62px] shrink-0 hidden lg:block">
          <p className="text-[14px] text-[#F0F0F0]">{asset.mediaFormat}</p>
        </div>

        {/* Date */}
        <div className="w-[70px] shrink-0 hidden xl:block">
          <p className="text-[14px] text-[#F0F0F0]">{asset.date}</p>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-[6px]">
          {asset.aspectRatios.map((ratio) => (
            <div 
              key={ratio}
              className="px-[9px] py-[3px] bg-[#282828] rounded-[8px] h-[22px] flex items-center justify-center border border-transparent"
            >
              <span className="text-[12px] font-medium text-white leading-none">{ratio}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 shrink-0 ml-auto">
        {/* Favorite */}
        <button className="w-[17px] h-[16px] flex items-center justify-center">
             <Star 
               className={cn(
                 "w-4 h-4 transition-colors", 
                 asset.isFavorite ? "fill-[#E5FF00] text-[#E5FF00]" : "text-[#F0F0F0] hover:text-[#E5FF00]"
               )} 
               strokeWidth={2}
             />
        </button>

        {/* Menu */}
        <button className="w-6 h-6 flex items-center justify-center text-[#F0F0F0] hover:bg-[#333333] rounded-full transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
