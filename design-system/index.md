# Media Asset Dashboard - Design System

## Overview

This design system defines the visual language, components, and patterns used throughout the Media Asset Dashboard application. It ensures consistency, accessibility, and maintainability across all interfaces.

---

## Quick Reference

### Tech Stack
- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** Radix UI + CVA (Class Variance Authority)
- **Icons:** Lucide React
- **Theme:** Dark-first design

### Key Values

| Token | Value |
|-------|-------|
| Primary Background | `#010101` |
| Card Background | `#181818` |
| Primary Text | `#F0F0F0` |
| Accent Color | `#E5FF00` |
| Base Spacing | 8px |
| Default Radius | 8px |

---

## Documentation

| Document | Description |
|----------|-------------|
| [Colors](./colors.md) | Color palette, tokens, and usage guidelines |
| [Typography](./typography.md) | Font families, type scale, and text styling |
| [Spacing](./spacing.md) | 8px grid system, padding, margins, dimensions |
| [Components](./components.md) | UI components, patterns, and code examples |
| [States](./states.md) | Hover, focus, active, disabled, loading states |
| [Layout](./layout.md) | Page structure, grids, flexbox patterns |

---

## Color Palette Summary

### Backgrounds
```
#010101  Neutral/900  Main background
#181818  Neutral/800  Cards, panels
#282828  Neutral/700  Interactive elements
#333333  Neutral/600  Borders, dividers
#404040  Neutral/500  Selected states
#5D5D5D  Neutral/400  Muted elements
```

### Text
```
#F0F0F0  Neutral/100  Primary text
#BABABA  Neutral/200  Secondary text
#FFFFFF  Neutral/0    High emphasis
```

### Accent
```
#E5FF00  Primary      Active states, highlights
#80B8FF  Secondary    Links
```

---

## Typography Summary

| Style | Size | Weight | Tailwind |
|-------|------|--------|----------|
| H1 | 24px | Semibold | `text-2xl font-semibold` |
| H2 | 18px | Semibold | `text-lg font-semibold` |
| H3 | 16px | Semibold | `text-base font-semibold` |
| H4 | 14px | Semibold | `text-sm font-semibold` |
| Body | 14px | Regular | `text-sm` |
| Small | 12px | Regular | `text-xs` |

---

## Spacing Summary

| Token | Value | Tailwind |
|-------|-------|----------|
| xs | 4px | `gap-1`, `p-1` |
| sm | 8px | `gap-2`, `p-2` |
| md | 12px | `gap-3`, `p-3` |
| lg | 16px | `gap-4`, `p-4` |
| xl | 24px | `gap-6`, `p-6` |

---

## Component Imports

```tsx
// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Utilities
import { cn } from "@/lib/utils";

// Icons
import { Search, Plus, Heart, Settings } from "lucide-react";
```

---

## Common Patterns

### Button with Icon
```tsx
<Button>
  <Plus className="h-4 w-4 mr-2" />
  Add New
</Button>
```

### Card Section
```tsx
<Card className="bg-[#181818] border-[#333333]">
  <CardHeader>
    <CardTitle>Section</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### Responsive Grid
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Items */}
</div>
```

### Interactive Element
```tsx
<button className="
  bg-[#282828] text-[#F0F0F0]
  hover:bg-[#333333]
  focus-visible:ring-2 focus-visible:ring-[#E5FF00]
  disabled:opacity-50
  transition-colors duration-150
  px-4 py-2 rounded-lg
">
  Click me
</button>
```

---

## File Structure

```
src/
├── components/
│   ├── ui/              # Primitive UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   └── select.tsx
│   ├── dashboard/       # Feature-specific components
│   │   ├── AssetCard.tsx
│   │   ├── SectionCard.tsx
│   │   └── FilterBar.tsx
│   └── layout/          # Layout components
│       ├── ElementsBar.tsx
│       └── CategorySidebar.tsx
├── lib/
│   └── utils.ts         # cn() utility
├── styles/
│   └── globals.css      # Global styles & CSS variables
└── index.css            # Tailwind imports
```

---

## Design Principles

### 1. Dark Theme First
All colors and contrast ratios are optimized for dark backgrounds. Never use light backgrounds as the primary surface.

### 2. Consistency
Use the defined tokens for colors, spacing, and typography. Don't introduce arbitrary values.

### 3. Accessibility
- Minimum 4.5:1 contrast ratio for text
- Touch targets at least 32px × 32px
- Focus states on all interactive elements
- Semantic HTML structure

### 4. Performance
- Use system fonts
- Avoid layout shifts
- Use CSS transitions (not JS animations)
- Lazy load images and heavy content

### 5. Simplicity
- Minimal color palette
- Consistent spacing rhythm
- Clear visual hierarchy
- Predictable interactions

---

## Quick Start Checklist

When creating a new component:

- [ ] Import `cn` from `@/lib/utils`
- [ ] Use colors from the palette (not arbitrary values)
- [ ] Follow the 8px spacing grid
- [ ] Use existing UI components where possible
- [ ] Add hover and focus states
- [ ] Include disabled state styling
- [ ] Use TypeScript interfaces for props
- [ ] Export component and types
- [ ] Test on dark background

---

## Resources

### Project Files
- Design tokens: `/src/index.css`
- Global styles: `/src/styles/globals.css`
- Utils: `/src/lib/utils.ts`
- Guidelines: `/src/guidelines/Guidelines.md`

### External
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/icons/)
- [CVA](https://cva.style/docs)

---

## Version

**Design System Version:** 1.0.0
**Last Updated:** December 2024
**Maintained by:** Media Asset Dashboard Team
