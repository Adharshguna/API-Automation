import { test, expect } from '@playwright/test';

test('GET /posts/1 should return post with id 1', async ({ request }) => {
  const response = await request.get('/posts/1');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body).toHaveProperty('title');
});
