export const createPixiViewConfig = (config?: any) => {
  return {
    name: 'pixiview.config.js',
    content: `export default {
  name: ${config.name || 'blank-project'},
  port: ${config.port || 4000}
}`
  };
};
