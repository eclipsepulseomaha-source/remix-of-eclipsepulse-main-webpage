

## Add Subtle Background Animations

Add gentle, ambient light animations to the page background to create visual depth without overwhelming the content.

### What will change

Add CSS-based animated gradient orbs/blobs that float slowly behind the page content. These will be subtle, low-opacity glowing shapes that drift around, giving the site a living, dynamic feel.

### Sections affected

- **Global background** (`src/pages/Index.tsx`) - Add floating gradient orbs that move slowly across the entire page behind all content

### Animation details

- 2-3 soft gradient orbs (using the existing blue/orange brand colors) positioned absolutely behind content
- Slow, looping float animations (15-20 second cycles) so they feel ambient, not distracting
- Very low opacity (10-20%) and large blur radius so they look like soft light sources
- All done with pure CSS (keyframes + pseudo-elements or divs), no extra dependencies needed

### Technical approach

1. **`src/index.css`** - Add keyframes for slow floating/drifting motion
2. **`src/pages/Index.tsx`** - Add 2-3 absolutely-positioned gradient orb divs behind the page content, each with different animation delays and positions for organic movement

The Hero section and all other sections will remain fully visible and unaffected -- these orbs sit behind everything at `z-index: 0`.

