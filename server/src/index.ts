import { initMongoConnection } from './db/initMongoConnection.ts';
import { setupServer } from './server.ts';

const bootstrap = async () => {
  try {
    await initMongoConnection();

    setupServer();
  } catch (error) {
    console.error(error);
  }
};

bootstrap();