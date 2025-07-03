

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping", // ✅ Use your GitHub repo name exactly
  plugins: [react()],
});
