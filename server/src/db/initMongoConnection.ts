import mongoose from 'mongoose';
import { env } from '../utils/env'; 

export const initMongoConnection = async (): Promise<void> => {
  try {
    const user: string = env('MONGODB_USER');
    const pwd: string = env('MONGODB_PASSWORD');
    const url: string = env('MONGODB_URL');
    const db: string = env('MONGODB_DB'); 

    const connectionString = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`;

    await mongoose.connect(connectionString);

    console.log('MongoDB connection successfully established!');
  } catch (error) {
    console.error('Error while setting up MongoDB connection', error);
    throw error;
  }
};



// import mongoose from 'mongoose';
// import { env } from '../utils/env';

// export const initMongoConnection = async () => {
//   try {
//     const user = env('MONGODB_USER');
//     const pwd = env('MONGODB_PASSWORD');
//     const url = env('MONGODB_URL');
//     // const db = env('MONGODB_DB');

//     await mongoose.connect(
//    `mongodb+srv://svitlanagalevich:OKdqlmAiQ6jGLpMD@cluster0.eug0n.mongodb.net/task_board?retryWrites=true&w=majority&appName=Cluster0`
//     );
//     console.log('Mongo connection successfully established!');
//   } catch (error) {
//     console.log('Error while setting up mongo connection', error);
//     throw error;
//   }
// };