# Components

## Overview
Components are built using Radix UI primitives with CVA (Class Variance Authority) for variant management. All components use the `cn()` utility for class merging.

---

## Core Utility

### cn() Function
Always use `cn()` for merging Tailwind classes:

```tsx
import { cn } from "@/lib/utils";

// Correct usage
<div className={cn("base-classes", conditional && "conditional-class", className)} />

// Never do this
<div className={`base-classes ${className}`} />
```

---

## Button

**Location:** `/src/components/ui/button.tsx`

### Variants

| Variant | Description | Background | Text |
|---------|-------------|------------|------|
| **default** | Primary action | `#181818` | `#F0F0F0` |
| **destructive** | Dangerous action | Red | White |
| **outline** | Secondary action | Transparent | `#F0F0F0` |
| **secondary** | Alternative action | `#282828` | `#F0F0F0` |
| **ghost** | Subtle action | Transparent | `#F0F0F0` |
| **link** | Text link | Transparent | `#80B8FF` |

### Sizes

| Size | Height | Padding | Usage |
|------|--------|---------|-------|
| **sm** | 32px (h-8) | px-3 | Compact UI |
| **default** | 36px (h-9) | px-4 | Standard buttons |
| **lg** | 40px (h-10) | px-6 | Primary CTAs |
| **icon** | 36x36px | - | Icon-only buttons |

### Usage Examples

```tsx
import { Button } from "@/components/ui/button";

// Primary button
<Button variant="default" size="default">
  Save Changes
</Button>

// Secondary button
<Button variant="secondary">
  Cancel
</Button>

// Ghost button (toolbar)
<Button variant="ghost" size="icon">
  <Settings className="h-4 w-4" />
</Button>

// Destructive button
<Button variant="destructive">
  Delete
</Button>

// With icon
<Button>
  <Plus className="h-4 w-4 mr-2" />
  Add New
</Button>
```

---

## Card

**Location:** `/src/components/ui/card.tsx`

### Subcomponents

| Component | Purpose |
|-----------|---------|
| `Card` | Container wrapper |
| `CardHeader` | Header section |
| `CardTitle` | Title text |
| `CardDescription` | Description text |
| `CardAction` | Action buttons area |
| `CardContent` | Main content area |
| `CardFooter` | Footer section |

### Usage Example

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter
} from "@/components/ui/card";

<Card className="bg-[#181818] border-[#333333]">
  <CardHeader>
    <div>
      <CardTitle>Section Title</CardTitle>
      <CardDescription>Optional description</CardDescription>
    </div>
    <CardAction>
      <Button variant="ghost" size="icon">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    {/* Main content */}
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

## Badge

**Location:** `/src/components/ui/badge.tsx`

### Variants

| Variant | Background | Text | Usage |
|---------|------------|------|-------|
| **default** | `#282828` | `#F0F0F0` | Standard tags |
| **secondary** | `#5D5D5D` | `#F0F0F0` | Muted tags |
| **destructive** | Red | White | Error/Warning |
| **outline** | Transparent | `#F0F0F0` | Subtle tags |

### Usage Example

```tsx
import { Badge } from "@/components/ui/badge";

// Aspect ratio badge
<Badge variant="secondary">16:9</Badge>

// Status badge
<Badge variant="default">Active</Badge>

// Multiple badges
<div className="flex gap-1">
  <Badge>Tag 1</Badge>
  <Badge>Tag 2</Badge>
</div>
```

---

## Input

**Location:** `/src/components/ui/input.tsx`

### Styling

```tsx
import { Input } from "@/components/ui/input";

// Basic input
<Input
  placeholder="Search..."
  className="bg-[#282828] border-[#333333] text-[#F0F0F0] placeholder:text-[#BABABA]"
/>

// With icon
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#BABABA]" />
  <Input className="pl-10" placeholder="Search..." />
</div>
```

---

## Select

**Location:** `/src/components/ui/select.tsx`

### Usage Example

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

<Select>
  <SelectTrigger className="w-[180px] bg-[#282828] border-[#333333]">
    <SelectValue placeholder="Sort by" />
  </SelectTrigger>
  <SelectContent className="bg-[#181818] border-[#333333]">
    <SelectItem value="newest">Newest</SelectItem>
    <SelectItem value="oldest">Oldest</SelectItem>
    <SelectItem value="name">Name</SelectItem>
  </SelectContent>
</Select>
```

---

## Icons

**Library:** Lucide React

### Sizes

| Size | Dimensions | Tailwind | Usage |
|------|------------|----------|-------|
| **xs** | 12px | `h-3 w-3` | Inline indicators |
| **sm** | 16px | `h-4 w-4` | Buttons, inputs |
| **md** | 20px | `h-5 w-5` | Navigation |
| **lg** | 24px | `h-6 w-6` | Headers, large UI |

### Usage Example

```tsx
import {
  Search,
  Plus,
  Heart,
  MoreHorizontal,
  Grid,
  List,
  Upload,
  Settings
} from "lucide-react";

// In button
<Button variant="ghost" size="icon">
  <Search className="h-4 w-4" />
</Button>

// With text
<div className="flex items-center gap-2">
  <Heart className="h-4 w-4" />
  <span>Favorites</span>
</div>

// Colored icon
<Heart className="h-4 w-4 text-[#E5FF00]" />
```

---

## Custom Components

### AssetCard

**Location:** `/src/components/dashboard/AssetCard.tsx`

```tsx
interface AssetCardProps {
  title: string;
  thumbnail: string;
  duration?: string;
  aspectRatio: "16:9" | "9:16" | "1:1" | "4:5";
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

// Structure
<div className="w-[350px] bg-[#181818] rounded-lg overflow-hidden">
  {/* Thumbnail */}
  <div className="relative aspect-video">
    <img src={thumbnail} className="w-full h-full object-cover" />

    {/* Favorite button */}
    <button className="absolute top-2 left-2 p-2 rounded-full bg-black/50">
      <Heart className="h-4 w-4" />
    </button>

    {/* Duration */}
    <span className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/50 text-[10px] font-bold">
      {duration}
    </span>
  </div>

  {/* Info */}
  <div className="p-4">
    <h3 className="text-sm font-semibold text-[#F0F0F0] truncate">{title}</h3>
    <Badge variant="secondary">{aspectRatio}</Badge>
  </div>
</div>
```

### SectionCard

**Location:** `/src/components/dashboard/SectionCard.tsx`

```tsx
// Container for asset grids with header
<Card>
  <CardHeader>
    <div className="flex items-center gap-2">
      <CardTitle>Section Name</CardTitle>
      <span className="px-2 py-1 rounded-full bg-[#5D5D5D] text-[#E5FF00] text-xs">
        24
      </span>
    </div>
    <CardAction>
      <Button variant="ghost" size="sm">View All</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-4 gap-6">
      {/* AssetCards */}
    </div>
  </CardContent>
</Card>
```

### FilterBar

```tsx
<div className="flex items-center justify-between gap-4">
  {/* Search */}
  <div className="relative flex-1 max-w-md">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#BABABA]" />
    <Input className="pl-10" placeholder="Search assets..." />
  </div>

  {/* Filters */}
  <div className="flex items-center gap-2">
    <Select>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      {/* ... */}
    </Select>

    {/* View toggle */}
    <div className="flex bg-[#282828] rounded-lg p-1">
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Grid className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <List className="h-4 w-4" />
      </Button>
    </div>
  </div>
</div>
```

---

## Component Composition Pattern

### CVA Pattern
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const componentVariants = cva(
  // Base classes
  "inline-flex items-center justify-center rounded-lg transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#282828] text-[#F0F0F0] hover:bg-[#333333]",
        active: "bg-[#333333] text-[#E5FF00]",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

export function Component({ className, variant, size, ...props }: ComponentProps) {
  return (
    <div
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

---

## Do's and Don'ts

### Do
- Use existing UI components from `/src/components/ui/`
- Use CVA for components with multiple variants
- Always use `cn()` for class merging
- Keep components focused and single-purpose
- Export both component and variants

### Don't
- Don't create inline component definitions
- Don't hardcode colors without using design tokens
- Don't skip TypeScript interfaces for props
- Don't mix different icon libraries
- Don't create components without considering dark theme
