# Color Palette

## Overview
The Media Asset Dashboard uses a dark-first color palette optimized for media content viewing. The palette is built on a neutral gray scale with a distinctive lime-yellow accent color.

---

## Background Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Neutral/900** | `#010101` | rgb(1, 1, 1) | Main background, sidebars, app shell |
| **Neutral/800** | `#181818` | rgb(24, 24, 24) | Cards, panels, content areas, modals |
| **Neutral/700** | `#282828` | rgb(40, 40, 40) | Buttons, inputs, interactive elements, hover states |
| **Neutral/600** | `#333333` | rgb(51, 51, 51) | Borders, dividers, active button states |
| **Neutral/500** | `#404040` | rgb(64, 64, 64) | Selected states, elevated elements |
| **Neutral/400** | `#5D5D5D` | rgb(93, 93, 93) | Badge backgrounds, muted elements |

### Visual Scale
```
Neutral/900  ████████  #010101  (Darkest - Main BG)
Neutral/800  ████████  #181818  (Cards)
Neutral/700  ████████  #282828  (Interactive)
Neutral/600  ████████  #333333  (Borders)
Neutral/500  ████████  #404040  (Selected)
Neutral/400  ████████  #5D5D5D  (Muted)
```

---

## Text Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Neutral/100** | `#F0F0F0` | rgb(240, 240, 240) | Primary text, headings, body copy |
| **Neutral/200** | `#BABABA` | rgb(186, 186, 186) | Secondary text, placeholders, captions |
| **Neutral/0** | `#FFFFFF` | rgb(255, 255, 255) | High emphasis text, active labels |

### Visual Scale
```
Neutral/0    ████████  #FFFFFF  (High Emphasis)
Neutral/100  ████████  #F0F0F0  (Primary Text)
Neutral/200  ████████  #BABABA  (Secondary Text)
```

---

## Accent Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Primary** | `#E5FF00` | rgb(229, 255, 0) | Active states, selections, primary actions, highlights |
| **Secondary** | `#80B8FF` | rgb(128, 184, 255) | Links, secondary emphasis, informational |

### Visual Scale
```
Primary    ████████  #E5FF00  (Lime-Yellow)
Secondary  ████████  #80B8FF  (Light Blue)
```

---

## Semantic Colors

| Purpose | Color | Hex |
|---------|-------|-----|
| **Success** | Green | `#22C55E` |
| **Warning** | Amber | `#F59E0B` |
| **Error** | Red | `#EF4444` |
| **Info** | Blue | `#3B82F6` |

---

## Overlay Colors

| Token | Value | Usage |
|-------|-------|-------|
| **Overlay Dark** | `rgba(0, 0, 0, 0.5)` | Button overlays on images |
| **Overlay Light** | `rgba(255, 255, 255, 0.1)` | Subtle highlights |
| **Scrim** | `rgba(0, 0, 0, 0.8)` | Modal backgrounds |

---

## Usage in Tailwind

### Background Classes
```tsx
bg-[#010101]  // Neutral/900 - Main background
bg-[#181818]  // Neutral/800 - Cards
bg-[#282828]  // Neutral/700 - Interactive
bg-[#333333]  // Neutral/600 - Borders/Active
bg-[#404040]  // Neutral/500 - Selected
bg-[#5D5D5D]  // Neutral/400 - Muted
```

### Text Classes
```tsx
text-[#F0F0F0]  // Neutral/100 - Primary text
text-[#BABABA]  // Neutral/200 - Secondary text
text-[#FFFFFF]  // Neutral/0 - High emphasis
text-[#E5FF00]  // Primary accent
text-[#80B8FF]  // Secondary accent (links)
```

### Border Classes
```tsx
border-[#333333]  // Standard border
border-[#E5FF00]  // Focus/Active border
```

---

## Color Combinations

### Card on Background
- Background: `#010101`
- Card: `#181818`
- Contrast ratio: Sufficient for layering

### Text on Card
- Card background: `#181818`
- Primary text: `#F0F0F0`
- Contrast ratio: 12.5:1 (WCAG AAA)

### Accent on Dark
- Background: `#181818`
- Accent text: `#E5FF00`
- Contrast ratio: 14.2:1 (WCAG AAA)

---

## Do's and Don'ts

### Do
- Use Neutral/900 for the main app background
- Use Neutral/800 for cards and elevated surfaces
- Use the primary accent (#E5FF00) sparingly for key interactions
- Maintain proper contrast ratios (minimum 4.5:1)

### Don't
- Don't use pure black (#000000) - use Neutral/900 instead
- Don't create new gray values outside this palette
- Don't use the accent color for large areas
- Don't use light backgrounds (this is a dark-theme app)
