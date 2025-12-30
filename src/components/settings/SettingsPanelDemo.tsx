import React from 'react';
import { Settings } from 'lucide-react';
import { SettingsPanel } from './SettingsPanel';
import { Button } from '../ui/button';

/**
 * Demo component showing how to use the SettingsPanel
 *
 * Usage:
 * - Click the settings button to open the panel
 * - Panel slides in from the right with overlay
 * - Click outside or close button to dismiss
 */
export function SettingsPanelDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#010101] p-8">
      {/* Demo Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#F0F0F0]">
              Settings Panel Demo
            </h1>
            <p className="text-sm text-[#BABABA] mt-2">
              Click the settings button to open the panel
            </p>
          </div>

          {/* Settings Button */}
          <Button
            onClick={() => setIsOpen(true)}
            className="
              flex items-center gap-2
              bg-[#282828] hover:bg-[#333333]
              text-[#F0F0F0]
              active:bg-[#404040] active:scale-[0.98]
              transition-all duration-150
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#E5FF00]
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#010101]
            "
          >
            <Settings className="h-4 w-4" />
            Open Settings
          </Button>
        </div>

        {/* Example Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="
                bg-[#181818] border border-[#333333] rounded-lg p-6
                hover:bg-[#1f1f1f]
                transition-colors duration-300
              "
            >
              <div className="aspect-video bg-[#282828] rounded-lg mb-4" />
              <h3 className="text-sm font-semibold text-[#F0F0F0] mb-2">
                Asset {item}
              </h3>
              <p className="text-xs text-[#BABABA]">
                Example content card
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
