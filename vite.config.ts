import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import fs from 'fs'
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  base: '/test-teleg-app',
  plugins: [
    // Allows using the compilerOptions.paths property in tsconfig.json.
    // https://www.npmjs.com/package/vite-tsconfig-paths
    tsconfigPaths(),
    // Allows using self-signed certificates to run the dev server using HTTPS.
    // https://www.npmjs.com/package/@vitejs/plugin-basic-ssl
    basicSsl(),
  ],
  build: {
    target: 'esnext',
  },
  publicDir: './public',
  server: {
    port: 443,
    host: "0.0.0.0",
    hmr: {
        host: 'tg-mini-app.local',
        port: 443,
    },
    https: {
      key: fs.readFileSync('./.cert/ca.key'),
      cert: fs.readFileSync('./.cert/ca.crt'),
    },
  },
});
