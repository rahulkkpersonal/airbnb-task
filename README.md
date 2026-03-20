# Airbnb Inspired Home

A static Airbnb-inspired landing page built with plain HTML, CSS, and JavaScript.

## Files

- `index.html`: page structure and UI markup
- `styles.css`: layout, responsive styles, header behavior, popups, and animations
- `script.js`: interactive behavior for search flows, sticky header states, sliders, and menus

## Features

- Responsive desktop and mobile layouts
- Desktop search header with sticky compact state
- Sticky desktop search shortcuts that reopen the full search UI
- Mobile search modal with:
  - destination suggestions
  - date picker
  - guest counters
- Service and destination popovers
- Auto-sliding horizontal content rails
- Smooth desktop header and sticky-header transitions

## How I Developed This

I developed this as a plain front-end prototype without any framework.

The approach was:

1. Build the page structure in `index.html`.
2. Add responsive styling in `styles.css` for desktop and mobile layouts.
3. Add interaction logic in `script.js` for:
   - desktop search popovers
   - sticky header behavior
   - mobile full-screen search popup
   - date selection and guest controls
   - auto-sliding rails
4. Test the UI in real browser viewports and refine the behavior, especially:
   - mobile popup flow
   - sticky desktop header interactions
   - smooth header transitions
   - bottom-scroll header stability

## Notes

- This is a static UI prototype, so search actions do not submit real backend data.
- Some external assets such as Google Fonts or remote images depend on network availability.
- The project was iterated by adjusting the UI directly and validating behavior in browser-based checks.
