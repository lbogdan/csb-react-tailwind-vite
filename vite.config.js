import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const server = process.env.CODESANDBOX_SSE ? {
  hmr: {
    port: 443
  }
} : {}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server
})
