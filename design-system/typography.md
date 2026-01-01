# Typography

## Overview
The typography system uses the system font stack for optimal performance and native feel. The scale is designed for readability on dark backgrounds with clear hierarchy.

---

## Font Family

### Primary Font Stack
```css
font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

### Monospace Font Stack
```css
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

---

## Type Scale

| Style | Size | Weight | Line Height | Letter Spacing | Tailwind Classes |
|-------|------|--------|-------------|----------------|------------------|
| **H1** | 24px | 600 (Semibold) | 1.5 (36px) | -0.3125px | `text-2xl font-semibold tracking-tight` |
| **H2** | 18px | 600 (Semibold) | 1.5 (27px) | -0.3125px | `text-lg font-semibold tracking-tight` |
| **H3** | 16px | 600 (Semibold) | 1.5 (24px) | -0.3125px | `text-base font-semibold tracking-tight` |
| **H4** | 14px | 600 (Semibold) | 1.5 (21px) | 0 | `text-sm font-semibold` |
| **Body** | 14px | 400 (Regular) | 1.5 (21px) | 0 | `text-sm` |
| **Body Bold** | 14px | 700 (Bold) | 1.5 (21px) | 0 | `text-sm font-bold` |
| **Small** | 12px | 400 (Regular) | 1.4 (16.8px) | 0 | `text-xs` |
| **Small Bold** | 12px | 700 (Bold) | 1.4 (16.8px) | 0 | `text-xs font-bold` |
| **Label** | 11px | 400 (Regular) | 1.4 (15.4px) | 0 | `text-[11px]` |
| **Label Bold** | 10px | 700 (Bold) | 1.4 (14px) | 0 | `text-[10px] font-bold` |

---

## Visual Hierarchy

```
H1 - Page Titles
═══════════════════════════════════════
24px Semibold - Main page headings

H2 - Section Headers
───────────────────────────────────────
18px Semibold - Major section titles

H3 - Subsection Headers
16px Semibold - Category names, card titles

H4 - Labels & Emphasis
14px Semibold - Form labels, emphasized text

Body Text
14px Regular - Standard content, descriptions

Small Text
12px Regular - Metadata, timestamps, tags

Label Text
11px Regular - Badges, counters, tiny labels
```

---

## Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| **Regular** | 400 | Body text, descriptions, secondary content |
| **Medium** | 500 | Slightly emphasized text (rarely used) |
| **Semibold** | 600 | Headings H1-H4, navigation items |
| **Bold** | 700 | Button text, strong emphasis, selected states |

---

## Usage Examples

### Headings
```tsx
// H1 - Page title
<h1 className="text-2xl font-semibold tracking-tight text-[#F0F0F0]">
  Media Library
</h1>

// H2 - Section header
<h2 className="text-lg font-semibold tracking-tight text-[#F0F0F0]">
  Recent Uploads
</h2>

// H3 - Card title
<h3 className="text-base font-semibold tracking-tight text-[#F0F0F0]">
  Project Assets
</h3>

// H4 - Label
<h4 className="text-sm font-semibold text-[#F0F0F0]">
  File Name
</h4>
```

### Body Text
```tsx
// Primary body text
<p className="text-sm text-[#F0F0F0]">
  This is the main content text.
</p>

// Secondary body text
<p className="text-sm text-[#BABABA]">
  This is secondary or supporting text.
</p>

// Bold body text
<span className="text-sm font-bold text-[#F0F0F0]">
  Important text
</span>
```

### Small & Label Text
```tsx
// Small text (metadata, tags)
<span className="text-xs text-[#BABABA]">
  Updated 2 hours ago
</span>

// Badge text
<span className="text-xs font-bold text-[#F0F0F0]">
  16:9
</span>

// Label text (counters)
<span className="text-[11px] text-[#BABABA]">
  24 items
</span>

// Duration label
<span className="text-[10px] font-bold text-[#F0F0F0]">
  02:34
</span>
```

---

## Text Colors by Context

| Context | Color | Tailwind |
|---------|-------|----------|
| Primary text | `#F0F0F0` | `text-[#F0F0F0]` |
| Secondary text | `#BABABA` | `text-[#BABABA]` |
| High emphasis | `#FFFFFF` | `text-white` |
| Active/Selected | `#E5FF00` | `text-[#E5FF00]` |
| Links | `#80B8FF` | `text-[#80B8FF]` |
| Disabled | `#5D5D5D` | `text-[#5D5D5D]` |

---

## Line Height Guidelines

| Content Type | Line Height | Tailwind |
|--------------|-------------|----------|
| Headings | 1.5 | `leading-normal` |
| Body text | 1.5 | `leading-normal` |
| Small/Labels | 1.4 | `leading-snug` |
| Single-line UI | 1 | `leading-none` |

---

## Truncation & Overflow

### Single Line Truncation
```tsx
<span className="truncate">
  Very long filename that will be truncated...
</span>
```

### Multi-line Clamping
```tsx
<p className="line-clamp-2">
  Description that spans multiple lines but is limited to two lines maximum...
</p>
```

---

## Do's and Don'ts

### Do
- Use the defined type scale consistently
- Apply proper hierarchy (H1 → H2 → H3 → H4)
- Use semibold (600) for headings, regular (400) for body
- Use secondary color (#BABABA) for supporting text
- Use the accent color (#E5FF00) for active/selected states

### Don't
- Don't use font sizes outside the scale
- Don't use light weights (300) or heavy weights (800+)
- Don't mix different font families
- Don't use underlines except for links
- Don't center-align large blocks of text
