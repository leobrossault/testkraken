module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
  plugins: ["only-warn"],
  ignorePatterns: [
    "tests/",
    ".github/",
    ".pretterrc",
    ".prettierignore",
    ".stylelintignore"
  ],
  // add your custom rules here
  rules: {
    "vue/no-v-html": "off"
  },
  globals: {
    $nuxt: true,
    datalayer: true,
    jwplayer: true,
    zE: true
  }
}
