# CSS Setup Documentation

## Overview
This project uses **pure CSS** (no preprocessors) with **Vite** as the build tool.

## File Structure

```
_src/css/
├── reset.css           # Modern CSS reset
├── main.css            # Global styles (imports reset.css)
└── pages/              # Page-specific styles
    ├── index.css
    ├── why-us.css
    ├── contact.css
    ├── sectors.css
    ├── articles.css
    ├── careers.css
    ├── team.css
    ├── services.css
    └── thank-you.css
```

## Build Commands

- **Development (watch mode)**: `npm run dev`
- **Production build**: `npm run build`

## Output Location

All CSS files are compiled to:
- `web/dist/css/main.css` - Global styles
- `web/dist/css/pages/*.css` - Page-specific styles

## CSS Reset Features

The modern CSS reset includes:
- ✅ Box-sizing reset
- ✅ Margin/padding normalization
- ✅ Improved media defaults (images, video, etc.)
- ✅ Form element normalization
- ✅ Accessibility features (reduced motion support)
- ✅ Typography improvements
- ✅ Cross-browser consistency

## CSS Custom Properties (Variables)

Defined in `_src/css/main.css`:

### Colors
- `--color-primary`: #000000
- `--color-secondary`: #ffffff
- `--color-text`: #333333
- `--color-background`: #ffffff

### Typography
- `--font-family-base`: System font stack
- `--font-size-base`: 16px
- `--line-height-base`: 1.6

### Spacing
- `--spacing-xs`: 0.25rem
- `--spacing-sm`: 0.5rem
- `--spacing-md`: 1rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 4rem

## Usage in Templates

Templates already reference the correct CSS paths:

**Global styles** (in `_layouts/layout.html`):
```html
<link rel="stylesheet" href="/_dist/css/main.css">
```

**Page-specific styles** (in individual templates):
```html
{% block pageCss %}
<link rel="stylesheet" href="/_dist/css/pages/index.css">
{% endblock %}
```

## Adding New Styles

### For Global Styles
Edit `_src/css/main.css`

### For Page-Specific Styles
Edit the corresponding file in `_src/css/pages/`

### Creating New Page Styles
1. Create a new CSS file in `_src/css/pages/`
2. Add it to `vite.config.js` in the `input` object
3. Reference it in your template

## Vite Configuration

The `vite.config.js` file is configured to:
- Import CSS files as entry points
- Output to `web/dist/`
- Generate source maps for debugging
- Support CSS code splitting
- Watch for changes in development mode

## Browser Support

The CSS reset and setup support all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Best Practices

1. **Use CSS custom properties** for values that might change
2. **Keep page-specific styles separate** from global styles
3. **Use semantic class names** (BEM methodology recommended)
4. **Test with reduced motion** preferences enabled
5. **Build before deploying** to ensure all CSS is compiled

## Troubleshooting

### CSS not updating?
Run `npm run build` to rebuild the CSS files.

### Missing CSS file?
Check that the file is:
1. Created in `_src/css/pages/`
2. Added to `vite.config.js`
3. Referenced correctly in the template

### Build errors?
Check the console output for syntax errors in your CSS files.

