# Media Asset Dashboard - Claude Skills

This directory contains custom Claude Code skills tailored to the Media Asset Dashboard project.

## Available Skills

### 1. Design Review (`design-review`)
**Purpose:** Automatically review code for design system compliance

**Activation:** Claude activates this when you ask to review code or check design system compliance

**What it checks:**
- ✅ Color palette compliance (only approved colors)
- ✅ Typography scale adherence
- ✅ Spacing system (8px grid)
- ✅ Component pattern consistency
- ✅ Interactive states (hover, focus, active, disabled)
- ✅ Border radius tokens
- ✅ Proper use of Radix UI + CVA patterns

**Example usage:**
```
"Review my changes for design system compliance"
"Check if this component follows our style guide"
"Does this code match our design system?"
```

---

### 2. Frontend Design (`frontend-design`)
**Purpose:** Build production-grade UI components with the Media Asset Dashboard aesthetic

**Activation:** Claude activates this when you ask to build or create UI components

**What it does:**
- 🎨 Generates components using the exact color palette (#010101, #181818, #E5FF00, etc.)
- 📐 Applies proper typography scale and 8px spacing grid
- 🧩 Uses Radix UI primitives with CVA for variants
- ✨ Implements all interactive states with smooth transitions
- 🎯 Follows existing component patterns (AssetCard, SectionCard, etc.)
- 🚀 Avoids generic AI aesthetics with the distinctive lime-yellow accent style

**Example usage:**
```
"Build a new asset upload component"
"Create a settings panel following our design system"
"Design a notification card for the dashboard"
```

---

## How Skills Work

Skills are automatically activated by Claude based on your request. You don't need to explicitly invoke them - just ask naturally:

- **For reviews:** "Review this code" or "Check design compliance"
- **For building:** "Create a modal" or "Build a filter component"

---

## Design System Reference

Both skills reference the comprehensive design system located in `/design-system/`:

- `colors.md` - Complete color palette
- `typography.md` - Type scale and text styles
- `spacing.md` - 8px grid system and layout
- `components.md` - Component patterns and usage
- `states.md` - Interactive states and transitions
- `layout.md` - Layout dimensions and structure

---

## Key Design Principles

### Color Palette
- **Dark-first theme** - Never use light backgrounds
- **Lime-yellow accent (#E5FF00)** - The signature color for active/selected states
- **Strict palette** - Only use defined colors, no variations

### Typography
- **System font stack** for performance
- **Defined scale** - 10px to 24px with specific weights
- **High contrast** - Optimized for dark backgrounds

### Spacing
- **8px base grid** - All spacing in multiples of 8px
- **Consistent padding** - Cards: 24px, Buttons: 16px/8px
- **Use gap over margin** - For better component composition

### Components
- **Radix UI primitives** - For accessible, headless components
- **CVA for variants** - Class Variance Authority pattern
- **cn() utility** - Always use for class merging
- **TypeScript** - Fully typed interfaces

### Interactive States
- **Always include:** Hover, Focus, Active, Disabled states
- **Smooth transitions** - 150ms for colors, 300ms for transforms
- **Keyboard accessible** - focus-visible with lime-yellow ring

---

## Installation

These skills are project-level and automatically available to anyone working in this repository. No additional setup needed - just start coding!

---

## Contributing

When updating skills:

1. Edit the `SKILL.md` files in their respective directories
2. Keep design system references in sync with `/design-system/` docs
3. Test skills by asking Claude to review/build components
4. Commit changes to share with the team

---

## Examples

### Using Design Review
```
You: "I just updated SectionCard.tsx - can you review it?"

Claude: *activates design-review skill*
- Checks colors against palette
- Validates spacing
- Reviews interactive states
- Provides specific feedback with fixes
```

### Using Frontend Design
```
You: "Build a new sidebar menu component with collapsible sections"

Claude: *activates frontend-design skill*
- Uses exact color palette
- Applies typography scale
- Follows spacing system
- Implements all states
- Includes TypeScript types
- Matches existing patterns
```

---

## Questions?

These skills work alongside Claude Code's standard capabilities. They simply ensure that all code follows the Media Asset Dashboard design system automatically!
