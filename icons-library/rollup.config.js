import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import svgr from '@svgr/rollup';
import packageJson from './package.json';

export default {
 input: 'src/index.tsx',
 output: [
  {
   dir: packageJson.main,
   format: 'esm',
   sourcemap: true,
  },
 ],
 plugins: [
  peerDepsExternal(),
  resolve(),
  typescript({ useTsconfigDeclarationDir: true }),
  filesize(),
  svgr(),
 ],
};
