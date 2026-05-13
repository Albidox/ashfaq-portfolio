# Phase 3 Figma Wireframe Planning Fallback

Project: Sk Ashfaq Bux Premium Portfolio Redesign V1.0
Locked concept: The Architect's Console
Date: 2026-05-13

## Status
- New Figma file created: Yes
- File name: Sk Ashfaq Bux Premium Portfolio — V1 Wireframe
- File link: https://www.figma.com/design/lrTKcmuuDuyaiph4ONDn7S
- Page creation and wireframe drawing via MCP: Blocked by Figma Starter plan MCP tool call limit.
- Fallback used: This complete structured wireframe blueprint.

## Required Figma Pages (to create in this exact order)
1. Style Guide
2. Desktop Homepage
3. Mobile Homepage
4. Components
5. Notes for Codex

---

## 1) Style Guide Page

### Canvas
- Add one main frame named: `Style Guide / The Architect's Console`
- Suggested frame size: `1600 x 2200`
- Background: near-black navy token placeholder

### Header
- Title: `The Architect's Console - Wireframe Style Guide`
- Subtitle: `Low-fidelity planning only | Premium command-center direction`

### Blocks to include
1. Color Roles block
- Base/Near-black
- Surface/Navy
- Glass surface placeholder
- Accent cyan
- Accent electric blue
- Accent violet (limited use)

2. Typography Roles block
- Inter for headings/body
- JetBrains Mono for code tags, stack labels
- Example line using mono: `SPRING_BOOT | POSTGRESQL | REDIS | DOCKER`

3. Spacing and Layout Rhythm block
- Desktop content width target: 1200 to 1280 inside 1440 viewport
- Desktop section gap: 96 to 120
- Card gap: 20 to 24
- Card padding: 24 to 32
- Mobile section gap: 56 to 72
- Mobile card padding: 16 to 20

4. Locked Homepage Section Map block
- 1 Premium Floating Navbar
- 2 Architect's Console Hero
- 3 Tech Stack Marquee / Proof Strip
- 4 Problems I Solve
- 5 Services Grid
- 6 Process / Workflow
- 7 Project Roadmap
- 8 Contact CTA
- 9 Footer

5. Annotation Legend block
- [Glass Card] = frosted container placeholder
- [Mono Label] = JetBrains Mono stack tag placeholder
- [Motion Note] = subtle reveal guidance only
- [CTA Node] = conversion-critical block

6. Constraints block
- Keep low-fidelity wireframe only
- No final polish on this phase
- Business-first copy hierarchy
- Mobile performance-safe animation budget

---

## 2) Desktop Homepage Page

### Main frame
- Frame name: `Desktop Homepage / 1440`
- Width: `1440`
- Suggested height: `5200` (can expand)
- Outer padding left/right: `80`
- Content max width: `1280`

### Section wireframe order and structure

1. Premium Floating Navbar
- Floating rounded container near top
- Left: name/logo text placeholder
- Center/right: section links placeholders
- Rightmost: primary button placeholder (`Book a Call`)
- Note: translucent/glass placeholder label

2. Architect's Console Hero
- Left column:
  - Eyebrow tag in mono (`JAVA BACKEND ARCHITECT`)
  - H1 placeholder
  - 2-line business-value body placeholder
  - Primary CTA and secondary CTA placeholders
- Right column:
  - Console/API response mock panel placeholder
  - Architecture mini-blocks placeholders (`API`, `DB`, `CACHE`, `QUEUE`)
- Motion note: subtle reveal of panel and labels

3. Tech Stack Marquee / Proof Strip
- Horizontal strip block under hero
- Multiple mono pill placeholders:
  - `Spring Boot`, `Microservices`, `PostgreSQL`, `Redis`, `Docker`, `Testing Automation`
- Add note: marquee can degrade to wrap on smaller widths

4. Problems I Solve
- Section heading + short supporting copy
- 3 problem cards (row)
- Each card fields:
  - Problem title
  - Impact line
  - Short solution angle

5. Services Grid
- 6 cards in 3x2 desktop layout
- Cards:
  - Business websites
  - Spring Boot APIs
  - Admin dashboards
  - Testing automation
  - Business automation
  - Website fixes
- Each card: icon placeholder, title, outcome line, stack tag line in mono

6. Process / Workflow
- 4-step horizontal flow
- Step cards:
  - Discover
  - Architect
  - Build
  - Stabilize
- Connector arrows/lines as wireframe only
- Add delivery expectations note per step

7. Project Roadmap
- 3 featured project placeholders
- Card structure:
  - Project name placeholder
  - Problem statement
  - Backend solution summary
  - Stack tags in mono
  - Result metric placeholder
  - CTA (`View Case Study` placeholder)
- Add honesty note: only real projects

8. Contact CTA
- High-contrast CTA block placeholder
- Heading + confidence copy
- Two action buttons:
  - `Book Discovery Call`
  - `Send Requirements`
- Trust microcopy line placeholder

9. Footer
- Left: name/title mini bio
- Middle: quick links placeholders
- Right: contact/social placeholders
- Bottom legal line placeholder

---

## 3) Mobile Homepage Page

### Main frame
- Frame name: `Mobile Homepage / 390`
- Width: `390`
- Suggested height: `6800` (can expand)
- Side padding: `16`

### Mobile layout rules
- Preserve exact section order from desktop
- Stack all multi-column content into single column
- Convert wide cards to vertical blocks
- Keep CTA buttons full-width or near full-width

### Mobile section specifics
1. Navbar
- Compact floating top bar
- Menu icon placeholder + CTA mini button

2. Hero
- Single-column hierarchy
- Console panel moved below main CTA

3. Tech Strip
- Horizontal scroll pills or wrapped chips

4. Problems I Solve
- 3 stacked cards

5. Services Grid
- 6 stacked cards (or 2-column compact if readable)

6. Process
- Vertical stepper with connector line

7. Project Roadmap
- 3 stacked project cards with tags and metric chips

8. Contact CTA
- Stacked copy + two full-width buttons

9. Footer
- Compact stacked footer content

---

## 4) Components Page

Create low-fidelity reusable component blocks:

1. `Comp/Navbar/Floating`
- Desktop and mobile variants

2. `Comp/Hero/ArchitectConsole`
- With optional right console panel slot

3. `Comp/ProofStrip/TechMarquee`
- Pill tag row variant

4. `Comp/Card/Problem`

5. `Comp/Card/Service`
- Includes mono stack label slot

6. `Comp/Step/Workflow`
- Step card + connector variant

7. `Comp/Card/ProjectRoadmap`
- With result metric slot and CTA slot

8. `Comp/CTA/Contact`
- Dual button variant

9. `Comp/Footer/Primary`

10. Utility chips and labels
- `Chip/StackMono`
- `Badge/Status`
- `Label/SectionEyebrow`

Component note:
- Keep border, spacing, and text placeholders simple.
- Avoid final gradients or detailed effects in this phase.

---

## 5) Notes for Codex Page

Add implementation-facing notes by section:

1. Global
- Use Inter for body/headings.
- Use JetBrains Mono for stack tags and code-style labels.
- Motion budget: subtle fade/slide/stagger only.

2. Visual direction guardrails
- Dark command-center tone with restrained accents.
- Glass cards are semantic placeholders now; final tuning in later phase.

3. Conversion priorities
- Hero CTA and Contact CTA are highest priority.
- Every service card must show business outcome, not only tech stack.

4. Performance constraints
- Do not rely on heavy particle systems.
- Keep mobile interaction smooth.

5. Content integrity
- Do not show fake completed projects.
- Keep project placeholders clearly marked until real case data is ready.

6. Build order recommendation for next phase
- Navbar -> Hero -> Proof strip -> Problems -> Services -> Process -> Projects -> CTA -> Footer

---

## Quick Build Checklist (when MCP limit clears)
- [ ] Create 5 pages with exact names.
- [ ] Add Style Guide frame and token blocks.
- [ ] Build Desktop frame at 1440 width with all 9 sections.
- [ ] Build Mobile frame at 390 width with same section order.
- [ ] Add Components page with reusable blocks.
- [ ] Add Notes for Codex implementation guidance.
- [ ] Confirm low-fidelity wireframe only (no high-fidelity polish).
