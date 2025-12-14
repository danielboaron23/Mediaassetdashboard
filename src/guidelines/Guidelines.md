# WSC Sport - Design Guidelines
## Media Asset Management Dashboard

---

## 1. Overview

This document defines the design guidelines for WSC Sport's media asset management interface - a dark-themed dashboard for browsing, organizing, and managing video/media assets like intros, outros, thumbnails, and overlay graphics.

**Design Philosophy:** Professional, immersive dark UI optimized for media production workflows. High contrast accents ensure visual hierarchy while reducing eye strain during extended use.

---

## 2. Color Palette

### Core Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Neutral/900** | `#010101` | Main background |
| **Neutral/800** | `#181818` | Cards, panels, popups |
| **Neutral/700** | `#282828` | Buttons, inputs, tags (default) |
| **Neutral/600** | `#333333` | Borders, dividers, hover states |
| **Neutral/500** | `#404040` | Selected states |
| **Neutral/400** | `#5D5D5D` | Badges background |
| **Neutral/200** | `#BABABA` | Secondary text, placeholders |
| **Neutral/100** | `#F0F0F0` | Primary text |
| **Neutral/0** | `#FFFFFF` | High emphasis text |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary/300** | `#E5FF00` | Primary accent, selected items, active states |
| **Primary/100** | `#80B8FF` | Links, secondary accent |

### Special Colors

| Token | Value | Usage |
|-------|-------|-------|
| **Overlay** | `rgba(0,0,0,0.5)` | Buttons on images |
| **White/92%** | `#FFFFFF` with 92% opacity | High contrast text |

---

## 3. Typography

**Font Family:** Inter

### Type Scale

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| **H3** | 24px | Semi Bold (600) | 1.4 | Page titles |
| **Header/5** | 16px | Semi Bold (600) | 1.4 | Section headers, category text |
| **Body S** | 14px | Regular (400) | 1.4-1.5 | Body text, file names |
| **Body S Bold** | 14px | Bold (700) | 1.4 | Buttons, emphasis |
| **Body/2** | 12px | Regular (400) | 1.4 | Filter tags, badges |
| **Body/2 Bold** | 12px | Bold (700) | 1.4 | Selected tags |
| **Label** | 11px | Regular (400) | 1.4 | Sidebar menu items |
| **Label Bold** | 10px | Bold (700) | 1.4 | Duration labels |

### Letter Spacing
- H3, Header/5: `-0.3125px`
- All others: `0`

---

## 4. Spacing & Layout

### Base Unit
**8px** base grid system

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| **xs** | 2px | Tight gaps (icon groups) |
| **sm** | 4px | Small gaps (filter tags, badges) |
| **md** | 8px | Standard gaps, padding |
| **lg** | 16px | Section gaps, sidebar padding |
| **xl** | 24px | Large section gaps, card padding |

### Layout Dimensions

| Element | Width | Height |
|---------|-------|--------|
| Elements Bar | 80px | Full height |
| Category Sidebar | 271px | Full height |
| Main Content | Fluid (1568px example) | Scrollable |
| Content Card | 1520px | Auto |
| Media Card | 350px | Auto |
| Media Thumbnail | 349px | 196px |

---

## 5. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| **sm** | 8px | Buttons, inputs, cards, badges |
| **md** | 10px | Navigation items |
| **lg** | 16px | Counters (pill shape) |
| **xl** | 24px | Filter tags (pill shape) |
| **full** | 16777200px (circular) | Avatar buttons, icons |

---

## 6. Components

### 6.1 Elements Bar (Left Toolbar)

- **Width:** 80px
- **Background:** `#010101`
- **Border:** Right `1px solid #333333`
- **Padding:** 8px
- **Icon Size:** 20px
- **Icon Color Default:** `#BABABA`
- **Icon Color Selected:** `#FFFFFF`
- **Item Gap:** 4px
- **Label Size:** 11px
- **Selected State:** Background `#333333`, rounded 8px

### 6.2 Category Sidebar

- **Width:** 271px
- **Background:** `#010101`
- **Border:** Right `1px solid #333333`
- **Padding:** 16px (left), 17px (right), 16px (top)
- **Heading:** 16px Regular white
- **Gap between items:** 4px

#### Navigation Button States

| State | Background | Text Color | Counter BG | Counter Text |
|-------|------------|------------|------------|--------------|
| Default | Transparent | `#F0F0F0` | `#282828` | `#F0F0F0` |
| Selected | `#282828` | `#E5FF00` | `#5D5D5D` | `#E5FF00` |
| Hover | `#282828` | `#F0F0F0` | `#282828` | `#F0F0F0` |

- **Button Height:** 40px
- **Border Radius:** 10px
- **Padding:** 12px horizontal
- **Icon Size:** 16px
- **Counter Border Radius:** pill (16777200px)
- **Counter Padding:** 8px horizontal

### 6.3 Search Input

- **Background:** `#282828`
- **Border:** `1px solid #333333`
- **Border Radius:** 8px
- **Height:** 32px
- **Padding:** 8px
- **Icon:** 16px search icon, color `#BABABA`
- **Placeholder:** 14px Regular `#BABABA`

### 6.4 Dropdown

- **Same styling as Search Input**
- **Arrow Icon:** 16px, rotated 180°
- **Text:** 14px Regular `#BABABA`

### 6.5 Filter Tags

#### Default State
- **Background:** `#282828`
- **Text:** 12px Regular `#F0F0F0`
- **Border Radius:** 24px (pill)
- **Height:** 28px
- **Padding:** 16px horizontal

#### Selected State
- **Background:** `#282828`
- **Text:** 12px Bold `#E5FF00`
- **Border Radius:** 24px (pill)

### 6.6 Content Section Card

- **Background:** `#181818`
- **Border:** `1px solid #333333`
- **Border Radius:** 8px
- **Padding:** 24px
- **Gap between sections:** 24px
- **Header divider:** `1px solid #333333`

#### Section Header
- **Title:** 16px Semi Bold `#F0F0F0`
- **Count:** 16px Semi Bold `#8E8E8E`
- **"View all" Button:** 32px height, background `#333333`, text 14px Bold `#F0F0F0`
- **Upload Button:** 32px × 32px, background `#333333`, icon 24px

### 6.7 Media Card

- **Width:** 350px
- **Thumbnail:** 349px × 196px
- **Thumbnail Border:** `1px solid #333333`
- **Thumbnail Border Radius:** 8px
- **Gap between thumbnail and info:** 8px
- **Gap between title and badges:** 8px

#### Favorite Button (on thumbnail)
- **Position:** Top left, 8px margin
- **Size:** 28px × 28px
- **Background:** `rgba(0,0,0,0.5)`
- **Border Radius:** circular
- **Icon Size:** 16px
- **States:** Outlined (not favorited), Filled yellow (favorited)

#### Duration Label (on thumbnail)
- **Position:** Bottom right, 8px margin
- **Background:** `#282828`
- **Border Radius:** 24px
- **Height:** 16px
- **Padding:** 6px horizontal, 4px vertical
- **Text:** 10px Bold `#F0F0F0`

#### File Name
- **Font:** 14px Regular `#F0F0F0`
- **Line Height:** 1.5

#### Aspect Ratio Badges
- **Background:** `#282828`
- **Border Radius:** 8px
- **Height:** 22px
- **Padding:** 9px horizontal, 3px vertical
- **Text:** 12px Medium white
- **Gap:** 6px

### 6.8 View Toggle (Grid/List)

- **Border Radius:** 8px (group container)
- **Button Size:** 32px height
- **Padding:** 4px horizontal, 8px vertical
- **Icon Size:** 24px
- **Active:** Background `#282828`, icon `#F0F0F0`
- **Inactive:** Background `#282828`, icon `#F0F0F0`

### 6.9 "Show More" Button

- **Background:** Transparent
- **Height:** 32px
- **Padding:** 8px
- **Icon:** 16px "+" icon, color `#BABABA`
- **Text:** 14px Bold `#BABABA`

---

## 7. Icons

- **Primary Size:** 16px (navigation), 20px (toolbar), 24px (buttons)
- **Default Color:** `#BABABA`
- **Active/Selected Color:** `#F0F0F0` or `#E5FF00`
- **Style:** Outlined, Material Design style

### Icon Set Used
- search
- grid_view
- menu (list view)
- chevron_left
- add
- upload
- star (favorite)
- space_dashboard
- title
- subtitles
- Custom: MagiCrop, Color Palette, Transitions, Media

---

## 8. States & Interactions

### Hover States
- Buttons: Background change to `#333333`
- Cards: Subtle border highlight
- Navigation items: Background `#282828`

### Active/Selected States
- Navigation: Background `#282828`, text `#E5FF00`, counter `#5D5D5D` with `#E5FF00` text
- Filter tags: Bold text, color `#E5FF00`
- Toolbar items: Background `#333333`

### Focus States
- Inputs: Border color `#E5FF00`
- Buttons: Outline `2px solid #E5FF00`

---

## 9. Responsive Considerations

### Breakpoints
- **Desktop:** 1920px (full layout)
- **Large Desktop:** 1568px+ (content area)
- **Tablet:** Collapse Elements Bar, show hamburger menu
- **Mobile:** Stack sidebars, single column grid

### Grid Behavior
- Media cards: 4 columns at 1520px, wrap responsively
- Gap: 24px between cards
- Minimum card width: 350px

---

## 10. Accessibility

- **Contrast Ratios:** All text meets WCAG AA minimum (4.5:1)
- **Focus Indicators:** Visible outline on all interactive elements
- **Touch Targets:** Minimum 32px × 32px
- **Screen Reader:** All icons have aria-labels
- **Keyboard Navigation:** Full tab support

---

## 11. Animation Guidelines

- **Duration:** 150-200ms for micro-interactions
- **Easing:** ease-out for reveals, ease-in-out for transforms
- **Hover transitions:** opacity and background-color
- **Card hover:** subtle scale(1.01) with box-shadow
- **Loading states:** Skeleton screens with shimmer animation

---

## 12. File Naming Convention

```
[category]_[type]_[state].png
```
Examples:
- `intro_game_highlight.png`
- `thumbnail_player_action.png`
- `overlay_score_display.png`