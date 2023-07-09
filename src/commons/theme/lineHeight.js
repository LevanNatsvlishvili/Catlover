const fontSizes = require('./fontSize');

const lineHeight = {
  '1-0': '1.0rem',
  '1-2': '1.2rem',
  '1-3': '1.3rem',
  '1-4': '1.4rem',
  '1-5': '1.5rem',
  '1-6': '1.6rem',
  '1-7': '1.7rem',
  '1-8': '1.8rem',
  '2-0': '2.0rem',
  '2-2': '2.2rem',
  '2-3': '2.3rem',
  '2-4': '2.4rem',
  '2-5': '2.5rem',
  '2-6': '2.6rem',
  '2-8': '2.8rem',
  '3-0': '3rem',
  '3-2': '3.2rem',
  '3-4': '3.4rem',
  '3-6': '3.6rem',
  '4-1': '4.1rem',
  '4-8': '4.8rem',
  '5-2': '5.2rem',
  '5-5': '5.5rem',
  '6-3': '6.3rem',
  '7-2': '7.2rem',
  none: 0,
  normal: 'normal',
  initial: 'initial',
  h1: `calc(var(--ratio) *${fontSizes.h1})`,
  h2: `calc(var(--ratio) *${fontSizes.h2})`,
  h3: `calc(var(--ratio) *${fontSizes.h3})`,
  h4: `calc(var(--ratio) *${fontSizes.h4})`,
  h5: `calc(var(--ratio) *${fontSizes.h5})`,
  h6: `calc(var(--ratio) *${fontSizes.h6})`,
  subtitle1: `calc(var(--ratio) *${fontSizes.subtitle1})`,
  subtitle2: `calc(var(--ratio) *${fontSizes.subtitle2})`,
  subtitle3: `calc(var(--ratio) *${fontSizes.subtitle3})`,
  body1: `calc(var(--ratio) *${fontSizes.body1})`,
  body2: `calc(var(--ratio) *${fontSizes.body2})`,
};

module.exports = lineHeight;
