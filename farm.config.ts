import { defineConfig } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

const localIconPath = `${path.resolve(process.cwd())}/src/assets`;

console.log(localIconPath)

export default defineConfig({
  vitePlugins: [vue(),
  createSvgIconsPlugin({
    iconDirs: [localIconPath],
    symbolId: `icon-[dir]-[name]`,
    inject: 'body-last',
    // customDomId: '__SVG_ICON_LOCAL__'
  })]
});
