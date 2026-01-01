---
name: design-review
description: Review code for Media Asset Dashboard design system compliance
---

# Design Review Skill

## Purpose
Automatically review code changes to ensure they comply with the Media Asset Dashboard design system, including colors, typography, spacing, component patterns, and interactive states.

## When to Activate
Use this skill when:
- Reviewing pull requests or code changes
- Checking if components follow the design system
- Validating new UI implementations
- User asks to "review design" or "check design system compliance"

## Design System Reference

### Color Palette
The project uses a strictly defined dark-theme color palette:

**Backgrounds:**
- `#010101` - Neutral/900 (Main background, sidebars, app shell)
- `#181818` - Neutral/800 (Cards, panels, content areas, modals)
- `#282828` - Neutral/700 (Buttons, inputs, interactive elements, hover states)
- `#333333` - Neutral/600 (Borders, dividers, active button states)
- `#404040` - Neutral/500 (Selected states, elevated elements)
- `#5D5D5D` - Neutral/400 (Badge backgrounds, muted elements)

**Text:**
- `#F0F0F0` - Neutral/100 (Primary text, headings, body copy)
- `#BABABA` - Neutral/200 (Secondary text, placeholders, captions)
- `#FFFFFF` - Neutral/0 (High emphasis text, active labels)

**Accents:**
- `#E5FF00` - Primary accent (Active states, selections, primary actions, highlights)
- `#80B8FF` - Secondary accent (Links, secondary emphasis, informational)

**Semantic:**
- `#22C55E` - Success (Green)
- `#F59E0B` - Warning (Amber)
- `#EF4444` - Error (Red)
- `#3B82F6` - Info (Blue)

### Typography Scale
All text must use the defined scale:

| Style | Size | Weight | Tailwind |
|-------|------|--------|----------|
| H1 | 24px | 600 | `text-2xl font-semibold tracking-tight` |
| H2 | 18px | 600 | `text-lg font-semibold tracking-tight` |
| H3 | 16px | 600 | `text-base font-semibold tracking-tight` |
| H4 | 14px | 600 | `text-sm font-semibold` |
| Body | 14px | 400 | `text-sm` |
| Body Bold | 14px | 700 | `text-sm font-bold` |
| Small | 12px | 400 | `text-xs` |
| Small Bold | 12px | 700 | `text-xs font-bold` |
| Label | 11px | 400 | `text-[11px]` |
| Label Bold | 10px | 700 | `text-[10px] font-bold` |

### Spacing System
8px base grid - all spacing must be multiples of 8px (with 2px/4px for micro-spacing):

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| 2xs | 2px | `gap-0.5`, `p-0.5` | Tight gaps |
| xs | 4px | `gap-1`, `p-1` | Small gaps |
| sm | 8px | `gap-2`, `p-2` | Standard padding |
| md | 12px | `gap-3`, `p-3` | Medium padding |
| lg | 16px | `gap-4`, `p-4` | Section gaps |
| xl | 24px | `gap-6`, `p-6` | Card padding |
| 2xl | 32px | `gap-8`, `p-8` | Major sections |
| 3xl | 48px | `gap-12`, `p-12` | Page level |

### Border Radius
| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| sm | 4px | `rounded` | Small elements |
| md | 8px | `rounded-lg` | Buttons, inputs, cards |
| lg | 12px | `rounded-xl` | Large cards |
| xl | 16px | `rounded-2xl` | Modals |
| 2xl | 24px | `rounded-3xl` | Pills |
| full | 50% | `rounded-full` | Circles, avatars |

### Component Patterns
All components should:
- Use Radix UI primitives when possible
- Use CVA (Class Variance Authority) for variants
- Always use the `cn()` utility for class merging
- Include proper TypeScript types
- Export both component and type interfaces

### Interactive States
All interactive elements MUST have:
- **Hover:** Visual feedback with `hover:` classes
- **Focus:** Keyboard focus with `focus-visible:ring-2 focus-visible:ring-[#E5FF00]`
- **Active:** Press feedback with `active:` classes
- **Disabled:** Proper disabled states with `disabled:opacity-50`
- **Transitions:** Use `transition-colors duration-150` or `transition-all duration-300`

**Selected States:**
- Navigation: `bg-[#282828] text-[#E5FF00]`
- Filter tags: `font-bold text-[#E5FF00]`
- Toolbar: `bg-[#333333] text-[#E5FF00]`

## Review Checklist

When reviewing code, check for these violations:

### 1. Color Violations
- ❌ Using colors outside the defined palette
- ❌ Using `#000000` instead of `#010101`
- ❌ Creating new gray values
- ❌ Using light backgrounds (this is dark-theme only)
- ✅ All colors match the palette exactly

### 2. Typography Violations
- ❌ Font sizes outside the type scale
- ❌ Font weights not 400, 500, 600, or 700
- ❌ Mixing different font families
- ❌ Incorrect line heights
- ✅ All text uses the defined scale

### 3. Spacing Violations
- ❌ Arbitrary spacing values (e.g., 13px, 17px, 23px)
- ❌ Spacing not multiples of 8px (except 2px/4px)
- ❌ Using margins instead of gap for siblings
- ❌ Inconsistent padding within component types
- ✅ All spacing follows the 8px grid

### 4. Component Pattern Violations
- ❌ Not using existing UI components from `/src/components/ui/`
- ❌ Not using `cn()` for class merging
- ❌ Hardcoded colors without design tokens
- ❌ Missing TypeScript interfaces
- ❌ Inline component definitions
- ✅ Follows established patterns

### 5. Interactive State Violations
- ❌ Missing hover states on interactive elements
- ❌ No focus-visible styles for keyboard navigation
- ❌ Missing disabled states
- ❌ No transitions on state changes
- ❌ Not using accent color (#E5FF00) for selected states
- ✅ All states properly implemented

### 6. Border Radius Violations
- ❌ Custom border radius values
- ❌ Inconsistent rounding on similar elements
- ✅ Using defined radius tokens

## Review Process

1. **Read Changed Files**
   - Use the Read tool to examine all modified files
   - Focus on `.tsx`, `.ts`, `.css` files

2. **Check Against Design System**
   - Cross-reference colors with the palette
   - Validate typography against the scale
   - Verify spacing follows the 8px grid
   - Check component patterns match existing patterns

3. **Identify Violations**
   - List specific violations with file:line references
   - Categorize by severity (Critical, Warning, Suggestion)

4. **Provide Feedback**
   Format: `[file.tsx:123] CRITICAL: Using #1a1a1a instead of #181818`

   Severity levels:
   - **CRITICAL:** Wrong colors, breaking accessibility, wrong patterns
   - **WARNING:** Inconsistent spacing, missing states
   - **SUGGESTION:** Minor improvements, optimization opportunities

5. **Suggest Fixes**
   - Provide exact code corrections
   - Reference design system documentation
   - Show before/after examples

## Example Review Output

```markdown
## Design System Review

### ✅ Passing
- Typography follows the scale
- Proper use of cn() utility
- Border radius tokens used correctly

### ❌ Violations Found

#### Critical
1. [SectionCard.tsx:27] Color violation
   - Found: `bg-[#1a1a1a]`
   - Should be: `bg-[#181818]` (Neutral/800)

2. [FilterBar.tsx:45] Missing interactive states
   - No hover state defined
   - Add: `hover:bg-[#282828] transition-colors duration-150`

#### Warnings
1. [AssetCard.tsx:12] Spacing violation
   - Found: `gap-5` (20px)
   - Should be: `gap-6` (24px) to follow 8px grid

### 📋 Recommendations
- Consider extracting repeated color classes into component variants
- Add focus-visible states for better keyboard navigation

### 🔧 Suggested Changes

\`\`\`tsx
// Before
<button className="bg-[#1a1a1a] text-white px-5">
  Click me
</button>

// After
<button className="bg-[#181818] text-[#F0F0F0] px-6 hover:bg-[#282828] transition-colors duration-150">
  Click me
</button>
\`\`\`
```

## Integration with Development Workflow

Use this skill:
- **Before commits:** Review your changes for design system compliance
- **During PR reviews:** Check teammate's code
- **When building new components:** Validate against patterns
- **When refactoring:** Ensure consistency is maintained

## Critical Files to Reference
- `/design-system/colors.md` - Complete color palette
- `/design-system/typography.md` - Type scale details
- `/design-system/spacing.md` - Spacing system
- `/design-system/components.md` - Component patterns
- `/design-system/states.md` - Interactive states
- `/src/guidelines/Guidelines.md` - Design guidelines
- `/src/components/dashboard/SectionCard.tsx` - Example component
