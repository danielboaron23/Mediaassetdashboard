import React from 'react';
import { ChevronRight, Upload, Plus } from 'lucide-react';
import { AssetCard } from './AssetCard';
import { AssetListRow } from './AssetListRow';
import { Asset } from '../../lib/data';
import { cn } from '../../lib/utils';
import { UploadModal } from './UploadModal';

interface SectionCardProps {
  title: string;
  count: number;
  assets: Asset[];
  viewMode: 'grid' | 'list';
  onAssetUpload?: (asset: Asset) => void;
}

const ASPECT_FILTERS = ['All', '16:9', '9:16', '3:4', '4:5', '1:1'] as const;
type AspectFilter = (typeof ASPECT_FILTERS)[number];

export function SectionCard({ title, count, assets, viewMode, onAssetUpload }: SectionCardProps) {
  const [aspectFilter, setAspectFilter] = React.useState<AspectFilter>('All');
  const [isUploadOpen, setIsUploadOpen] = React.useState(false);

  const visibleAssets =
    aspectFilter === 'All'
      ? assets
      : assets.filter((asset) => asset.aspectRatios.includes(aspectFilter));

  return (
    <>
      <div className="w-full bg-[#181818] border border-[#333333] rounded-lg p-6 flex flex-col gap-6 mb-6">
        {/* Section Header */}
        <div className="relative flex items-start justify-between border-b border-[#333333] pb-6">
          {/* Left: chevron + title */}
          <div className="flex items-start gap-2 pt-1">
            <div className="h-6 w-6 flex items-center justify-center">
              <ChevronRight className="h-6 w-6 rotate-90 text-[#F0F0F0]" />
            </div>
            <h2 className="text-base font-semibold text-[#F0F0F0] leading-[1.4]">
              {title} <span className="text-[#8E8E8E]">({count})</span>
            </h2>
          </div>

          {/* Center: aspect ratio segmented group */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden rounded-lg">
            <div className="flex items-center gap-px">
              {ASPECT_FILTERS.map((label) => {
                const isSelected = aspectFilter === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setAspectFilter(label)}
                    className={cn(
                      "h-8 px-4 flex items-center justify-center transition-colors",
                      isSelected ? "bg-[#404040]" : "bg-[#282828] hover:bg-[#333333]"
                    )}
                    aria-pressed={isSelected}
                  >
                    <span className="text-sm font-bold text-[#F0F0F0] leading-[1.4]">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Upload Asset */}
          <button
            type="button"
            onClick={() => setIsUploadOpen(true)}
            className="h-8 bg-[#333333] rounded-lg hover:bg-[#404040] transition-colors text-[#F0F0F0] flex items-center gap-1 pl-2 pr-4"
          >
            <Upload className="h-4 w-4" />
            <span className="text-sm font-bold leading-[1.4]">Upload Asset</span>
          </button>
        </div>

        {/* Grid or List View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleAssets.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col w-full">
             {visibleAssets.map((asset) => (
               <AssetListRow key={asset.id} asset={asset} />
             ))}
          </div>
        )}

        {/* Show More */}
        <div className="flex justify-center pt-2">
          <button className="flex items-center gap-1 px-2 py-2 hover:bg-[#282828] rounded-lg transition-colors group">
            <Plus className="w-4 h-4 text-[#BABABA] group-hover:text-white" />
            <span className="text-[14px] font-bold text-[#BABABA] group-hover:text-white">Show more</span>
          </button>
        </div>
      </div>

      <UploadModal 
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUploadComplete={(asset) => {
          onAssetUpload?.(asset);
        }}
        categoryName={title}
      />
    </>
  );
}
