# Layout Patterns

## Overview
The Media Asset Dashboard uses a three-column layout with fixed sidebars and a fluid main content area. Layouts are built using CSS Flexbox and Grid.

---

## App Layout Structure

```
┌──────────────────────────────────────────────────────────────────┐
│                           App Shell                               │
├────────┬───────────────┬─────────────────────────────────────────┤
│        │               │                                          │
│ Elem.  │   Category    │           Main Content                   │
│  Bar   │   Sidebar     │             Area                         │
│        │               │                                          │
│  80px  │    271px      │           Fluid                          │
│        │               │                                          │
│        │               │                                          │
│        │               │                                          │
│        │               │                                          │
└────────┴───────────────┴─────────────────────────────────────────┘
```

### Implementation

```tsx
// App.tsx
<div className="flex min-h-screen bg-[#010101]">
  {/* Elements Bar - Left */}
  <aside className="w-20 flex-shrink-0 border-r border-[#333333]">
    <ElementsBar />
  </aside>

  {/* Category Sidebar */}
  <aside className="w-[271px] flex-shrink-0 border-r border-[#333333]">
    <CategorySidebar />
  </aside>

  {/* Main Content */}
  <main className="flex-1 overflow-auto">
    <div className="p-6">
      {/* Content */}
    </div>
  </main>
</div>
```

---

## Layout Dimensions

### Fixed Widths

| Element | Width | Tailwind |
|---------|-------|----------|
| Elements Bar | 80px | `w-20` |
| Category Sidebar | 271px | `w-[271px]` |
| Combined Sidebars | 351px | - |
| Main Content | `calc(100% - 351px)` | `flex-1` |

### Responsive Behavior

```tsx
// Hide sidebars on mobile
<aside className="hidden lg:block w-20">
  <ElementsBar />
</aside>

<aside className="hidden md:block w-[271px]">
  <CategorySidebar />
</aside>

// Full width on mobile
<main className="flex-1 w-full lg:w-auto">
  {/* Content */}
</main>
```

---

## Elements Bar Layout

```
┌────────┐
│  Logo  │  48px height
├────────┤
│  Nav   │
│  Item  │  Each: 48px
│  Item  │
│  Item  │
├────────┤  Divider
│  Item  │
│  Item  │
├────────┤
│   ▼    │  Collapse toggle
└────────┘
```

### Implementation

```tsx
<div className="flex flex-col h-full bg-[#010101] py-4">
  {/* Logo */}
  <div className="flex items-center justify-center h-12 mb-4">
    <Logo className="h-8 w-8" />
  </div>

  {/* Navigation */}
  <nav className="flex-1 flex flex-col gap-1 px-3">
    <NavItem icon={Home} label="Home" active />
    <NavItem icon={Folder} label="Assets" />
    <NavItem icon={Heart} label="Favorites" />

    {/* Divider */}
    <div className="h-px bg-[#333333] my-2" />

    <NavItem icon={Settings} label="Settings" />
  </nav>

  {/* Collapse Button */}
  <div className="px-3">
    <button className="w-full p-3 rounded-lg hover:bg-[#282828]">
      <ChevronLeft className="h-4 w-4 mx-auto" />
    </button>
  </div>
</div>
```

---

## Category Sidebar Layout

```
┌─────────────────────┐
│ Header + Search     │
├─────────────────────┤
│ Category            │
│   └─ Subcategory 24 │
│   └─ Subcategory 12 │
│ Category            │
│   └─ Subcategory 8  │
├─────────────────────┤
│ Actions             │
└─────────────────────┘
```

### Implementation

```tsx
<div className="flex flex-col h-full bg-[#010101]">
  {/* Header */}
  <div className="p-4 border-b border-[#333333]">
    <h2 className="text-lg font-semibold text-[#F0F0F0] mb-4">
      Categories
    </h2>
    <Input placeholder="Search..." />
  </div>

  {/* Category List */}
  <nav className="flex-1 overflow-auto p-2">
    <CategoryGroup title="Videos">
      <CategoryItem label="Reels" count={24} active />
      <CategoryItem label="Stories" count={12} />
    </CategoryGroup>

    <CategoryGroup title="Images">
      <CategoryItem label="Posts" count={8} />
      <CategoryItem label="Thumbnails" count={16} />
    </CategoryGroup>
  </nav>

  {/* Footer Actions */}
  <div className="p-4 border-t border-[#333333]">
    <Button className="w-full">
      <Plus className="h-4 w-4 mr-2" />
      New Category
    </Button>
  </div>
</div>
```

---

## Main Content Layout

### Page Structure

```tsx
<div className="p-6 space-y-6">
  {/* Page Header */}
  <header className="flex items-center justify-between">
    <h1 className="text-2xl font-semibold text-[#F0F0F0]">
      Page Title
    </h1>
    <div className="flex items-center gap-2">
      <Button variant="ghost">Filter</Button>
      <Button>Upload</Button>
    </div>
  </header>

  {/* Filter Bar */}
  <FilterBar />

  {/* Content Sections */}
  <section>
    <SectionCard title="Recent" count={24}>
      <AssetGrid assets={recentAssets} />
    </SectionCard>
  </section>

  <section>
    <SectionCard title="Favorites" count={12}>
      <AssetGrid assets={favoriteAssets} />
    </SectionCard>
  </section>
</div>
```

---

## Grid Layouts

### Asset Grid

```tsx
// Responsive 4-column grid
<div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  gap-6
">
  {assets.map(asset => (
    <AssetCard key={asset.id} {...asset} />
  ))}
</div>
```

### Grid Variations

| Columns | Breakpoint | Usage |
|---------|------------|-------|
| 1 | < 640px | Mobile |
| 2 | ≥ 640px (sm) | Tablet portrait |
| 3 | ≥ 1024px (lg) | Tablet landscape |
| 4 | ≥ 1280px (xl) | Desktop |
| 5+ | ≥ 1536px (2xl) | Large screens |

### Auto-fit Grid

```tsx
// Auto-sizing grid based on card width
<div className="
  grid
  grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
  gap-6
">
  {/* Cards */}
</div>
```

---

## Flexbox Layouts

### Horizontal Toolbar

```tsx
<div className="flex items-center gap-4">
  {/* Left side */}
  <div className="flex items-center gap-2">
    <SearchInput />
  </div>

  {/* Spacer */}
  <div className="flex-1" />

  {/* Right side */}
  <div className="flex items-center gap-2">
    <SortSelect />
    <ViewToggle />
  </div>
</div>
```

### Vertical Stack

```tsx
<div className="flex flex-col gap-6">
  <Section />
  <Section />
  <Section />
</div>
```

### Centered Content

```tsx
<div className="flex items-center justify-center min-h-[400px]">
  <EmptyState />
</div>
```

---

## Card Layouts

### Section Card

```tsx
<div className="bg-[#181818] rounded-xl border border-[#333333]">
  {/* Header */}
  <div className="flex items-center justify-between p-6 pb-4">
    <div className="flex items-center gap-3">
      <h3 className="text-base font-semibold text-[#F0F0F0]">
        Section Title
      </h3>
      <span className="px-2 py-1 rounded-full bg-[#5D5D5D] text-[#E5FF00] text-xs font-bold">
        24
      </span>
    </div>
    <Button variant="ghost" size="sm">View All</Button>
  </div>

  {/* Filters */}
  <div className="px-6 pb-4">
    <div className="flex gap-4">
      <FilterTab active>All</FilterTab>
      <FilterTab>Essentials</FilterTab>
    </div>
  </div>

  {/* Content */}
  <div className="p-6 pt-0">
    <div className="grid grid-cols-4 gap-6">
      {/* Cards */}
    </div>
  </div>
</div>
```

---

## Modal Layout

```tsx
// Modal overlay
<div className="fixed inset-0 z-50 flex items-center justify-center">
  {/* Backdrop */}
  <div className="absolute inset-0 bg-black/80" onClick={onClose} />

  {/* Modal content */}
  <div className="
    relative z-10
    w-full max-w-[560px]
    max-h-[90vh]
    bg-[#181818]
    rounded-xl
    border border-[#333333]
    overflow-hidden
  ">
    {/* Header */}
    <div className="flex items-center justify-between p-6 border-b border-[#333333]">
      <h2 className="text-lg font-semibold text-[#F0F0F0]">Modal Title</h2>
      <Button variant="ghost" size="icon" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    </div>

    {/* Body */}
    <div className="p-6 overflow-auto max-h-[60vh]">
      {/* Content */}
    </div>

    {/* Footer */}
    <div className="flex justify-end gap-2 p-6 border-t border-[#333333]">
      <Button variant="ghost" onClick={onClose}>Cancel</Button>
      <Button onClick={onConfirm}>Confirm</Button>
    </div>
  </div>
</div>
```

---

## List Layouts

### Vertical List

```tsx
<div className="divide-y divide-[#333333]">
  {items.map(item => (
    <div key={item.id} className="flex items-center gap-4 p-4">
      <img src={item.thumbnail} className="h-12 w-12 rounded object-cover" />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[#F0F0F0] truncate">
          {item.title}
        </h4>
        <p className="text-xs text-[#BABABA]">{item.meta}</p>
      </div>
      <Button variant="ghost" size="icon">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  ))}
</div>
```

### Horizontal Scroll

```tsx
<div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
  {items.map(item => (
    <div key={item.id} className="flex-shrink-0 w-[200px]">
      <Card {...item} />
    </div>
  ))}
</div>
```

---

## Responsive Breakpoints

| Breakpoint | Width | Tailwind | Usage |
|------------|-------|----------|-------|
| **xs** | < 640px | default | Mobile phones |
| **sm** | ≥ 640px | `sm:` | Large phones |
| **md** | ≥ 768px | `md:` | Tablets |
| **lg** | ≥ 1024px | `lg:` | Laptops |
| **xl** | ≥ 1280px | `xl:` | Desktops |
| **2xl** | ≥ 1536px | `2xl:` | Large screens |

### Responsive Pattern Example

```tsx
<div className="
  /* Mobile */
  flex flex-col gap-4 p-4

  /* Tablet */
  md:flex-row md:gap-6 md:p-6

  /* Desktop */
  lg:gap-8 lg:p-8
">
  {/* Content */}
</div>
```

---

## Z-Index Scale

| Layer | Z-Index | Usage |
|-------|---------|-------|
| **Base** | 0 | Default content |
| **Dropdown** | 10 | Dropdown menus |
| **Sticky** | 20 | Sticky headers |
| **Overlay** | 30 | Overlays, backdrops |
| **Modal** | 40 | Modal dialogs |
| **Popover** | 50 | Popovers, tooltips |
| **Toast** | 60 | Toast notifications |

```tsx
// Tailwind classes
z-0     // Base
z-10    // Dropdown
z-20    // Sticky
z-30    // Overlay
z-40    // Modal
z-50    // Popover/Toast
```

---

## Do's and Don'ts

### Do
- Use flexbox for one-dimensional layouts
- Use grid for two-dimensional layouts
- Apply consistent spacing (8px grid)
- Use `flex-shrink-0` on fixed-width sidebars
- Use `overflow-auto` on scrollable containers

### Don't
- Don't use floats for layout
- Don't use fixed positioning unless necessary
- Don't hardcode heights on content areas
- Don't forget `min-w-0` on flex children with truncation
- Don't mix percentage and pixel widths inconsistently
