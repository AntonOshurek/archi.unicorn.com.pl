export default {
  plugins: ['prettier-plugin-astro'],
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  printWidth: 80,
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.mdx',
      options: {
        parser: 'mdx',
      },
    },
  ],
};
