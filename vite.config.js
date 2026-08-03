import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        assessment: 'assessment.html',
        writing: 'writing.html',
        captable: 'captable.html',
      },
    },
  },
});
