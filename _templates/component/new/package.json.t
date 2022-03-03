---
to: packages/<%= h.changeCase.param(name) %>/package.json
---
{
  "name": "@uicr/<%= h.changeCase.param(name) %>",
  "version": "0.0.1",
  "description": "Generic <%= h.changeCase.sentence(name) %> component",
  "scripts": {
    "test:unit": "vue-cli-service test:unit",
    "lint": "vue-cli-service lint",
    "build": "vue-cli-service build --target lib src/index.ts"
  },
  "main": "dist/<%= h.changeCase.param(name) %>.umd.js",
  "module": "src/index.ts",
  "dependencies": {
    "@uicr/core": "*",
    "core-js": "^3.21.1",
    "vue": "3.2.31"
  },
  "devDependencies": {
    "@babel/core": "^7.15.8",
    "@types/jest": "^27.0.3",
    "@types/node": "^16.11.12",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "@vue/cli-plugin-babel": "~5.0.1",
    "@vue/cli-plugin-eslint": "~5.0.1",
    "@vue/cli-plugin-typescript": "~5.0.1",
    "@vue/cli-plugin-unit-jest": "~5.0.1",
    "@vue/cli-service": "~5.0.1",
    "@vue/eslint-config-prettier": "^6.0.0",
    "@vue/eslint-config-typescript": "^5.0.2",
    "@vue/test-utils": "^2.0.0-0",
    "babel-loader": "^8.2.2",
    "eslint-plugin-prettier": "^3.1.3",
    "eslint-plugin-vue": "^8.5.0",
    "eslint": "^8.10.0",
    "prettier": "^2.5.1",
    "typescript": "~3.9.3",
    "vue-jest": "^5.0.0-0",
    "vue-loader": "^17.0.0",
    "vue-template-compiler": "^2.6.12"
  }
}
