import { expect } from 'chai';

import { createClient } from '@/index';

it('should', async () => {
  const client = await createClient();

  const { status, data } = await client.getAnimeById({ id: 21 });

  expect(status).to.equal(200);
  expect(data).to.be.an('object');
  expect(data.data).to.have.property('mal_id', 21);
  expect(data.data).to.have.property('title', 'One Piece');
});
