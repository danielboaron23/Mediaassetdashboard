import React from 'react';
import { Star, Play } from 'lucide-react';
import { Asset } from '../../lib/data';
import { cn } from '../../lib/utils';

interface AssetCardProps {
  asset: Asset;
  onClick?: (asset: Asset) => void;
}

export function AssetCard({ asset, onClick }: AssetCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent click when clicking the favorite button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    onClick?.(asset);
  };

  return (
    <div 
      className="flex flex-col gap-2 w-full max-w-[350px] group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#333333] bg-[#181818]">
        <img 
          src={asset.thumbnail} 
          alt={asset.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-300 ease-out",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        
        {/* Favorite Button */}
        <button 
          className={cn(
            "absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center transition-colors",
            asset.isFavorite 
              ? "bg-[#E5FF00] text-black" 
              : "bg-black/50 text-white hover:bg-black/70"
          )}
        >
          <Star className={cn("w-4 h-4", asset.isFavorite ? "fill-black" : "")} />
        </button>

        {/* Duration Label */}
        <div className="absolute bottom-2 right-2 bg-[#282828] px-1.5 py-1 rounded-full flex items-center gap-1">
          <span className="text-[10px] font-bold text-[#F0F0F0] leading-none">{asset.duration}</span>
        </div>
        
        {/* Overlay on hover (optional, but nice) */}
        <div className={cn(
          "absolute inset-0 bg-black/10 transition-opacity duration-300 pointer-events-none",
          isHovered ? "opacity-100" : "opacity-0"
        )} />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[14px] font-normal text-[#F0F0F0] truncate leading-snug">
          {asset.title}
        </h3>
        
        {/* Badges */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {asset.aspectRatios.map((ratio) => (
            <div 
              key={ratio}
              className="px-2.5 py-1 bg-[#282828] rounded-md border border-transparent"
            >
              <span className="text-[12px] font-medium text-white block leading-none">{ratio}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
