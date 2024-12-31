import express from 'express';
import cors from 'cors';
import './models/RoomInfoModel.js';
import './models/RegistrationModel.js';
import RegistrationRoute from './routes/RegistrationRoute.js';
import RoomRoute from './routes/RoomRoute.js';
import db from './config/Database.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(RegistrationRoute);
app.use(RoomRoute);

// Sinkronisasi database
(async () => {
  try {
    await db.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
