import React from 'react';
import { X, User, Bell, Monitor, Database, Shield, HelpCircle } from 'lucide-react';
import { cn } from '../ui/utils';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface SettingsPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

interface SettingItemProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

function SettingItem({ label, description, children }: SettingItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="flex-1">
        <Label className="text-sm font-semibold text-[#F0F0F0] cursor-pointer">
          {label}
        </Label>
        {description && (
          <p className="text-xs text-[#BABABA] mt-1 leading-snug">
            {description}
          </p>
        )}
      </div>
      <div className="flex-shrink-0">
        {children}
      </div>
    </div>
  );
}

interface SettingSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function SettingSection({ icon, title, children }: SettingSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-2">
        <div className="text-[#BABABA]">
          {icon}
        </div>
        <h3 className="text-base font-semibold tracking-tight text-[#F0F0F0]">
          {title}
        </h3>
      </div>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}

export function SettingsPanel({ isOpen = false, onClose, className }: SettingsPanelProps) {
  const [settings, setSettings] = React.useState({
    notifications: true,
    autoplay: false,
    highQuality: true,
    thumbnailPreviews: true,
    darkMode: true,
    autoSave: true,
    viewMode: 'grid',
    sortBy: 'newest',
    itemsPerPage: '24',
  });

  const updateSetting = (key: string, value: boolean | string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/80 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Settings Panel */}
      <div className={cn(
        "fixed right-0 top-0 h-full w-full max-w-[560px] z-50",
        "bg-[#010101] border-l border-[#333333]",
        "flex flex-col",
        "transform transition-transform duration-300 ease-out",
        className
      )}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#333333]">
          <h2 className="text-lg font-semibold tracking-tight text-[#F0F0F0]">
            Settings
          </h2>
          <button
            onClick={onClose}
            className="
              p-2 rounded-lg
              bg-transparent hover:bg-[#282828]
              text-[#BABABA] hover:text-[#F0F0F0]
              transition-all duration-150
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#E5FF00]
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#010101]
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex flex-col gap-8">

            {/* Account Section */}
            <SettingSection
              icon={<User className="h-4 w-4" />}
              title="Account"
            >
              <SettingItem
                label="Profile"
                description="Manage your account information and preferences"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="
                    bg-[#282828] hover:bg-[#333333]
                    text-[#F0F0F0]
                    transition-colors duration-150
                  "
                >
                  Edit Profile
                </Button>
              </SettingItem>
            </SettingSection>

            <Separator className="bg-[#333333]" />

            {/* Notifications Section */}
            <SettingSection
              icon={<Bell className="h-4 w-4" />}
              title="Notifications"
            >
              <SettingItem
                label="Enable notifications"
                description="Receive alerts for uploads, shares, and updates"
              >
                <Switch
                  checked={settings.notifications}
                  onCheckedChange={(checked) => updateSetting('notifications', checked)}
                  className="
                    data-[state=checked]:bg-[#E5FF00]
                    data-[state=unchecked]:bg-[#282828]
                    border-[#333333]
                  "
                />
              </SettingItem>

              <SettingItem
                label="Auto-save changes"
                description="Automatically save your work as you make changes"
              >
                <Switch
                  checked={settings.autoSave}
                  onCheckedChange={(checked) => updateSetting('autoSave', checked)}
                  className="
                    data-[state=checked]:bg-[#E5FF00]
                    data-[state=unchecked]:bg-[#282828]
                    border-[#333333]
                  "
                />
              </SettingItem>
            </SettingSection>

            <Separator className="bg-[#333333]" />

            {/* Display Section */}
            <SettingSection
              icon={<Monitor className="h-4 w-4" />}
              title="Display"
            >
              <SettingItem
                label="View mode"
                description="Choose how assets are displayed"
              >
                <Select
                  value={settings.viewMode}
                  onValueChange={(value) => updateSetting('viewMode', value)}
                >
                  <SelectTrigger className="
                    w-[140px] h-8
                    bg-[#282828] border-[#333333]
                    text-[#F0F0F0]
                    hover:bg-[#333333]
                    focus:border-[#E5FF00] focus:ring-1 focus:ring-[#E5FF00]
                    transition-colors duration-150
                  ">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#181818] border-[#333333]">
                    <SelectItem value="grid">Grid</SelectItem>
                    <SelectItem value="list">List</SelectItem>
                  </SelectContent>
                </Select>
              </SettingItem>

              <SettingItem
                label="Items per page"
                description="Number of assets to show per page"
              >
                <Select
                  value={settings.itemsPerPage}
                  onValueChange={(value) => updateSetting('itemsPerPage', value)}
                >
                  <SelectTrigger className="
                    w-[140px] h-8
                    bg-[#282828] border-[#333333]
                    text-[#F0F0F0]
                    hover:bg-[#333333]
                    focus:border-[#E5FF00] focus:ring-1 focus:ring-[#E5FF00]
                    transition-colors duration-150
                  ">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#181818] border-[#333333]">
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                    <SelectItem value="96">96</SelectItem>
                  </SelectContent>
                </Select>
              </SettingItem>

              <SettingItem
                label="Thumbnail previews"
                description="Show video previews on hover"
              >
                <Switch
                  checked={settings.thumbnailPreviews}
                  onCheckedChange={(checked) => updateSetting('thumbnailPreviews', checked)}
                  className="
                    data-[state=checked]:bg-[#E5FF00]
                    data-[state=unchecked]:bg-[#282828]
                    border-[#333333]
                  "
                />
              </SettingItem>
            </SettingSection>

            <Separator className="bg-[#333333]" />

            {/* Media Section */}
            <SettingSection
              icon={<Database className="h-4 w-4" />}
              title="Media"
            >
              <SettingItem
                label="Autoplay videos"
                description="Automatically play video previews when hovering"
              >
                <Switch
                  checked={settings.autoplay}
                  onCheckedChange={(checked) => updateSetting('autoplay', checked)}
                  className="
                    data-[state=checked]:bg-[#E5FF00]
                    data-[state=unchecked]:bg-[#282828]
                    border-[#333333]
                  "
                />
              </SettingItem>

              <SettingItem
                label="High quality thumbnails"
                description="Use higher resolution preview images"
              >
                <Switch
                  checked={settings.highQuality}
                  onCheckedChange={(checked) => updateSetting('highQuality', checked)}
                  className="
                    data-[state=checked]:bg-[#E5FF00]
                    data-[state=unchecked]:bg-[#282828]
                    border-[#333333]
                  "
                />
              </SettingItem>

              <SettingItem
                label="Default sort order"
                description="How assets are sorted by default"
              >
                <Select
                  value={settings.sortBy}
                  onValueChange={(value) => updateSetting('sortBy', value)}
                >
                  <SelectTrigger className="
                    w-[140px] h-8
                    bg-[#282828] border-[#333333]
                    text-[#F0F0F0]
                    hover:bg-[#333333]
                    focus:border-[#E5FF00] focus:ring-1 focus:ring-[#E5FF00]
                    transition-colors duration-150
                  ">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#181818] border-[#333333]">
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="size">File Size</SelectItem>
                  </SelectContent>
                </Select>
              </SettingItem>
            </SettingSection>

            <Separator className="bg-[#333333]" />

            {/* Privacy & Security */}
            <SettingSection
              icon={<Shield className="h-4 w-4" />}
              title="Privacy & Security"
            >
              <SettingItem
                label="Data & Privacy"
                description="Manage your data and privacy settings"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="
                    bg-[#282828] hover:bg-[#333333]
                    text-[#F0F0F0]
                    transition-colors duration-150
                  "
                >
                  Manage
                </Button>
              </SettingItem>
            </SettingSection>

            <Separator className="bg-[#333333]" />

            {/* Help Section */}
            <SettingSection
              icon={<HelpCircle className="h-4 w-4" />}
              title="Help & Support"
            >
              <SettingItem
                label="Documentation"
                description="View user guides and tutorials"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="
                    text-[#80B8FF] hover:text-[#A8CFFF]
                    hover:bg-[#282828]
                    transition-all duration-150
                  "
                >
                  View Docs
                </Button>
              </SettingItem>

              <SettingItem
                label="Contact Support"
                description="Get help from our support team"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="
                    text-[#80B8FF] hover:text-[#A8CFFF]
                    hover:bg-[#282828]
                    transition-all duration-150
                  "
                >
                  Contact
                </Button>
              </SettingItem>
            </SettingSection>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#333333] flex items-center justify-between">
          <div className="text-xs text-[#BABABA]">
            Version 1.0.0
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="
                text-[#BABABA] hover:text-[#F0F0F0]
                hover:bg-[#282828]
                transition-all duration-150
              "
            >
              Cancel
            </Button>
            <Button
              size="sm"
              className="
                bg-[#E5FF00] text-[#010101]
                hover:bg-[#f0ff33]
                active:bg-[#d9f300] active:scale-[0.98]
                font-bold
                transition-all duration-150
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#E5FF00]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[#010101]
              "
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
