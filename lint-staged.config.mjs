const sharedPrettierTargets = '*.{css,scss,md,json,mdx}';

const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  [sharedPrettierTargets]: ['prettier --write'],
};

export default config;
