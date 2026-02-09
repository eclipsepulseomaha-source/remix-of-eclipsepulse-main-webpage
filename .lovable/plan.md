

## Spline 3D Background Animation

Add an animated Spline 3D sun background behind the **Services ("What We Do")** and **Contact ("Get In Touch")** sections.

### What will happen

1. **Install `@splinetool/react-spline`** - the official React component for embedding Spline scenes.

2. **Create a reusable `SplineBackground` component** - wraps the Spline viewer as an absolute-positioned background layer with reduced opacity so it doesn't overpower the content.

3. **Add the Spline background to two sections**:
   - **Services section** (`src/components/Services.tsx`) - behind the "What We Do" cards
   - **Contact section** (`src/components/Contact.tsx`) - behind the "Get In Touch" form and info

The Spline scene URL: `https://my.spline.design/animatedsun-uPq1kFZWf9UOnPCq24b09KBv/`

### Technical Details

- Install `@splinetool/react-spline` and `@splinetool/runtime` as dependencies
- Create `src/components/SplineBackground.tsx` that renders the Spline scene as a background layer using `position: absolute`, `inset: 0`, `z-index: 0`, and `pointer-events: none`
- Wrap both the Services and Contact sections with `position: relative` and `overflow: hidden` (already in place for Contact) so the animation stays contained
- Existing content will remain above the background via `z-index: 10` (already using `relative z-10` in both sections)
- The Spline component will be lazy-loaded to avoid slowing down initial page load

