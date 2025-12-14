import { 
  Clapperboard, 
  Palette, 
  LayoutTemplate, 
  Type, 
  Crop, 
  Subtitles, 
  ArrowRightLeft,
  Star,
  LayoutGrid,
  List,
  Plus,
  Search,
  ChevronDown,
  Upload,
  MoreHorizontal
} from "lucide-react";

// Import images from Figma assets
import imgIntro1 from "figma:asset/f7855680c02e10fbca56885d3d58071e0cddedad.png";
import imgIntro2 from "figma:asset/20f3221f11029b25fd0033389a4588687da49b77.png";
import imgIntro3 from "figma:asset/2a11502a1532fa456124c21da85151959f25facb.png";
import imgIntro4 from "figma:asset/7fecb953b563b642ac8b221ae1f0f19c4a5e4b89.png";

export type NavItem = {
  id: string;
  label: string;
  icon: any;
  count?: number;
};

export type Asset = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  isFavorite: boolean;
  aspectRatios: string[];
  type: 'intro' | 'midtro' | 'outro' | 'thumbnail' | 'overlay';
  fileSize: string;
  date: string;
  mediaFormat: 'Video' | 'Image';
};

export const mainNavItems: NavItem[] = [
  { id: 'media', label: 'Media', icon: Clapperboard },
  { id: 'brand', label: 'Brand Hub', icon: Palette },
  { id: 'templates', label: 'Templates', icon: LayoutTemplate },
  { id: 'text', label: 'Text', icon: Type },
  { id: 'reframe', label: 'Reframe', icon: Crop },
  { id: 'captions', label: 'Captions', icon: Subtitles },
  { id: 'transitions', label: 'Transitions', icon: ArrowRightLeft },
];

export const categoryItems: NavItem[] = [
  { id: 'all', label: 'All Assets', icon: LayoutGrid, count: 32 },
  { id: 'favorites', label: 'Favorites', icon: Star, count: 11 },
  { id: 'intros', label: 'Intros', icon: ArrowRightLeft, count: 11 }, // Using generic icon for now
  { id: 'midtros', label: 'Midtros', icon: ArrowRightLeft, count: 9 },
  { id: 'outros', label: 'Outros', icon: ArrowRightLeft, count: 7 },
  { id: 'thumbnails', label: 'Thumbnails', icon: LayoutTemplate, count: 9 },
  { id: 'overlays', label: 'Overlay Graphics', icon: Palette, count: 6 },
];

export const assets: Asset[] = [
  {
    id: '1',
    title: 'Game highlight intro.png',
    thumbnail: imgIntro1,
    duration: '0:04',
    isFavorite: true,
    aspectRatios: ['16:9', '9:16', '1:1', '4:5'],
    type: 'intro',
    fileSize: '2.4 MB',
    date: '6/10/2025',
    mediaFormat: 'Video'
  },
  {
    id: '2',
    title: 'Touchdown Blast',
    thumbnail: imgIntro2,
    duration: '0:04',
    isFavorite: false,
    aspectRatios: ['9:16'],
    type: 'intro',
    fileSize: '3.7 MB',
    date: '5/10/2025',
    mediaFormat: 'Video'
  },
  {
    id: '3',
    title: 'Victory Launch',
    thumbnail: imgIntro3,
    duration: '0:04',
    isFavorite: false,
    aspectRatios: ['16:9', '9:16'],
    type: 'intro',
    fileSize: '4.3 MB',
    date: '5/10/2025',
    mediaFormat: 'Video'
  },
  {
    id: '4',
    title: 'Slam Dunk Start',
    thumbnail: imgIntro4,
    duration: '0:04',
    isFavorite: false,
    aspectRatios: ['16:9'],
    type: 'intro',
    fileSize: '368 KB',
    date: '1/10/2025',
    mediaFormat: 'Image'
  },
  // Duplicating for Midtros section demo
  {
    id: '5',
    title: 'Gridiron Opener',
    thumbnail: imgIntro1,
    duration: '0:04',
    isFavorite: false,
    aspectRatios: ['16:9', '9:16', '1:1', '4:5'],
    type: 'midtro',
    fileSize: '2.4 MB',
    date: '6/10/2025',
    mediaFormat: 'Video'
  },
  {
    id: '6',
    title: 'Half-time Hype',
    thumbnail: imgIntro2,
    duration: '0:04',
    isFavorite: false,
    aspectRatios: ['9:16'],
    type: 'midtro',
    fileSize: '3.7 MB',
    date: '5/10/2025',
    mediaFormat: 'Video'
  },
  {
    id: '7',
    title: 'Player Stats',
    thumbnail: imgIntro3,
    duration: '0:04',
    isFavorite: false,
    aspectRatios: ['16:9', '9:16'],
    type: 'midtro',
    fileSize: '4.3 MB',
    date: '5/10/2025',
    mediaFormat: 'Video'
  },
  {
    id: '8',
    title: 'Scoreboard',
    thumbnail: imgIntro4,
    duration: '0:04',
    isFavorite: false,
    aspectRatios: ['16:9'],
    type: 'midtro',
    fileSize: '368 KB',
    date: '1/10/2025',
    mediaFormat: 'Image'
  },
];
