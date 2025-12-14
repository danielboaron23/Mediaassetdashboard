import React from 'react';
import { ElementsBar } from './components/layout/ElementsBar';
import { CategorySidebar } from './components/layout/Sidebar';
import { AssetGrid } from './components/dashboard/AssetGrid';

export default function App() {
  return (
    <div className="flex h-screen bg-[#010101] text-[#F0F0F0] font-sans overflow-hidden">
      <ElementsBar />
      <CategorySidebar />
      <AssetGrid />
    </div>
  );
}
