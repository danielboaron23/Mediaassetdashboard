---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces for Media Asset Dashboard with high design quality
---

# Frontend Design Skill

## Purpose
Generate beautiful, production-ready UI components that follow the Media Asset Dashboard design system. This skill ensures all components have a distinctive, polished aesthetic that avoids generic AI design patterns.

## When to Activate
Use this skill when:
- Building new UI components or pages
- Creating web interfaces
- User asks to "build", "create", or "implement" UI elements
- Designing user-facing features
- Need components that match the Media Asset Dashboard style

## Design Philosophy

**Theme:** Professional, immersive dark UI optimized for media production workflows with a distinctive lime-yellow accent

**Key Characteristics:**
- Dark-first design (never use light backgrounds)
- High contrast for accessibility
- Distinctive lime-yellow (#E5FF00) accent for key interactions
- Media-focused layouts (asset cards, thumbnails, grid displays)
- Clean, modern aesthetic avoiding generic AI patterns

## Required Design System

### Color Palette (STRICT)

**Always use these exact colors - no variations:**

```tsx
// Backgrounds (from darkest to lightest)
const bg = {
  main: "#010101",      // Neutral/900 - Main background, sidebars
  card: "#181818",      // Neutral/800 - Cards, panels, modals
  interactive: "#282828", // Neutral/700 - Buttons, inputs, hover
  border: "#333333",    // Neutral/600 - Borders, dividers
  selected: "#404040",  // Neutral/500 - Selected states
  muted: "#5D5D5D",     // Neutral/400 - Badge backgrounds
};

// Text
const text = {
  primary: "#F0F0F0",   // Neutral/100 - Primary text, headings
  secondary: "#BABABA", // Neutral/200 - Secondary text, placeholders
  emphasis: "#FFFFFF",  // Neutral/0 - High emphasis
};

// Accents
const accent = {
  primary: "#E5FF00",   // THE signature color - use sparingly!
  secondary: "#80B8FF", // Links, secondary emphasis
};

// Semantic
const semantic = {
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
};
```

### Typography Scale (REQUIRED)

Always use these exact size combinations:

```tsx
// Headings
<h1 className="text-2xl font-semibold tracking-tight text-[#F0F0F0]">Page Title</h1>
<h2 className="text-lg font-semibold tracking-tight text-[#F0F0F0]">Section</h2>
<h3 className="text-base font-semibold tracking-tight text-[#F0F0F0]">Card Title</h3>
<h4 className="text-sm font-semibold text-[#F0F0F0]">Label</h4>

// Body
<p className="text-sm text-[#F0F0F0]">Primary body text</p>
<p className="text-sm text-[#BABABA]">Secondary text</p>
<span className="text-sm font-bold text-[#F0F0F0]">Bold text</span>

// Small
<span className="text-xs text-[#BABABA]">Metadata</span>
<span className="text-xs font-bold text-[#F0F0F0]">Badge text</span>

// Tiny
<span className="text-[11px] text-[#BABABA]">Counter</span>
<span className="text-[10px] font-bold text-[#F0F0F0]">Duration</span>
```

### Spacing System (8px Grid)

Use ONLY these spacing values:

```tsx
// Never use arbitrary values like gap-5, p-7, etc.
const spacing = {
  "gap-0.5": "2px",   // Micro spacing
  "gap-1": "4px",     // Small gaps (badges)
  "gap-2": "8px",     // Standard small
  "gap-3": "12px",    // Medium
  "gap-4": "16px",    // Large (common)
  "gap-6": "24px",    // XL (cards, sections)
  "gap-8": "32px",    // 2XL (major sections)
  "gap-12": "48px",   // 3XL (page level)
};

// Card padding: always p-6 (24px)
// Button padding: px-4 py-2 (16px/8px)
// Input padding: px-3 py-2 (12px/8px)
```

### Border Radius

```tsx
const radius = {
  DEFAULT: "8px",      // rounded-lg - Buttons, inputs, cards
  xl: "12px",          // rounded-xl - Large cards
  "2xl": "16px",       // rounded-2xl - Modals
  "3xl": "24px",       // rounded-3xl - Pills, tags
  full: "50%",         // rounded-full - Avatars, circular
};
```

## Component Building Rules

### 1. Always Use Radix UI + CVA Pattern

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const componentVariants = cva(
  // Base classes
  "inline-flex items-center justify-center rounded-lg transition-colors duration-150",
  {
    variants: {
      variant: {
        default: "bg-[#282828] text-[#F0F0F0] hover:bg-[#333333]",
        ghost: "bg-transparent text-[#F0F0F0] hover:bg-[#282828]",
        accent: "bg-[#E5FF00] text-[#010101] hover:bg-[#f0ff33]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-9 px-4 text-sm",
        lg: "h-10 px-6 text-sm",
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

### 2. Always Include All Interactive States

EVERY interactive element needs:

```tsx
<button className="
  /* Base */
  bg-[#282828] text-[#F0F0F0] px-4 py-2 rounded-lg

  /* Hover */
  hover:bg-[#333333]

  /* Active/Press */
  active:bg-[#404040] active:scale-[0.98]

  /* Focus (keyboard) */
  focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-[#E5FF00]
  focus-visible:ring-offset-2 focus-visible:ring-offset-[#010101]

  /* Disabled */
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none

  /* Transition */
  transition-all duration-150
">
  Complete Button
</button>
```

### 3. Selected States MUST Use Accent Color

```tsx
// Navigation selected
<button className={cn(
  "px-4 py-2 rounded-lg transition-colors",
  isSelected
    ? "bg-[#282828] text-[#E5FF00]"  // ← REQUIRED accent color
    : "bg-transparent text-[#F0F0F0] hover:bg-[#282828]"
)}>
  {label}
</button>

// Filter tag selected
<button className={cn(
  "px-4 h-7 rounded-full transition-colors",
  isSelected
    ? "bg-[#282828] text-[#E5FF00] font-bold"  // ← REQUIRED
    : "bg-[#282828] text-[#F0F0F0] font-normal hover:text-white"
)}>
  {tag}
</button>
```

### 4. Component Structure Template

```tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ComponentNameProps {
  title: string;
  description?: string;
  variant?: 'default' | 'accent';
  className?: string;
  children?: React.ReactNode;
}

export function ComponentName({
  title,
  description,
  variant = 'default',
  className,
  children,
}: ComponentNameProps) {
  return (
    <div className={cn(
      "bg-[#181818] border border-[#333333] rounded-lg p-6",
      className
    )}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-[#F0F0F0]">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-[#BABABA] mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
```

## Common Patterns

### Asset Card Pattern

```tsx
export function AssetCard({ asset }: { asset: Asset }) {
  return (
    <div className="w-[350px] flex flex-col gap-2">
      {/* Thumbnail */}
      <div className="relative aspect-video border border-[#333333] rounded-lg overflow-hidden group">
        <img
          src={asset.thumbnail}
          alt={asset.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Favorite button */}
        <button className="
          absolute top-2 left-2 p-2 rounded-full
          bg-black/50 hover:bg-black/70
          transition-colors duration-150
        ">
          <Heart className="h-4 w-4 text-white" />
        </button>

        {/* Duration badge */}
        {asset.duration && (
          <span className="
            absolute bottom-2 right-2
            px-2 py-1 rounded-full
            bg-[#282828]
            text-[10px] font-bold text-[#F0F0F0]
          ">
            {asset.duration}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm text-[#F0F0F0] truncate">
          {asset.title}
        </h3>
        <div className="flex gap-1">
          <span className="
            px-2 py-1 rounded-lg
            bg-[#282828]
            text-xs font-medium text-white
          ">
            {asset.aspectRatio}
          </span>
        </div>
      </div>
    </div>
  );
}
```

### Section Card Pattern

```tsx
export function SectionCard({ title, count, children }: SectionCardProps) {
  return (
    <div className="bg-[#181818] border border-[#333333] rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#333333] pb-4 mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold tracking-tight text-[#F0F0F0]">
            {title}
          </h2>
          <span className="text-base font-semibold text-[#8E8E8E]">
            ({count})
          </span>
        </div>
        <button className="
          h-8 px-4 rounded-lg
          bg-[#333333] hover:bg-[#404040]
          text-sm font-bold text-[#F0F0F0]
          transition-colors duration-150
        ">
          View all
        </button>
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
```

### Filter Bar Pattern

```tsx
export function FilterBar() {
  const [selected, setSelected] = React.useState('all');

  return (
    <div className="flex items-center gap-4">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#BABABA]" />
        <input
          placeholder="Search assets..."
          className="
            w-full h-9 pl-10 pr-3 rounded-lg
            bg-[#282828] border border-[#333333]
            text-sm text-[#F0F0F0] placeholder:text-[#BABABA]
            focus:border-[#E5FF00] focus:ring-1 focus:ring-[#E5FF00] focus:outline-none
            transition-colors duration-150
          "
        />
      </div>

      {/* Filter tags */}
      <div className="flex gap-2">
        {['all', 'videos', 'images'].map((filter) => (
          <button
            key={filter}
            onClick={() => setSelected(filter)}
            className={cn(
              "px-4 h-7 rounded-full text-xs transition-colors duration-150",
              selected === filter
                ? "bg-[#282828] text-[#E5FF00] font-bold"
                : "bg-[#282828] text-[#F0F0F0] font-normal hover:text-white"
            )}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
```

## Avoiding Generic AI Aesthetics

### ❌ Don't Do This (Generic)
```tsx
// Generic gradient backgrounds
<div className="bg-gradient-to-r from-blue-500 to-purple-600">

// Overly rounded everything
<button className="rounded-3xl">

// Generic color schemes
<div className="bg-slate-800 text-gray-200">

// Too much drop shadow
<div className="shadow-2xl drop-shadow-lg">
```

### ✅ Do This (Distinctive)
```tsx
// Use the distinctive dark palette
<div className="bg-[#010101]">

// Strategic use of lime-yellow accent
<button className="text-[#E5FF00]">

// Consistent 8px radius
<button className="rounded-lg">

// Subtle borders instead of heavy shadows
<div className="border border-[#333333]">
```

## Generation Workflow

When building a component:

1. **Start with structure** - Use proper Radix UI primitives
2. **Apply base colors** - Use exact palette colors
3. **Add typography** - Follow the type scale
4. **Implement spacing** - Use 8px grid (gap-2, gap-4, gap-6)
5. **Add interactive states** - Hover, focus, active, disabled
6. **Include transitions** - duration-150 for colors, duration-300 for transforms
7. **Add TypeScript types** - Full interface definitions
8. **Export properly** - Export component and types

## Quality Checklist

Before finishing a component, verify:

- ✅ Uses ONLY colors from the defined palette
- ✅ Typography matches the scale exactly
- ✅ Spacing follows 8px grid
- ✅ Radix UI primitives used where applicable
- ✅ CVA pattern for variants
- ✅ `cn()` utility for class merging
- ✅ All interactive states implemented
- ✅ Proper transitions on state changes
- ✅ TypeScript interfaces defined
- ✅ Accent color (#E5FF00) used for selected states
- ✅ Focus-visible for keyboard navigation
- ✅ Follows existing component patterns

## Critical Files to Reference
- `/src/components/dashboard/SectionCard.tsx` - Section pattern
- `/src/components/dashboard/AssetCard.tsx` - Card pattern
- `/src/components/ui/button.tsx` - CVA button example
- `/src/components/ui/card.tsx` - Card component structure
- `/design-system/` - Complete design system documentation

## Remember

This is a **media asset management dashboard** with a professional, dark aesthetic. The lime-yellow accent (#E5FF00) is the signature element that makes this design distinctive. Use it sparingly but strategically for active/selected states and key interactions.

Always prioritize:
1. **Consistency** - Match existing patterns
2. **Accessibility** - Proper contrast, focus states
3. **Polish** - Complete states, smooth transitions
4. **Uniqueness** - Avoid generic AI patterns
