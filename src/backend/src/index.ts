import dotenv from 'dotenv';
import app from './app';
import connectToDataBase from './database/connection';

dotenv.config();

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectToDataBase();
});
