/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    spacing: require('./src/commons/theme/spacing'),
    inset: require('./src/commons/theme/spacing'),
    colors: require('./src/commons/theme/colors'),
    fontWeight: require('./src/commons/theme/fontWeight'),
    fontSize: require('./src/commons/theme/fontSize'),
    borderRadius: require('./src/commons/theme/borderRadius'),
    lineHeight: require('./src/commons/theme/lineHeight'),
    zIndex: require('./src/commons/theme/zIndex'),
    container: require('./src/commons/theme/container'),
    maxWidth: require('./src/commons/theme/spacing'),
    minWidth: require('./src/commons/theme/spacing'),
    maxHeight: require('./src/commons/theme/spacing'),
    minHeight: require('./src/commons/theme/spacing'),
    display: require('./src/commons/theme/display'),
  },
  plugins: [],
};
