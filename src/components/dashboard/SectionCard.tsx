import React from 'react';
import { Upload, Plus } from 'lucide-react';
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
  onAssetClick?: (asset: Asset) => void;
}

export function SectionCard({ title, count, assets, viewMode, onAssetUpload, onAssetClick }: SectionCardProps) {
  const [filter, setFilter] = React.useState<'all' | 'essentials'>('all');
  const [isUploadOpen, setIsUploadOpen] = React.useState(false);

  return (
    <>
      <div className="w-full bg-[#181818] border border-[#333333] rounded-lg p-6 flex flex-col gap-6 mb-6">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#333333] pb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-[16px] font-semibold text-[#F0F0F0]">{title}</h2>
            <span className="text-[16px] font-semibold text-[#8E8E8E]">({count})</span>
          </div>
          
          <div className="flex items-center gap-2">
             <button 
               onClick={() => setIsUploadOpen(true)}
               className="h-8 w-8 flex items-center justify-center bg-[#333333] rounded-lg hover:bg-[#404040] transition-colors text-[#F0F0F0]"
             >
               <Upload className="w-5 h-5" />
             </button>
             <button className="h-8 px-4 flex items-center justify-center bg-[#333333] rounded-lg hover:bg-[#404040] transition-colors">
               <span className="text-[14px] font-bold text-[#F0F0F0]">View all</span>
             </button>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setFilter('all')}
            className={cn(
              "px-4 h-7 rounded-full text-[12px] font-bold transition-colors",
              filter === 'all' 
                ? "bg-[#282828] text-[#E5FF00]" 
                : "bg-[#282828] text-[#F0F0F0] font-normal hover:text-white"
            )}
          >
            All
          </button>
          <button
            onClick={() => setFilter('essentials')}
            className={cn(
              "px-4 h-7 rounded-full text-[12px] font-bold transition-colors",
              filter === 'essentials' 
                ? "bg-[#282828] text-[#E5FF00]" 
                : "bg-[#282828] text-[#F0F0F0] font-normal hover:text-white"
            )}
          >
            Essentials
          </button>
        </div>

        {/* Grid or List View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {assets.map((asset) => (
              <AssetCard key={asset.id} asset={asset} onClick={onAssetClick} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col w-full">
             {assets.map((asset) => (
               <AssetListRow key={asset.id} asset={asset} onClick={onAssetClick} />
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
