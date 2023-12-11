import { faker } from '@faker-js/faker';
import db from '../db';

export async function cardSeeder() {
  try {
    console.log('Dropping existing card records...');
    await db.card.deleteMany();

    console.log('Creating new card seeders...');

    for (let i = 0; i < 50; i++) {
      await db.card.create({
        data: {
          title: faker.lorem.sentence(),
          url: faker.internet.url(),
          description: faker.lorem.paragraph(),
          image_url: faker.image.imageUrl(),
        },
      });
    }

    console.log('Card seeders created successfully.');
  }
  catch (error) {
    console.log(error);
  }
  finally {
    await db.$disconnect();
  }
}
