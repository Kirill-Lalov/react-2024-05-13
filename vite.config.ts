import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': resolve(__dirname, 'src', 'app'),
      '@components': resolve(__dirname, 'src', 'components'),
      '@hooks': resolve(__dirname, 'src', 'hooks'),
      '@providers': resolve(__dirname, 'src', 'providers'),
      '@redux': resolve(__dirname, 'src', 'redux'),
      '@router': resolve(__dirname, 'src', 'router'),
      '@pages': resolve(__dirname, 'src', 'pages'),
    },
  },
});
