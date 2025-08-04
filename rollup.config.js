// rollup.config.js
export default {
  input: '14-user-task/src/index.js',
  output: {
    dir: 'dist',           // автоматически создаст папку dist и bundle.js
    format: 'iife'
  }
};
