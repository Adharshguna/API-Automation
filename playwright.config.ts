import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [['list'], ['html'], ['allure-playwright']],
  use: {
    baseURL: 'https://jsonplaceholder.typicode.com',
  },
});
