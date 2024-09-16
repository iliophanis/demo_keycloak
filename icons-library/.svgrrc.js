module.exports = {
 jsx: {
  babelConfig: {
   plugins: [
    [
     '@svgr/babel-plugin-remove-jsx-attribute',
     {
      elements: ['svg'],
      attributes: ['xmlns'],
     },
     'remove xmlns attribute from svg tag',
    ],
   ],
  },
 },
};
