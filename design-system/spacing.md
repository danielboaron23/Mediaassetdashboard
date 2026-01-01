# Spacing & Grid System

## Overview
The Media Asset Dashboard uses an 8px base grid system. All spacing values are multiples of 8px (with 2px and 4px for micro-spacing). This creates visual consistency and alignment throughout the interface.

---

## Base Unit

**Base Unit: 8px**

All major spacing should be a multiple of 8px. Use 2px and 4px only for fine-tuning small elements.

---

## Spacing Scale

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| **2xs** | 2px | `gap-0.5`, `p-0.5` | Tight gaps, icon-to-text micro spacing |
| **xs** | 4px | `gap-1`, `p-1` | Small gaps between badges, inline elements |
| **sm** | 8px | `gap-2`, `p-2` | Standard padding, small gaps |
| **md** | 12px | `gap-3`, `p-3` | Medium padding |
| **lg** | 16px | `gap-4`, `p-4` | Section gaps, sidebar padding |
| **xl** | 24px | `gap-6`, `p-6` | Large section gaps, card padding |
| **2xl** | 32px | `gap-8`, `p-8` | Major section separations |
| **3xl** | 48px | `gap-12`, `p-12` | Page-level spacing |

---

## Visual Scale

```
2px   ▌      2xs - Micro spacing
4px   █      xs  - Small gaps
8px   ██     sm  - Standard
12px  ███    md  - Medium
16px  ████   lg  - Section gaps
24px  ██████ xl  - Card padding
32px  ████████   2xl - Major sections
48px  ████████████   3xl - Page level
```

---

## Component Spacing

### Cards
```tsx
// Card container
<div className="p-6">  {/* 24px padding */}
  {/* Content */}
</div>

// Card header
<div className="p-6 pb-0">  {/* 24px padding, no bottom */}
  {/* Header content */}
</div>

// Card content
<div className="p-6 pt-0">  {/* 24px padding, no top */}
  {/* Main content */}
</div>
```

### Buttons
```tsx
// Default button padding
<button className="px-4 py-2">  {/* 16px horizontal, 8px vertical */}
  Click me
</button>

// Small button padding
<button className="px-3 py-1">  {/* 12px horizontal, 4px vertical */}
  Small
</button>

// Large button padding
<button className="px-6 py-2">  {/* 24px horizontal, 8px vertical */}
  Large Action
</button>
```

### Navigation Items
```tsx
// Sidebar item
<div className="px-4 py-2">  {/* 16px horizontal, 8px vertical */}
  <Icon />
  <span>Label</span>
</div>
```

### Form Elements
```tsx
// Input padding
<input className="px-3 py-2" />  {/* 12px horizontal, 8px vertical */}

// Form field gap
<div className="space-y-4">  {/* 16px between fields */}
  <input />
  <input />
</div>
```

---

## Gap Patterns

### Inline Elements
```tsx
// Icon + Text
<div className="flex items-center gap-2">  {/* 8px gap */}
  <Icon className="h-4 w-4" />
  <span>Label</span>
</div>

// Badges
<div className="flex gap-1">  {/* 4px gap */}
  <Badge>Tag 1</Badge>
  <Badge>Tag 2</Badge>
</div>
```

### Vertical Stacks
```tsx
// Tight stack (related items)
<div className="flex flex-col gap-2">  {/* 8px gap */}
  <Item />
  <Item />
</div>

// Standard stack
<div className="flex flex-col gap-4">  {/* 16px gap */}
  <Section />
  <Section />
</div>

// Loose stack (major sections)
<div className="flex flex-col gap-6">  {/* 24px gap */}
  <Card />
  <Card />
</div>
```

### Grid Gaps
```tsx
// Asset grid
<div className="grid grid-cols-4 gap-6">  {/* 24px gap */}
  <AssetCard />
  <AssetCard />
</div>
```

---

## Layout Dimensions

### Fixed Widths

| Element | Width | Tailwind |
|---------|-------|----------|
| Elements Bar | 80px | `w-20` |
| Category Sidebar | 271px | `w-[271px]` |
| Media Card | 350px | `w-[350px]` |
| Modal (small) | 400px | `w-[400px]` |
| Modal (medium) | 560px | `w-[560px]` |
| Modal (large) | 720px | `w-[720px]` |

### Fixed Heights

| Element | Height | Tailwind |
|---------|--------|----------|
| Top Header | 56px | `h-14` |
| Button (sm) | 32px | `h-8` |
| Button (default) | 36px | `h-9` |
| Button (lg) | 40px | `h-10` |
| Input | 36px | `h-9` |
| Icon Button | 36px | `h-9 w-9` |
| Thumbnail | 196px | `h-[196px]` |

### Aspect Ratios

| Type | Ratio | Usage |
|------|-------|-------|
| Video Thumbnail | 16:9 | `aspect-video` |
| Square | 1:1 | `aspect-square` |
| Portrait | 9:16 | `aspect-[9/16]` |
| Social | 4:5 | `aspect-[4/5]` |

---

## Margin Patterns

### Section Margins
```tsx
// Page content margin
<main className="ml-[351px]">  {/* 80px + 271px sidebars */}
  {/* Main content */}
</main>

// Section top margin
<section className="mt-8">  {/* 32px top margin */}
  {/* Section content */}
</section>
```

### Component Margins
Prefer padding and gap over margins for component-level spacing:

```tsx
// Preferred: Use gap
<div className="flex gap-4">
  <Child />
  <Child />
</div>

// Avoid: Using margins
<div className="flex">
  <Child className="mr-4" />
  <Child />
</div>
```

---

## Responsive Spacing

### Breakpoint-based Gaps
```tsx
// Responsive grid gap
<div className="grid gap-4 lg:gap-6 xl:gap-8">
  {/* Items */}
</div>

// Responsive padding
<div className="p-4 lg:p-6 xl:p-8">
  {/* Content */}
</div>
```

---

## Border Radius

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| **none** | 0px | `rounded-none` | Sharp corners |
| **sm** | 4px | `rounded` | Small elements |
| **md** | 8px | `rounded-lg` | Buttons, inputs, cards |
| **lg** | 12px | `rounded-xl` | Large cards |
| **xl** | 16px | `rounded-2xl` | Modals, large containers |
| **2xl** | 24px | `rounded-3xl` | Pills, special elements |
| **full** | 50% | `rounded-full` | Circles, avatars |

### Common Usage
```tsx
// Buttons
<button className="rounded-lg">  {/* 8px radius */}

// Cards
<div className="rounded-xl">  {/* 12px radius */}

// Badges/Pills
<span className="rounded-full">  {/* Fully rounded */}

// Avatar
<img className="rounded-full">  {/* Circle */}

// Input
<input className="rounded-lg">  {/* 8px radius */}
```

---

## Do's and Don'ts

### Do
- Use the 8px grid for all major spacing
- Use gap instead of margins between siblings
- Be consistent with padding within component types
- Use responsive spacing for different screen sizes

### Don't
- Don't use arbitrary values (e.g., 13px, 17px)
- Don't mix padding and margin for the same spacing purpose
- Don't use negative margins as a layout mechanism
- Don't forget to account for border width in sizing calculations
