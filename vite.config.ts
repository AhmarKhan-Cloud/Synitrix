import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Email delivery is handled by the Supabase Edge Function in
// supabase/functions/send-email. It keeps provider credentials off the client.
export default defineConfig({
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
});
