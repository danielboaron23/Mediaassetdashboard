import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, File, Film, Image as ImageIcon, Check, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Asset } from '../../lib/data';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadComplete: (newAsset: Asset) => void;
  categoryName?: string;
}

type UploadState = 'empty' | 'selected' | 'uploading' | 'processing';

export function UploadModal({ isOpen, onClose, onUploadComplete, categoryName }: UploadModalProps) {
  const [uploadState, setUploadState] = useState<UploadState>('empty');
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Form state
  const [fileName, setFileName] = useState('');
  const [category, setCategory] = useState(categoryName || '');
  const [tags, setTags] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setUploadState('empty');
        setFile(null);
        setFileName('');
        setProgress(0);
      }, 300);
    } else {
      setCategory(categoryName || '');
    }
  }, [isOpen, categoryName]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    setFileName(selectedFile.name);
    setUploadState('selected');
  };

  const handleUpload = () => {
    setUploadState('uploading');
    
    // Simulate upload progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      if (currentProgress >= 65) {
        clearInterval(interval);
        // If it's a video, go to processing, else finish
        if (file?.type.startsWith('video/')) {
           setUploadState('processing');
           setProgress(100);
           
           // Simulate processing
           setTimeout(() => {
             finishUpload();
           }, 2000);
        } else {
           setProgress(100);
           finishUpload();
        }
      } else {
        setProgress(currentProgress);
      }
    }, 100);
  };

  const finishUpload = () => {
    if (!file) return;

    // Create mock asset
    const newAsset: Asset = {
      id: Math.random().toString(36).substr(2, 9),
      title: fileName,
      thumbnail: URL.createObjectURL(file), // Use blob for preview
      duration: file.type.startsWith('video/') ? '0:15' : '0:00',
      isFavorite: false,
      aspectRatios: ['16:9'], // Mock
      type: (category.toLowerCase().includes('intro') ? 'intro' : 
             category.toLowerCase().includes('midtro') ? 'midtro' : 
             category.toLowerCase().includes('outro') ? 'outro' : 
             category.toLowerCase().includes('thumb') ? 'thumbnail' : 'overlay') as any,
      fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      date: new Date().toLocaleDateString(),
      mediaFormat: file.type.startsWith('video/') ? 'Video' : 'Image'
    };

    onUploadComplete(newAsset);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[#010101] opacity-60 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-[560px] h-[480px] bg-[#181818] border border-[#333333] rounded-[16px] flex flex-col shadow-2xl z-10 overflow-hidden">
        
        {/* Header */}
        <div className="h-[64px] border-b border-[#333333] flex items-center justify-between px-6 shrink-0">
          <h2 className="text-[18px] font-semibold text-[#F0F0F0]">Upload Asset</h2>
          <button 
            onClick={onClose}
            className="p-1 text-[#BABABA] hover:text-[#F0F0F0] transition-colors rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          
          {uploadState === 'empty' && (
            <div 
              className={cn(
                "w-[512px] h-[280px] bg-[#282828] border-[2px] border-dashed rounded-[12px] flex flex-col items-center justify-center transition-colors",
                dragActive ? "border-[#E5FF00] bg-[#E5FF00]/5" : "border-[#404040]"
              )}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className={cn("w-[48px] h-[48px] mb-4", dragActive ? "text-[#E5FF00]" : "text-[#5D5D5D]")} />
              <p className="text-[16px] font-semibold text-[#F0F0F0] mb-2">Drag and drop your file here</p>
              <p className="text-[14px] text-[#BABABA] mb-4">or</p>
              
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="h-[40px] px-6 bg-[#333333] hover:bg-[#404040] rounded-[8px] text-[14px] font-bold text-[#F0F0F0] transition-colors mb-4"
              >
                Browse Files
              </button>
              <input 
                ref={fileInputRef}
                type="file" 
                className="hidden" 
                accept=".mp4,.mov,.png,.jpg"
                onChange={handleChange}
              />
              
              <p className="text-[12px] text-[#5D5D5D]">Supports MP4, MOV, PNG, JPG up to 500MB</p>
            </div>
          )}

          {(uploadState === 'selected' || uploadState === 'uploading' || uploadState === 'processing') && (
            <div className="space-y-6">
              {/* Preview Card */}
              <div className="w-full bg-[#282828] rounded-[12px] p-4 flex gap-4">
                {/* Thumbnail */}
                <div className="relative w-[160px] h-[120px] rounded-[8px] overflow-hidden bg-black shrink-0">
                  {file && (
                    <>
                      {file.type.startsWith('video/') ? (
                         <video 
                           src={URL.createObjectURL(file)} 
                           className={cn("w-full h-full object-cover", (uploadState === 'uploading' || uploadState === 'processing') && "opacity-70")}
                         />
                      ) : (
                         <img 
                           src={URL.createObjectURL(file)} 
                           className={cn("w-full h-full object-cover", (uploadState === 'uploading' || uploadState === 'processing') && "opacity-70")}
                           alt="Preview" 
                         />
                      )}
                    </>
                  )}
                  
                  {/* Play Icon Overlay for Video */}
                  {file?.type.startsWith('video/') && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[40px] h-[40px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  )}

                  {/* Duration Badge */}
                  {file?.type.startsWith('video/') && (
                    <div className="absolute bottom-2 right-2 px-[6px] py-[4px] bg-[#282828] rounded-[24px] h-[16px] flex items-center justify-center">
                       <span className="text-[10px] font-bold text-[#F0F0F0] leading-none">0:15</span>
                    </div>
                  )}
                </div>

                {/* File Info */}
                <div className="flex-1 min-w-0">
                  <div className="mb-2">
                    <input 
                      type="text" 
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      disabled={uploadState !== 'selected'}
                      className="w-full h-[40px] bg-[#333333] border border-[#404040] rounded-[8px] px-3 text-[14px] text-[#F0F0F0] focus:outline-none focus:border-[#E5FF00] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="px-[9px] py-[3px] bg-[#282828] rounded-[8px] h-[22px] flex items-center justify-center border border-transparent">
                      <span className="text-[12px] font-medium text-white leading-none">16:9</span>
                    </div>
                    <div className="px-[9px] py-[3px] bg-[#282828] rounded-[8px] h-[22px] flex items-center justify-center border border-transparent">
                      <span className="text-[12px] font-medium text-white leading-none">{file?.type.startsWith('video/') ? 'MP4' : 'PNG'}</span>
                    </div>
                    <span className="text-[12px] text-[#BABABA]">{(file?.size ? file.size / (1024*1024) : 0).toFixed(1)} MB</span>
                  </div>

                  {uploadState === 'selected' && (
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[14px] text-[#80B8FF] hover:underline"
                    >
                      Change file
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Bar (Uploading/Processing) */}
              {(uploadState === 'uploading' || uploadState === 'processing') && (
                <div className="space-y-2">
                  <div className="w-full h-[8px] bg-[#333333] rounded-[4px] overflow-hidden">
                    <div 
                      className="h-full bg-[#E5FF00] rounded-[4px] transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-end">
                    {uploadState === 'processing' ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-[#F0F0F0]" />
                        <span className="text-[14px] font-medium text-[#F0F0F0]">Processing video...</span>
                      </div>
                    ) : (
                      <span className="text-[14px] font-medium text-[#F0F0F0]">Uploading... {Math.round(progress)}%</span>
                    )}
                  </div>
                  {uploadState === 'processing' && (
                     <p className="text-[12px] text-[#BABABA] text-right">This may take a few moments</p>
                  )}
                </div>
              )}

              {/* Form Fields */}
              <div className={cn("space-y-4", (uploadState === 'uploading' || uploadState === 'processing') && "opacity-50 pointer-events-none")}>
                <div>
                  <label className="block text-[12px] font-medium text-[#BABABA] mb-2">Category *</label>
                  <div className="relative">
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full h-[44px] bg-[#282828] border border-[#404040] rounded-[8px] px-3 text-[14px] text-[#5D5D5D] focus:outline-none focus:border-[#E5FF00] appearance-none"
                    >
                      <option value="" disabled>Select category</option>
                      <option value="Intros">Intros</option>
                      <option value="Midtros">Midtros</option>
                      <option value="Outros">Outros</option>
                      <option value="Thumbnails">Thumbnails</option>
                      <option value="Overlay Graphics">Overlay Graphics</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </div>
                  </div>
                </div>

                <div>
                   <label className="block text-[12px] font-medium text-[#BABABA] mb-2">Tags (optional)</label>
                   <input 
                     type="text"
                     value={tags}
                     onChange={(e) => setTags(e.target.value)}
                     placeholder="Add tags separated by comma"
                     className="w-full h-[44px] bg-[#282828] border border-[#404040] rounded-[8px] px-3 text-[14px] text-[#F0F0F0] placeholder-[#5D5D5D] focus:outline-none focus:border-[#E5FF00]"
                   />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="h-[72px] border-t border-[#333333] flex items-center justify-end px-6 gap-3 shrink-0 bg-[#181818]">
          <button 
            onClick={onClose}
            disabled={uploadState === 'processing'}
            className="h-[40px] px-4 bg-transparent border border-[#404040] hover:border-[#5D5D5D] rounded-[8px] text-[14px] font-bold text-[#BABABA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          
          {uploadState === 'empty' ? (
             <button 
               disabled
               className="h-[40px] px-6 bg-[#404040] rounded-[8px] text-[14px] font-bold text-[#5D5D5D] cursor-not-allowed"
             >
               Upload
             </button>
          ) : (
            <button 
              onClick={handleUpload}
              disabled={uploadState === 'uploading' || uploadState === 'processing' || !category}
              className={cn(
                "h-[40px] px-6 rounded-[8px] text-[14px] font-bold transition-colors",
                (uploadState === 'uploading' || uploadState === 'processing' || !category)
                  ? "bg-[#404040] text-[#5D5D5D] cursor-not-allowed"
                  : "bg-[#E5FF00] text-[#010101] hover:bg-[#D4ED00]"
              )}
            >
              Upload
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
