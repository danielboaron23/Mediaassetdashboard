# Interactive States

## Overview
Consistent interactive states provide visual feedback and improve usability. All interactive elements must have clear hover, active, focus, and disabled states.

---

## State Overview

| State | Description | When Applied |
|-------|-------------|--------------|
| **Default** | Normal resting state | Initial render |
| **Hover** | Mouse over element | `onMouseEnter` |
| **Active/Pressed** | Being clicked | `onMouseDown` |
| **Focus** | Keyboard focused | Tab navigation |
| **Selected** | Currently active option | Toggle/selection |
| **Disabled** | Cannot interact | `disabled` prop |
| **Loading** | Processing action | Async operations |

---

## Hover States

### Navigation Items
```tsx
// Sidebar/Navigation item
<button className="
  bg-transparent
  hover:bg-[#282828]
  transition-colors duration-150
">
  Navigation Item
</button>
```

### Buttons
```tsx
// Default button hover
<button className="
  bg-[#282828]
  hover:bg-[#333333]
  transition-colors duration-150
">
  Button
</button>

// Ghost button hover
<button className="
  bg-transparent
  hover:bg-[#282828]
  transition-colors duration-150
">
  Ghost Button
</button>
```

### Text/Links
```tsx
// Text hover with accent
<span className="
  text-[#BABABA]
  hover:text-[#E5FF00]
  transition-colors duration-150
">
  Hover text
</span>

// Link hover
<a className="
  text-[#80B8FF]
  hover:text-[#A8CFFF]
  hover:underline
  transition-colors duration-150
">
  Link
</a>
```

### Cards
```tsx
// Card hover with scale
<div className="
  bg-[#181818]
  hover:bg-[#1f1f1f]
  hover:scale-[1.02]
  transition-all duration-300 ease-out
">
  Card Content
</div>
```

---

## Active/Pressed States

```tsx
// Button active state
<button className="
  bg-[#282828]
  hover:bg-[#333333]
  active:bg-[#404040]
  active:scale-[0.98]
  transition-all duration-150
">
  Press me
</button>
```

---

## Focus States

### Keyboard Focus (focus-visible)
Use `focus-visible` to show focus only on keyboard navigation:

```tsx
// Button focus
<button className="
  outline-none
  focus-visible:ring-2
  focus-visible:ring-[#E5FF00]
  focus-visible:ring-offset-2
  focus-visible:ring-offset-[#010101]
">
  Focusable Button
</button>

// Input focus
<input className="
  border border-[#333333]
  outline-none
  focus:border-[#E5FF00]
  focus:ring-1
  focus:ring-[#E5FF00]
" />
```

### Focus Ring Tokens

| Property | Value | Usage |
|----------|-------|-------|
| Ring Color | `#E5FF00` | Primary focus indicator |
| Ring Width | 2px | Buttons, cards |
| Ring Width | 1px | Inputs, form elements |
| Ring Offset | 2px | Separation from element |
| Offset Color | `#010101` | Match background |

---

## Selected States

### Navigation Selected
```tsx
// Selected navigation item
<button className={cn(
  "px-4 py-2 rounded-lg transition-colors",
  isSelected
    ? "bg-[#282828] text-[#E5FF00]"
    : "bg-transparent text-[#F0F0F0] hover:bg-[#282828]"
)}>
  <Icon className={cn(
    "h-4 w-4",
    isSelected ? "text-[#E5FF00]" : "text-[#BABABA]"
  )} />
  <span>Item</span>
</button>
```

### Tab/Filter Selected
```tsx
// Selected tab
<button className={cn(
  "text-sm transition-colors",
  isSelected
    ? "font-bold text-[#E5FF00]"
    : "font-normal text-[#BABABA] hover:text-[#F0F0F0]"
)}>
  Filter Option
</button>
```

### Toolbar Item Selected
```tsx
// Selected toolbar button
<button className={cn(
  "p-2 rounded-lg transition-colors",
  isSelected
    ? "bg-[#333333] text-[#E5FF00]"
    : "bg-transparent text-[#BABABA] hover:bg-[#282828]"
)}>
  <Icon className="h-5 w-5" />
</button>
```

### Counter Badge (Selected)
```tsx
// Counter showing selected count
<span className="
  px-2 py-1 rounded-full
  bg-[#5D5D5D] text-[#E5FF00]
  text-xs font-bold
">
  24
</span>
```

---

## Disabled States

### Buttons
```tsx
<button
  disabled
  className="
    bg-[#282828] text-[#F0F0F0]
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:pointer-events-none
  "
>
  Disabled Button
</button>
```

### Inputs
```tsx
<input
  disabled
  className="
    bg-[#282828] text-[#F0F0F0]
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:bg-[#1a1a1a]
  "
/>
```

### Links/Text
```tsx
<span className="
  text-[#BABABA]
  opacity-50
  cursor-not-allowed
">
  Disabled text
</span>
```

### Disabled Tokens

| Property | Value |
|----------|-------|
| Opacity | 50% (`opacity-50`) |
| Cursor | `not-allowed` |
| Pointer Events | `none` |
| Background | Slightly darker or unchanged |

---

## Loading States

### Button Loading
```tsx
<button disabled className="relative">
  <span className={cn(isLoading && "opacity-0")}>
    Save
  </span>
  {isLoading && (
    <div className="absolute inset-0 flex items-center justify-center">
      <Loader2 className="h-4 w-4 animate-spin" />
    </div>
  )}
</button>
```

### Skeleton Loading
```tsx
// Skeleton placeholder
<div className="
  animate-pulse
  bg-[#282828]
  rounded-lg
  h-[196px] w-full
" />
```

### Loading Spinner
```tsx
import { Loader2 } from "lucide-react";

<Loader2 className="h-6 w-6 animate-spin text-[#E5FF00]" />
```

---

## Transitions

### Standard Transitions
```tsx
// Color transitions (fast)
transition-colors duration-150

// All properties (medium)
transition-all duration-300

// Transform only
transition-transform duration-300

// Opacity
transition-opacity duration-200
```

### Timing Functions

| Name | Value | Usage |
|------|-------|-------|
| **ease-out** | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations |
| **ease-in** | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| **ease-in-out** | `cubic-bezier(0.4, 0, 0.2, 1)` | General transitions |
| **linear** | `linear` | Loading spinners |

```tsx
// Recommended defaults
transition-all duration-300 ease-out      // General purpose
transition-colors duration-150 ease-out   // Color changes
transition-transform duration-300 ease-out // Scale/move
```

---

## Animation Patterns

### Hover Scale
```tsx
<div className="
  hover:scale-105
  transition-transform duration-300 ease-out
">
  Scaleable element
</div>
```

### Fade In
```tsx
<div className="
  opacity-0 animate-in fade-in duration-300
">
  Fading element
</div>
```

### Pulse (Notification)
```tsx
<span className="
  relative
  after:absolute after:inset-0
  after:animate-ping after:bg-[#E5FF00] after:rounded-full
  after:opacity-75
">
  <span className="relative h-2 w-2 rounded-full bg-[#E5FF00]" />
</span>
```

---

## State Combination Examples

### Complete Button States
```tsx
<button className="
  /* Base */
  px-4 py-2 rounded-lg
  bg-[#282828] text-[#F0F0F0]

  /* Hover */
  hover:bg-[#333333]

  /* Active */
  active:bg-[#404040] active:scale-[0.98]

  /* Focus */
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

### Complete Input States
```tsx
<input className="
  /* Base */
  px-3 py-2 rounded-lg
  bg-[#282828] text-[#F0F0F0]
  border border-[#333333]
  placeholder:text-[#BABABA]

  /* Hover */
  hover:border-[#404040]

  /* Focus */
  focus:border-[#E5FF00]
  focus:ring-1 focus:ring-[#E5FF00]
  focus:outline-none

  /* Disabled */
  disabled:opacity-50 disabled:cursor-not-allowed

  /* Transition */
  transition-colors duration-150
" />
```

---

## Do's and Don'ts

### Do
- Always provide hover feedback on interactive elements
- Use `focus-visible` for keyboard-only focus styles
- Keep transitions short (150-300ms)
- Use the accent color (#E5FF00) for selected states
- Reduce opacity for disabled states

### Don't
- Don't remove focus outlines without alternatives
- Don't use delays on hover states
- Don't animate layout properties (width, height) - use transform
- Don't forget disabled states on interactive elements
- Don't use jarring color changes without transitions
