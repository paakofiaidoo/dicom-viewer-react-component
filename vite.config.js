import { defineConfig, loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react'

const viteEnv = {}


export default ({ mode }) => {
  return defineConfig({
    plugins: [reactRefresh()],
    define: viteEnv,

  });
}