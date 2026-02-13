import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Base public path
  base: '/_dist/',

  // Build configuration
  build: {
    // Output directory relative to project root
    outDir: 'web/dist',

    // Don't empty the output directory (to preserve other assets)
    emptyOutDir: false,

    // Generate manifest for asset tracking
    manifest: true,

    // Rollup options
    rollupOptions: {
      input: {
        // Main JavaScript entry point
        main: resolve(__dirname, '_src/js/main.js'),

        // Main CSS entry point
        'css/main': resolve(__dirname, '_src/css/main.css'),

        // Page-specific CSS files
        'css/pages/index': resolve(__dirname, '_src/css/pages/index.css'),
        'css/pages/why-us': resolve(__dirname, '_src/css/pages/why-us.css'),
        'css/pages/contact': resolve(__dirname, '_src/css/pages/contact.css'),
        'css/pages/sectors': resolve(__dirname, '_src/css/pages/sectors.css'),
        'css/pages/articles': resolve(__dirname, '_src/css/pages/articles.css'),
        'css/pages/careers': resolve(__dirname, '_src/css/pages/careers.css'),
        'css/pages/team': resolve(__dirname, '_src/css/pages/team.css'),
        'css/pages/services': resolve(__dirname, '_src/css/pages/services.css'),
        'css/pages/thank-you': resolve(__dirname, '_src/css/pages/thank-you.css'),
      },
      output: {
        // Output structure
        entryFileNames: (chunkInfo) => {
          // JavaScript files go to js/
          if (chunkInfo.name === 'main') {
            return 'js/[name].js';
          }
          // CSS entry points are handled by assetFileNames
          return '[name].js';
        },
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // CSS files maintain their path structure based on the entry name
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            // Use the original entry name to preserve the path
            const name = assetInfo.names?.[0] || assetInfo.name;
            // Remove the .css extension from the name as [extname] will add it
            const nameWithoutExt = name.replace(/\.css$/, '');
            return `${nameWithoutExt}[extname]`;
          }
          // Other assets
          return 'assets/[name]-[hash][extname]';
        },
      },
    },

    // Source maps for debugging
    sourcemap: true,

    // Disable CSS code splitting to ensure each entry gets its own CSS file
    cssCodeSplit: true,
  },

  // Server configuration for development
  server: {
    // Serve from root
    origin: 'http://localhost:5173',

    // Watch for changes
    watch: {
      usePolling: true,
    },
  },

  // CSS configuration
  css: {
    devSourcemap: true,
  },
});

