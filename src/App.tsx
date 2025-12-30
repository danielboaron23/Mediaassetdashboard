import React from 'react';
import { ElementsBar } from './components/layout/ElementsBar';
import { CategorySidebar } from './components/layout/Sidebar';
import { AssetGrid } from './components/dashboard/AssetGrid';
import { AssetEditView } from './components/dashboard/AssetEditView';
import { Asset } from './lib/data';

export default function App() {
  const [selectedAsset, setSelectedAsset] = React.useState<Asset | null>(null);

  const handleAssetClick = (asset: Asset) => {
    setSelectedAsset(asset);
  };

  const handleCloseEditView = () => {
    setSelectedAsset(null);
  };

  return (
    <div className="flex h-screen bg-[#010101] text-[#F0F0F0] font-sans overflow-hidden">
      <ElementsBar />
      <CategorySidebar />
      <AssetGrid onAssetClick={handleAssetClick} />
      
      {/* Asset Edit View Overlay */}
      {selectedAsset && (
        <AssetEditView
          asset={selectedAsset}
          onClose={handleCloseEditView}
        />
      )}
    </div>
  );
}
