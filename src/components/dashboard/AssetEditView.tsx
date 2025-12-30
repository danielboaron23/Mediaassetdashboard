import React from 'react';
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  Maximize2,
  Pencil,
  Trash2,
  Globe,
  Info,
} from 'lucide-react';
import { Asset } from '../../lib/data';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { Toast } from '../ui/Toast';

interface AssetEditViewProps {
  asset: Asset;
  onClose: () => void;
  onSave?: (updatedAsset: Asset) => void;
}

// Available categories for the checkbox list
const AVAILABLE_CATEGORIES = [
  'Intros',
  'Midtros',
  'Outros',
  'Thumbnails',
  'Overlay Graphics',
];

// All possible aspect ratios
const ALL_ASPECT_RATIOS = [
  { value: '16:9', label: '16:9 (Landscape)' },
  { value: '9:16', label: '9:16 (Portrait)' },
  { value: '1:1', label: '1:1 (Square)' },
  { value: '4:5', label: '4:5 (Portrait)' },
  { value: '4:3', label: '4:3 (Landscape)' },
  { value: '21:9', label: '21:9 (Cinematic)' },
];

// Get display name without extension
function getAssetDisplayName(title: string): string {
  return title.replace(/\.(png|jpg|jpeg|mp4|mov|gif|webp)$/i, '');
}

export function AssetEditView({ asset, onClose, onSave }: AssetEditViewProps) {
  const isTemplate = asset.origin === 'template';

  // Local edit state
  const [name, setName] = React.useState(getAssetDisplayName(asset.title));
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    asset.categories || []
  );
  const [aspectRatios, setAspectRatios] = React.useState<string[]>(
    asset.aspectRatios
  );
  const [selectedVariant, setSelectedVariant] = React.useState<string>(
    asset.aspectRatios[0] || '16:9'
  );
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showSaveToast, setShowSaveToast] = React.useState(false);

  // Track initial values for dirty check
  const initialName = React.useRef(getAssetDisplayName(asset.title));
  const initialCategories = React.useRef(asset.categories || []);

  // Compute dirty state
  const isDirty =
    name !== initialName.current ||
    JSON.stringify(selectedCategories.sort()) !==
      JSON.stringify(initialCategories.current.sort()) ||
    aspectRatios.length !== asset.aspectRatios.length;

  // Handle category toggle
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Handle delete variant
  const handleDeleteVariant = (ratio: string) => {
    if (aspectRatios.length <= 1) return;
    setAspectRatios((prev) => prev.filter((r) => r !== ratio));
    if (selectedVariant === ratio) {
      setSelectedVariant(aspectRatios.find((r) => r !== ratio) || '16:9');
    }
  };

  // Handle add variant
  const handleAddVariant = (ratio: string) => {
    if (!aspectRatios.includes(ratio)) {
      setAspectRatios((prev) => [...prev, ratio]);
    }
  };

  // Handle save
  const handleSave = () => {
    const updatedAsset: Asset = {
      ...asset,
      title: name,
      categories: selectedCategories,
      aspectRatios: aspectRatios,
    };
    onSave?.(updatedAsset);
    setShowSaveToast(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  // Get aspect ratio dimensions for thumbnail preview
  const getAspectRatioDimensions = (ratio: string) => {
    switch (ratio) {
      case '16:9':
        return { width: 80, height: 45 };
      case '9:16':
        return { width: 28, height: 50 };
      case '1:1':
        return { width: 50, height: 50 };
      case '4:5':
        return { width: 40, height: 50 };
      case '4:3':
        return { width: 67, height: 50 };
      case '21:9':
        return { width: 80, height: 34 };
      default:
        return { width: 80, height: 45 };
    }
  };

  return (
    <TooltipProvider>
      <div className="fixed inset-0 z-50 bg-[#010101] flex flex-col">
        {/* Top Navigation Bar */}
        <header className="h-16 flex-shrink-0 border-b border-[#333333] flex items-center justify-between px-6">
          {/* Left: Back button */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[#BABABA] hover:text-[#F0F0F0] transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="text-sm">Back to Library</span>
          </button>

          {/* Center: Asset name with dirty indicator */}
          <div className="flex items-center gap-2">
            {isTemplate && (
              <Badge variant="secondary" className="text-xs">
                Template
              </Badge>
            )}
            <h1 className="text-lg font-semibold text-[#F0F0F0]">
              {name}
              {asset.mediaFormat === 'Video' ? '.mp4' : '.png'}
            </h1>
            {isDirty && !isTemplate && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5FF00]" />
            )}
          </div>

          {/* Right: Action button */}
          {isTemplate ? (
            <Button className="bg-[#E5FF00] text-[#010101] hover:bg-[#D4ED00] font-bold">
              Use Template
            </Button>
          ) : (
            <Button
              disabled={!isDirty}
              onClick={handleSave}
              className={cn(
                'font-bold transition-colors',
                isDirty
                  ? 'bg-[#E5FF00] text-[#010101] hover:bg-[#D4ED00]'
                  : 'bg-[#404040] text-[#5D5D5D] cursor-not-allowed'
              )}
            >
              Save Changes
            </Button>
          )}
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Column - Preview Section (60%) */}
          <div className="w-[60%] p-6 overflow-auto">
            <div className="bg-[#181818] border border-[#333333] rounded-xl p-6">
              {/* Video Preview Area */}
              <div className="relative aspect-video bg-[#010101] rounded-lg overflow-hidden mb-4">
                <img
                  src={asset.thumbnail}
                  alt={asset.title}
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-white" />
                    ) : (
                      <Play className="h-8 w-8 text-white ml-1" />
                    )}
                  </div>
                </button>
              </div>

              {/* Progress bar */}
              <div className="mb-2">
                <div className="h-2 bg-[#333333] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#E5FF00] rounded-full"
                    style={{ width: '0%' }}
                  />
                </div>
              </div>

              {/* Time display */}
              <div className="flex justify-end mb-4">
                <span className="text-xs text-[#BABABA]">
                  0:00 / {asset.duration}
                </span>
              </div>

              {/* Video Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 flex items-center justify-center bg-[#282828] rounded-lg hover:bg-[#333333] transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4 text-[#F0F0F0]" />
                    ) : (
                      <Play className="h-4 w-4 text-[#F0F0F0]" />
                    )}
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center bg-[#282828] rounded-lg hover:bg-[#333333] transition-colors">
                    <Volume2 className="h-4 w-4 text-[#F0F0F0]" />
                  </button>
                </div>
                <button className="w-8 h-8 flex items-center justify-center bg-[#282828] rounded-lg hover:bg-[#333333] transition-colors">
                  <Maximize2 className="h-4 w-4 text-[#F0F0F0]" />
                </button>
              </div>

              {/* Aspect Ratio Selector */}
              <div>
                <label className="text-xs font-medium text-[#BABABA] block mb-3">
                  Preview Variant
                </label>
                <div className="flex items-end gap-4">
                  {aspectRatios.map((ratio) => {
                    const dims = getAspectRatioDimensions(ratio);
                    const isSelected = selectedVariant === ratio;
                    return (
                      <button
                        key={ratio}
                        onClick={() => setSelectedVariant(ratio)}
                        className="flex flex-col items-center gap-2"
                      >
                        <div
                          className={cn(
                            'rounded-lg overflow-hidden border-2 transition-colors',
                            isSelected
                              ? 'border-[#E5FF00]'
                              : 'border-transparent hover:border-[#404040]'
                          )}
                          style={{ width: dims.width, height: dims.height }}
                        >
                          <img
                            src={asset.thumbnail}
                            alt={ratio}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span
                          className={cn(
                            'text-[10px] font-bold',
                            isSelected ? 'text-[#E5FF00]' : 'text-[#BABABA]'
                          )}
                        >
                          {ratio}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Edit/Info Panel (40%) */}
          <div className="w-[40%] p-6 overflow-auto">
            <div className="bg-[#181818] border border-[#333333] rounded-xl p-6">
              {isTemplate ? (
                // Template View (Read-only)
                <TemplateInfoPanel asset={asset} />
              ) : (
                // My Upload View (Editable)
                <EditPanel
                  name={name}
                  setName={setName}
                  selectedCategories={selectedCategories}
                  onCategoryToggle={handleCategoryToggle}
                  aspectRatios={aspectRatios}
                  onDeleteVariant={handleDeleteVariant}
                  onAddVariant={handleAddVariant}
                  asset={asset}
                />
              )}
            </div>
          </div>
        </div>

        {/* Success Toast */}
        <Toast
          show={showSaveToast}
          message="Changes saved successfully"
          onClose={() => setShowSaveToast(false)}
        />
      </div>
    </TooltipProvider>
  );
}

// Template Info Panel (Read-only)
interface TemplateInfoPanelProps {
  asset: Asset;
}

function TemplateInfoPanel({ asset }: TemplateInfoPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Asset Name */}
      <div>
        <label className="text-xs font-medium text-[#BABABA] block mb-2">
          Asset Name
        </label>
        <p className="text-base font-semibold text-[#F0F0F0]">
          {getAssetDisplayName(asset.title)}
        </p>
      </div>

      {/* Categories */}
      <div>
        <label className="text-xs font-medium text-[#BABABA] block mb-2">
          Categories
        </label>
        <div className="flex flex-wrap gap-2">
          {asset.categories?.map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Available Ratios */}
      <div>
        <label className="text-xs font-medium text-[#BABABA] block mb-2">
          Available Ratios
        </label>
        <div className="flex flex-wrap gap-2">
          {asset.aspectRatios.map((ratio) => (
            <Badge key={ratio} variant="secondary" className="text-xs">
              {ratio}
            </Badge>
          ))}
        </div>
      </div>

      {/* Template Info */}
      <div className="border-t border-[#333333] pt-6">
        <div className="flex items-start gap-2 text-xs text-[#5D5D5D]">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <p>This is a shared template</p>
            <p>Created by: {asset.createdBy || 'WSC Sport'}</p>
            <p>Added: {asset.date}</p>
            <p className="mt-2">Templates cannot be edited</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Edit Panel (My Upload)
interface EditPanelProps {
  name: string;
  setName: (name: string) => void;
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  aspectRatios: string[];
  onDeleteVariant: (ratio: string) => void;
  onAddVariant: (ratio: string) => void;
  asset: Asset;
}

function EditPanel({
  name,
  setName,
  selectedCategories,
  onCategoryToggle,
  aspectRatios,
  onDeleteVariant,
  onAddVariant,
  asset,
}: EditPanelProps) {
  const availableToAdd = ALL_ASPECT_RATIOS.filter(
    (r) => !aspectRatios.includes(r.value)
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Asset Name */}
      <div>
        <label className="text-xs font-medium text-[#BABABA] block mb-2">
          Asset Name
        </label>
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-11 px-3 pr-10 bg-[#282828] border border-[#404040] rounded-lg text-sm text-[#F0F0F0] focus:border-[#E5FF00] focus:ring-1 focus:ring-[#E5FF00] outline-none transition-colors"
          />
          <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#BABABA]" />
        </div>
      </div>

      {/* Categories */}
      <div>
        <label className="text-xs font-medium text-[#BABABA] block mb-2">
          Categories
        </label>
        <div className="flex flex-col gap-2">
          {AVAILABLE_CATEGORIES.map((category) => {
            const isChecked = selectedCategories.includes(category);
            return (
              <label
                key={category}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div
                  className={cn(
                    'w-[18px] h-[18px] rounded flex items-center justify-center border transition-colors',
                    isChecked
                      ? 'bg-[#E5FF00] border-[#E5FF00]'
                      : 'bg-[#282828] border-[#404040] group-hover:border-[#5D5D5D]'
                  )}
                  onClick={() => onCategoryToggle(category)}
                >
                  {isChecked && (
                    <svg
                      className="w-3 h-3 text-[#010101]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-[#F0F0F0]">{category}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Aspect Ratios */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-medium text-[#BABABA]">
            Aspect Ratios
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                Add Variant
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[200px] bg-[#282828] border-[#404040]"
            >
              {ALL_ASPECT_RATIOS.map((ratio) => {
                const isDisabled = aspectRatios.includes(ratio.value);
                return (
                  <DropdownMenuItem
                    key={ratio.value}
                    disabled={isDisabled}
                    onClick={() => onAddVariant(ratio.value)}
                    className={cn(
                      'text-sm',
                      isDisabled ? 'text-[#5D5D5D]' : 'text-[#F0F0F0]'
                    )}
                  >
                    {ratio.label}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-col gap-2">
          {aspectRatios.map((ratio) => (
            <div
              key={ratio}
              className="flex items-center justify-between h-11 px-3 bg-[#282828] rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-xs font-medium">
                  {ratio}
                </Badge>
                <span className="text-sm text-[#F0F0F0]">
                  {getAssetDisplayName(asset.title)}_{ratio.replace(':', 'x')}
                  .mp4
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#5D5D5D]">{asset.fileSize}</span>
                {aspectRatios.length > 1 ? (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="p-1 hover:bg-[#333333] rounded transition-colors group">
                        <Trash2 className="h-4 w-4 text-[#BABABA] group-hover:text-[#DE4A4A]" />
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-[#181818] border-[#333333]">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-[#F0F0F0]">
                          Delete this variant?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-[#BABABA]">
                          This will remove the {ratio} variant from this asset.
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="bg-[#282828] text-[#F0F0F0] border-[#404040] hover:bg-[#333333]">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => onDeleteVariant(ratio)}
                          className="bg-[#DE4A4A] text-white hover:bg-[#C43E3E]"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        disabled
                        className="p-1 opacity-50 cursor-not-allowed"
                      >
                        <Trash2 className="h-4 w-4 text-[#5D5D5D]" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#282828] text-[#F0F0F0] border-[#404040]">
                      <p>Cannot delete last remaining variant</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visibility Settings */}
      <div>
        <label className="text-xs font-medium text-[#BABABA] block mb-2">
          Visibility
        </label>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-[#F0F0F0]" />
            <span className="text-sm text-[#F0F0F0]">All Users</span>
          </div>
          <button className="text-sm font-bold text-[#80B8FF] underline hover:text-[#A8CFFF] transition-colors">
            Edit Rules
          </button>
        </div>
      </div>

      {/* Asset Info */}
      <div className="border-t border-[#333333] pt-6">
        <div className="flex flex-col gap-1 text-xs text-[#5D5D5D]">
          <p>Uploaded: {asset.date}</p>
          <p>File size: {asset.fileSize} total</p>
          {asset.lastModified && <p>Last modified: {asset.lastModified}</p>}
        </div>
      </div>
    </div>
  );
}

